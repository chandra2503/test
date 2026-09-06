pipeline {
    agent any

    stages {

        stage('Checkout') {
            steps {
                git branch: 'main',
                    url: 'https://github.com/chandra2503/deployment.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh '''
                    docker build \
                    -t chandrakalaj/myapp1:${BUILD_NUMBER} .
                '''
            }
        }

        stage('Docker Login') {
            steps {
                withCredentials([
                    usernamePassword(
                        credentialsId: 'docker-hub',
                        usernameVariable: 'DOCKER_USERNAME',
                        passwordVariable: 'DOCKER_PASSWORD'
                    )
                ]) {
                    sh '''
                        echo "$DOCKER_PASSWORD" | docker login \
                        -u "$DOCKER_USERNAME" \
                        --password-stdin
                    '''
                }
            }
        }

        stage('Push Docker Image') {
            steps {
                sh '''
                    docker push chandrakalaj/myapp1:${BUILD_NUMBER}
                '''
            }
        }

       stage("Deploy Application") {
            steps {
                sh "microk8s kubectl apply -f deploymentfile.yaml"
            }
        }

        stage("Deploy Service") {
            steps {
                sh "microk8s kubectl apply -f servicefile.yaml"
            }
        }
 stage('Update Kubernetes Image') {
            steps {
                sh '''
                    microk8s kubectl set image \
                    deployment/nginx-deployment \
                    myapp1=chandrakalaj/myapp1:${BUILD_NUMBER}
                '''
            }
        }

        stage('Check Deployment') {
            steps {
                sh '''
                    microk8s kubectl rollout status \
                    deployment/nginx-deployment

                    microk8s kubectl get pods

                    microk8s kubectl get service
                '''
            }
        }
    }
}
