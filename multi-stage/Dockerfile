FROM maven:3.8.5-openjdk-17-slim AS source
WORKDIR /app-source

COPY ./src ./src
COPY ./pom.xml ./
RUN mvn clean package

#the final image with openjdk = ~290MB 
#FROM openjdk:11-ea-17-jre-slim
#the final image with eclipse-temurin = ~200MB
FROM eclipse-temurin:17-jre-alpine

WORKDIR /app

COPY --from=source /app-source/target/multi-stage-1.0.0.jar ./

EXPOSE 8080

CMD ["java", "-jar", "multi-stage-1.0.0.jar"]
