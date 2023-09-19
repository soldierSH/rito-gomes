# Use uma imagem base com JDK 17
FROM adoptopenjdk/openjdk17:latest

# Defina o diretório de trabalho como /app
WORKDIR /app

# Copie o arquivo pom.xml para o diretório atual do contêiner
COPY pom.xml .

# Copie todo o código-fonte para o diretório atual do contêiner
COPY src ./src

# Execute o comando Maven para compilar e empacotar o aplicativo
RUN mvn clean package

# Comando para iniciar o aplicativo Spring Boot quando o contêiner for iniciado
CMD ["java", "-jar", "target/ChampionsApplication.jar"]
