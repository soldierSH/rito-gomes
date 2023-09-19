# Use a imagem oficial do Maven como base
FROM maven:3.8.5-openjdk-17 AS build

# Diretório de trabalho no contêiner
WORKDIR /app

# Copie o arquivo pom.xml e faça o download das dependências antes de copiar o código-fonte
COPY . .
RUN mvn clean package
FROM openjdk:17.0.1-jdk
# Copie o arquivo JAR compilado do estágio anterior para a imagem final
COPY --from=build /app/target/ChampionsApplication.jar /app/ChampionsApplication.jar

EXPOSE 8080

# Comando para iniciar o aplicativo Spring Boot quando o contêiner for iniciado
CMD ["java", "-jar", "/app/ChampionsApplication.jar"]