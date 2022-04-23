#!/bin/bash

mkdir -p $HOME/.kube
sudo cp -i /etc/kubernetes/admin.conf /users/$USER/.kube/config
sudo chown $(id -u):$(id -g) $HOME/.kube/config
kubectl apply -f "https://cloud.weave.works/k8s/net?k8s-version=$(kubectl version | base64 | tr -d '\n')"


set -x
namespaceStatus=$(kubectl get namespaces centigro -o json | jq .status.phase -r)

if [ $namespaceStatus == "Active" ]
then
    echo "Namespace ramcoin exists, need to clean up"
    kubectl delete namespaces centigro
fi

echo "Creating namespace centigro"
kubectl create namespace centigro 

echo "Creating postgres volume and config"
kubectl create -f postgres-config.yaml --namespace centigro
kubectl create -f postgres-storage.yaml --namespace centigro
 
echo "Creating pods"
kubectl create -f deployment.yaml --namespace centigro

echo "Update services to CloudLab IP"
cloudIp=$(ip address show eth1 | perl -nwe 'print /^\s+inet\s+(.*?)\//;')
# kubectl patch svc -n centigro web -p '{"spec":{"externalIPs":["$cloudIp"]}}'
sudo sed -i "s/;externalIPs = 0.0.0.0/externalIPs = $cloudIp/" service.yaml

echo "Creating services"
kubectl create -f service.yaml --namespace centigro

kubectl get pods -n centigro

