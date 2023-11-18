pipeline {
    agent any
    environment {
        CI = true
        ARTIFACTORY_ACCESS_TOKEN = credentials('artifactory-access-token')
        ServerIP = credentials('AllDadeIP')
        ServerUser = credentials('AllDadeUser')
        Port = credentials('AllDadePort')
        Artifactory = credentials('ArtifactoryIP') 
        DockerID = credentials('DockerHubUser')
        DevZone = credentials('AllDadeDevZone') 
        VERSION = "${BUILD_NUMBER}"
        SONARSCANNER = credentials('SonarScannerPath')
    }



    stages {
        
        stage('Clean Workspace') {
            steps {
                cleanWs()
            }
        }
 
        stage('Git Checkout') {
            steps {
                git branch: 'master', url: 'https://github.com/CCS-2022/all_dade_finish.git'
            }
        }

        stage('SonarQube Analysis') {
                
            steps {
                withSonarQubeEnv(credentialsId: 'Alldade-SonarQube', installationName: 'SonarServer') {
                    sh "$SONARSCANNER"
                }
            }    
        }

        stage('Create Image && Upload to DockerHub') {
            steps {
                script {
                    withCredentials([usernamePassword(credentialsId: 'dockerhub-credentials', usernameVariable: 'DOCKER_USERNAME', passwordVariable: 'DOCKER_PASSWORD')]) {
                        sh '''
                           docker build -t ${DockerID}/${DevZone}:${ENVS}-${VERSION} .
                           docker login -u $DOCKER_USERNAME -p $DOCKER_PASSWORD
                           docker push ${DockerID}/${DevZone}:${ENVS}-${VERSION}
                           
                        '''
                        //docker save -o ./ssfrontendCompressedImg${ENVS}-${VERSION}.tar ${DockerID}/${DevZone}:${ENVS}-${VERSION}
                    }
                }
            }
        }

        // stage('Upload to Artifactory') {
        //     agent {
        //         docker {
        //             image 'releases-docker.jfrog.io/jfrog/jfrog-cli-v2:2.2.0' 
        //             reuseNode true
        //         }
        //     }
        //     steps {
        //         echo "*** Uploading to Artifactory ***"
        //         sh 'jfrog rt upload --url http://${Artifactory}/artifactory/ --access-token ${ARTIFACTORY_ACCESS_TOKEN} ./${DevZone}CompressedImg${ENVS}-${VERSION}.tar ss-frontend-${ENVS}/'
        //     }
        // }

        stage("Deploy To Container"){
            steps {
                script {
                    echo '*** Executing remote commands ***'                  
                    try {
                        sh "ssh ${ServerUser}@${ServerIP} 'docker stop ${DevZone}'"
                    } catch (Exception e) {
                        echo "Container not running. Error: ${e}"
                    }
                    try {
                        sh "ssh ${ServerUser}@${ServerIP} 'docker rm ${DevZone}'"
                    } catch (Exception e) {
                        echo "Container not running. Error: ${e}"
                    }
                    sh "ssh ${ServerUser}@${ServerIP} 'docker pull ${DockerID}/${DevZone}:${ENVS}-${VERSION}'"
                    sh "ssh ${ServerUser}@${ServerIP} 'docker run -d -p ${Port}:${Port} --restart unless-stopped --name=${DevZone} ${DockerID}/${DevZone}:${ENVS}-${VERSION}'"
                }                
            }
        }
        
        stage('Remove Unused Docker Storage') {
            steps {
                echo '*** Removing Unused Images From Local Server ***'
                sh 'docker system prune -f'
                echo '*** Removing Unused Images From Remote SS Server ***'
                sh 'ssh ${ServerUser}@${ServerIP} docker system prune -f'
                }
        }
    }
}
    
