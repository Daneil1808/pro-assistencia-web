# Use a imagem do Node.js como base
FROM node:14

# Defina o diretório de trabalho dentro do contêiner
WORKDIR /pro-assistencia/src/app

# Copie os arquivos de configuração
COPY package*.json ./

# Instale as dependências do projeto
RUN npm install

# Copie o código-fonte do aplicativo
COPY . .

# Compile o projeto
RUN ng build --prod

# Expõe a porta em que o aplicativo Angular será executado (opcional)
EXPOSE 4200

# Inicialize o aplicativo Angular
CMD ["ng", "serve", "--host", "0.0.0.0"]
