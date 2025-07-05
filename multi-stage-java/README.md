# Build & Run
* docker build -t multi-stage-java .
* docker run -d -p 8080:8080 --name multi-stage-java --rm multi-stage-java

# What I have learned
* Prefixing the **mvn package** command with **JAVA_HOME=\<path-to-java\>** is the easiest way **to use an alternative Java path** for a single compilation
* Multi-stage build allows you to **drastically reduce the size** of the result container **by excluding the source files** and enables you to use the final image with **JRE only instead of the entire JDK**
