#!/bin/bash

mkdir -p $HOME/.kube
sudo cp -i /etc/kubernetes/admin.conf /users/$USER/.kube/config
sudo chown $(id -u):$(id -g) $HOME/.kube/config

set -x
namespaceStatus=$(kubectl get namespaces centigro -o json | jq .status.phase -r)

if [ $namespaceStatus == "Active" ]
then
    echo "Namespace ramcoin exists, need to clean up"
    kubectl delete namespaces centigro
fi

echo "Creating namespace ramcoin"
kubectl create namespace centigro 
 
echo "Creating pods"
kubectl create -f deployment.yaml --namespace centigro

echo "Creating services"
kubectl create -f service.yaml --namespace centigro


kubectl get pods -n centigro

