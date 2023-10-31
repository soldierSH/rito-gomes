# Use a imagem oficial do Maven como base
FROM maven:3.8.5-openjdk-17 AS builder

# Diretório de trabalho no contêiner
WORKDIR /app

# Copie o arquivo pom.xml e faça o download das dependências antes de copiar o código-fonte
COPY pom.xml .
RUN mvn dependency:go-offline

# Copie o código-fonte para o contêiner
COPY src ./src

# Compile o aplicativo Spring Boot
RUN mvn package -DskipTests

# Imagem final
FROM openjdk:17.0.1-jdk

# Copie o arquivo JAR compilado do estágio anterior para a imagem final
COPY --from=builder /app/target/champions-0.0.1-SNAPSHOT.jar.original /app/ChampionsApplication.jar

# Exponha a porta em que o aplicativo Spring Boot está sendo executado
EXPOSE 8080

# Comando para iniciar o aplicativo Spring Boot quando o contêiner for iniciado
CMD ["java", "-jar", "champions/src/ChampionsApplication.jar"]
