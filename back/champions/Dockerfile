# Estágio 1: Construa a aplicação
FROM maven:3.8.4-openjdk-11 AS builder

# Defina o diretório de trabalho no contêiner
WORKDIR /app

# Copie o arquivo pom.xml para o contêiner
COPY pom.xml .

# Baixe as dependências do Maven
RUN mvn dependency:go-offline

# Copie os arquivos de origem para o contêiner
COPY src src

# Compile o projeto
RUN mvn package -DskipTests

# Estágio 2: Crie a imagem final
FROM openjdk:11-jre-slim

# Defina o diretório de trabalho no contêiner
WORKDIR /app

# Copie o arquivo JAR compilado do estágio anterior para o contêiner
COPY --from=builder /app/target/champions-0.0.1-SNAPSHOT.jar.original ChampionsApplication.jar

# Adicione um comando de depuração para listar o conteúdo do diretório /app
RUN ls -la

# Comando para executar a aplicação
CMD ["java", "-jar", "ChampionsApplication.jar"]
