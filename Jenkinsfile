pipeline {
    agent none 
    environment {
        registry = "manalaro1/api"
        docker_user = "manalaro1"
        docker_app = "manalaro1/api"
    }
    stages {
        stage('Publish') {
            agent {
                kubernetes {
                    inheritFrom 'api'
                }
            }
            steps{
                container('docker') {
                    sh 'echo $DOCKER_TOKEN | docker login --username $DOCKER_USER --password-stdin'
                    sh 'docker build -t $DOCKER_REGISTRY:$BUILD_NUMBER ./iam'
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
                    sh "sed -i 's/DOCKER_USER/${docker_user}/g' /local/repository/cloud/api/api.yaml"
                    sh "sed -i 's/DOCKER_APP/${docker_app}/g' /local/repository/cloud/api/api.yaml"
                    sh "sed -i 's/BUILD_NUMBER/${BUILD_NUMBER}/g' /local/repository/cloud/api/api.yaml"
                    sh 'scp -r -v -o StrictHostKeyChecking=no *.yaml nj892079@155.98.37.91:~/'
                    sh 'ssh -o StrictHostKeyChecking=no nj892079@155.98.37.91 kubectl apply -f /local/repository/cloud/api/api.yaml -n centigro'
                    sh 'ssh -o StrictHostKeyChecking=no nj892079@155.98.37.91 kubectl apply -f /local/repository/cloud/api/api-service.yaml -n centigro'                    
                }
            }
        }
    }
}
