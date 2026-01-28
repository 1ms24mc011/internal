pipeline {
    agent any
    environment {
        DOCKERHUB_CRED = credentials('dockerhub')
        IMAGE_NAME = "<dockerhub_username>/my_node_app"
    }
    stages {
        stage('checkout') {
            steps { git url: '<github_repo_ssh_url>', branch: 'main' }
        }
        stage('Build Docker Image') {
            steps {
                script { dockerImage = docker.build("${IMAGE_NAME}:latest") }
            }
        }
        stage('Push Docker Image') {
            steps {
                script {
                    docker.withRegistry('https://index.docker.io/v1/', 'dockerhub') {
                        dockerImage.push()
                    }
                }
            }
        }
    }
}
