# Use a imagem oficial do Maven como base
FROM maven:3.8.5-openjdk-17

# Diretório de trabalho no contêiner
WORKDIR /app

# Copie o arquivo pom.xml e faça o download das dependências antes de copiar o código-fonte
COPY . .
RUN mvn clean package
FROM openjdk:17.0.1-jdk
EXPOSE 8080

# Comando para iniciar o aplicativo Spring Boot quando o contêiner for iniciado
CMD ["java", "-jar", "target/ChampionsApplication.jar"]
ENTRYPOINT [ "java", "-jar", "ChampionsApplication.jar" ]