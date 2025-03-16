# Usando uma imagem oficial do Node.js
FROM node:18

# Define o diretório de trabalho
WORKDIR /app

# Copia os arquivos de dependências
COPY package*.json ./

# Instala as dependências
RUN npm install

# Copia o restante do código para o container
COPY . .

# Expondo a porta da API
EXPOSE 3333

# Comando para rodar a API
CMD ["npm", "run", "dev"]
