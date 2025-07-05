# 📘 docker-example:multi-stage
A Spring Boot web app containerized with Docker for hands-on experience with basic concepts of the multi-stage building images. It helps to understand how to create lighter containers that do not include source code files and unnecessary tools.

## 📁 Files Overview
[pom.xml](./pom.xml) - Maven's project config for Spring Boot web app. \
[Main.java](./src/main/java/pl/mwasyluk/docker/Main.java) - entrypoint for Spring Boot and web server; returns a string response at the '/' endpoint. \
[Dockerfile](./Dockerfile) - declares two stages: the first compiles the source code and builds a JAR file; the second runs the server using the image with the JRE, stripped of other JDK tools and the source code. Starts the server when the container runs.\
[.dockerignore](./.dockerignore) - lists paths unwanted in the build context (time and memory leaks).


## 🔨 Build & Run
1. ```git clone https://github.com/mWasyluk/docker-example```
2. ```cd multi-stage```
3. ```docker build -t docker-example:multi-stage```
4. ```docker run --rm -p 8080:8080 --name multi-stage docker-example:multi-stage```

## 🚀 Pull & Run
```docker run --rm -p 8080:8080 --name multi-stage mwas0122/docker-example:multi-stage```\
DockerHub: [mwas0122/docker-example:multi-stage](https://hub.docker.com/layers/mwas0122/docker-example/multi-stage/images/sha256-c9f961e1d241b8a89da562a805b3f8b2e9b5a39ac28c4baba6c3cd8d38d4f62d)

## 📚 Lessons Learned
> Prefixing the **mvn package** command with **JAVA_HOME=\<path-to-java\>** is the easiest way **to use an alternative Java path** for a single compilation 

> Multi-stage build allows you to **drastically reduce the size** of the result container **by excluding the source files** and enables you to use the final image with **JRE only instead of the entire JDK**
