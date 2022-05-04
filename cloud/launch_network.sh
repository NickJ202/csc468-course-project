#!/bin/bash

# Set up Kubernetes
set -x
mkdir -p $HOME/.kube
sudo cp -i /etc/kubernetes/admin.conf /users/$USER/.kube/config
sudo chown $(id -u):$(id -g) $HOME/.kube/config
kubectl apply -f "https://cloud.weave.works/k8s/net?k8s-version=$(kubectl version | base64 | tr -d '\n')"

# Set up Jenkins
sudo cp /etc/kubernetes/manifests/kube-apiserver.yaml /local/repository/kube-apiserver.yaml.backup
kubectl create clusterrolebinding permissive-binding --clusterrole=cluster-admin --user=admin --user=kubelet --group=system:serviceaccounts
kubectl -n kube-system create sa jenkins
kubectl create clusterrolebinding jenkins --clusterrole cluster-admin --serviceaccount=jenkins:jenkins


namespaceStatus=$(kubectl get namespaces centigro -o json | jq .status.phase -r)

if [ $namespaceStatus == "Active" ]
then
    echo "Namespace centigro exists, need to clean up"
    kubectl delete namespaces centigro
fi

echo "Creating namespace centigro"
kubectl create namespace centigro 

echo "Creating postgres volume and config"
kubectl create -f postgres/postgres-config.yaml --namespace centigro
kubectl create -f postgres/postgres-storage.yaml --namespace centigro

echo "Creating pods"
kubectl create -f api/api.yaml --namespace centigro
kubectl create -f postgres/postgres.yaml --namespace centigro
kubectl create -f web/web.yaml --namespace centigro
kubectl create -f jenkins/jenkins.yaml --namespace centigro

echo "Creating services"
kubectl create -f api/api-service.yaml --namespace centigro 
kubectl create -f postgres/postgres-service.yaml --namespace centigro 
kubectl create -f web/web-service.yaml --namespace centigro 
kubectl create -f jenkins/jenkins-service.yaml --namespace centigro 

kubectl get pods -n centigro

