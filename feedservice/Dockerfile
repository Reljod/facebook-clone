FROM maven:3-eclipse-temurin-17-alpine
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY pom.xml /usr/src/app
COPY src /usr/src/app/src
RUN mvn clean package
COPY target/feedservice-*.jar app.jar
EXPOSE 8080
ENTRYPOINT ["java","-jar","app.jar"]
