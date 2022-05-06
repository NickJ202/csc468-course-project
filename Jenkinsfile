pipeline {
    agent none 
    environment {
        docker_registry = 'manalaro1/postgres'
        docker_user =  'manalaro1'
    }
    stages {
        stage('Publish') {
            agent {
                kubernetes {
                    inheritFrom 'postgres'
                }
            }
            steps{
                container('docker') {
                    sh 'echo $DOCKER_TOKEN | docker login --username $DOCKER_USER --password-stdin'
                    sh 'docker build postgres'
                    sh 'docker tag postgres $DOCKER_REGISTRY:$BUILD_NUMBER'
                    sh 'docker push $DOCKER_REGISTRY:$BUILD_NUMBER'
                }
            }
        }
        stage ('Deploy') {
            agent {
                node {
                    label 'deploy'
                }
            }
            steps {
                sshagent(credentials: ['cloudlab']) {
                    sh "sed -i 's/DOCKER_USER/${DOCKER_USER}/g' postgres.yaml"
                    sh "sed -i 's/BUILD_NUMBER/${BUILD_NUMBER}/g' postgres.yaml"
                    sh 'scp -r -v -o StrictHostKeyChecking=no *.yaml patodo@pcvm767-1.emulab.net:~/'
                    sh 'ssh -o StrictHostKeyChecking=no patodo@pcvm767-1.emulab.net kubectl apply -f /users/patodo/postgres-config.yaml -n centigro'
                    sh 'ssh -o StrictHostKeyChecking=no patodo@pcvm767-1.emulab.net kubectl apply -f /users/patodo/postgres-storage.yaml -n centigro'
                    sh 'ssh -o StrictHostKeyChecking=no patodo@pcvm767-1.emulab.net kubectl apply -f /users/patodo/postgres.yaml -n centigro'
                    sh 'ssh -o StrictHostKeyChecking=no patodo@pcvm767-1.emulab.net kubectl apply -f /users/patodo/postgres-service.yaml -n centigro'                    
                }
            }
        }
    }
}