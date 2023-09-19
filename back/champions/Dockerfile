# Use a imagem base do Ubuntu 20.04 LTS
FROM ubuntu:20.04


#################MAVEN
# Define a versão do Maven que você deseja usar
ARG MAVEN_VERSION=3.6.3

# Defina a URL do Apache Maven para download
ENV MAVEN_URL=https://apache.osuosl.org/maven/maven-3/${MAVEN_VERSION}/binaries/apache-maven-${MAVEN_VERSION}-bin.tar.gz

# Faça o download e instale o Maven
RUN curl -fsSL -o /tmp/apache-maven.tar.gz $MAVEN_URL \
    && tar -xzf /tmp/apache-maven.tar.gz -C /usr/share \
    && mv /usr/share/apache-maven-${MAVEN_VERSION} /usr/share/maven \
    && ln -s /usr/share/maven/bin/mvn /usr/bin/mvn
######################

# Atualize a lista de pacotes e instale o software-properties-common
RUN apt-get update && apt-get install -y software-properties-common

# Adicione o repositório do OpenJDK
RUN add-apt-repository ppa:openjdk-r/ppa

# Atualize novamente a lista de pacotes
RUN apt-get update

# Instale o JDK 17
RUN apt-get install -y openjdk-17-jdk

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