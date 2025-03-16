# Imagem oficial do Node.js otimizada para produção
FROM node:20-alpine

# Define o diretório de trabalho
WORKDIR /app

# Copia os arquivos necessários para instalar as dependências
COPY package*.json ./

# Instala as dependências
RUN npm install

# Copia o restante do código para o container
COPY . .

# Expondo a porta do Frontend
EXPOSE 5173

# Comando para rodar o Frontend
CMD ["npm", "run", "dev"]
