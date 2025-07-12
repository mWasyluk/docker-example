# 📘 docker-example:custom-network
🎯 **Goal**: running **multiple containers within the same network**, enabling them to **communicate directly via aliases**. \
🔑 **Key learnigns**: creating custom Docker networks; isolating communication between containers; 

## 📁 Files Overview
[server/pom.xml](server/pom.xml) - basic configuration for a Spring Boot web server secured with Spring Security. \
[server/.../Main.java](server/src/main/java/pl/mwasyluk/docker/customnetwork/Main.java) - entrypoint for the Spring Boot application, providing REST endpoint handler and basic security configuration. \
[server/Dockerfile](server/Dockerfile) - Multi-stage Docker image build instruction that compiles the source code into a JAR file, then runs the Java Server in a container based on a JRE image. \
[web/default.conf](web/default.conf) - Nginx configuration file that declares proxy pass for all requests from `/api` to the Java server via the server container's alias. \
[web/index.html](web/index.html) - HTML file of the web page that communicates with the REST Server and displays its response. \
[docker-compose.yml](docker-compose.yml) - Docker Compose configuration that builds both the REST server and the web server, running them within the same, custom network. It also declares volumes for essential nginx files enabling modification of the web server behavior by editing files on the host.

## 🔨 Build & Run
1. `git clone https://github.com/mWasyluk/docker-example`
2. `cd custom-network`
3. `docker-compose up`

## 📚 Lessons Learned
* Build arguments in a Dockerfile are effective only when explicitly declared in the `ARG` instruction (setting `${ARG_NAME}` solely is not sufficient).
* To override the JAR file name in a Maven project, add the `<finalName>` tag with the desired name inside the `<build>` block.
