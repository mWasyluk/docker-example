# 📘 docker-example:basics
A lightweight Express.js app containerized with Docker for hands-on experience with basic concepts of building images and running containers.

## 📁 Files Overview
[package.json](./package.json) - basics about the project and dependencies. \
[index.js](./index.js) - Express.js server's config; returns string value at the '/' endpoint.\
[Dockerfile](./Dockerfile) - builds image with node as the base; installs deps and starts the server.\
[.dockerignore](./.dockerignore) - lists paths unwanted in the build context (time and memory leaks).

## 🔨 Build & Run
1. ```git clone https://github.com/mWasyluk/docker-example```
2. ```cd docker-example/basics```
3. ```docker build -t docker-example:basics .```
4. ```docker run --rm -p 8080:8080 --name basics docker-example:basics```
5. Open browser and visit [http://localhost:8080](http://localhost:8080)

## 🚀 Pull & Run
1. ```docker run --rm -p 8080:8080 --name basics mwas0122/docker-example:basics```
2. Open browser and visit [http://localhost:8080](http://localhost:8080) \
DockerHub: [mwas0122/docker-example:basics](https://hub.docker.com/layers/mwas0122/docker-example/basics/images/sha256-71767b34a8259e5ee5eba40a18289858bbc333a510f5a4a7d29f83a2df4caa38)

## 📚 Lessons Learned
> The **CMD** instruction requires all executable arguments to be enclosed in **double quotes, not single ones**

> **Alpine images do not have apt (or apt-get)** package manager available. To update all packages **use apk update && apk upgrade instead**
