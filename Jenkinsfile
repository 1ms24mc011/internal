pipeline {
    agent any
    triggers {
        cron('* * * * *')
    }
    environment {
        DOCKERHUB_CRED = credentials('dockerhub')
        IMAGE_NAME = "aravind80555/internal"
    }
    stages {
        stage('checkout') {
            steps { git url: 'https://github.com/1ms24mc011/internal', branch: 'master' }
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
