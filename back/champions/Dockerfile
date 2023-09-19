# Use a imagem base do Ubuntu 20.04 LTS
FROM ubuntu:20.04


#################

# Atualize a lista de pacotes e instale o software-properties-common
RUN apt-get update && apt-get install -y software-properties-common

# Adicione o repositório do OpenJDK
RUN add-apt-repository ppa:openjdk-r/ppa

# Atualize novamente a lista de pacotes
RUN apt-get update

# Instale o JDK 17
RUN apt-get install -y openjdk-17-jdk maven
RUN mvn -v

# Defina as variáveis de ambiente JAVA_HOME e PATH
ENV JAVA_HOME=/usr/lib/jvm/java-17-openjdk-amd64
ENV PATH=$PATH:$JAVA_HOME/bin


##Projeto
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