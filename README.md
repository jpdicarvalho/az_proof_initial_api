## Como Rodar o Projeto Localmente?

Antes de começar, verifique se sua máquina possui os seguintes pré-requisitos instalados:  

 - **[Docker](https://www.docker.com/get-started/)**  
 - **[Docker Compose](https://docs.docker.com/compose/install/)**   

Com a etapa anterior concluída, siga os seguintes passos: 

**1️. Clonar o Repositório**

Abra um terminal e execute:  
  ```sh
  git clone https://github.com/jpdicarvalho/az_suite_challenge_solved.git
  ````
Em seguida, acesse o diretório que contém o projeto  
  ````sh
  cd az_suite_challenge_solved
  ````
Agora, dentro da pasta do projeto, execute:
  ````sh
  docker-compose up --build
  ````
Isso irá basicamente:
  1. Iniciar o backend (API RESTfull)
  2. Iniciar o frontend (React + Vite com JavaScript)

Depois, para acessar a aplicação, use:
  ````sh
   http://localhost:5173
  ````
## Comandos úteis parar gerenciar os containers:
Parar os containers:
  ````sh
   docker-compose down
  ````
Remover containers, imagens e volumes:
  ````sh
   docker-compose down --rmi all -v
  ````
Reconstruir e subir os containers
  ````sh
  docker-compose up --build
  ````
## Como rodar os testes?
**1. Backend**
 
Fora do container, acesse o seguinte diretório:
  ````sh
  cd backend
  ````
Instale as dependências
  ````sh
  npm install
  ````
No arquivo .env, troque o banco de dados para:
  ````sh
  DATABASE_URL="mysql://root:qafFdOrkKUYwofilfHSkIUcIIHElmFqI@nozomi.proxy.rlwy.net:22845/railway"
  ````
Agora, ainda no diretório backend, execulte:
  ````sh
  npm run test
  ````

**1. Frontend**

Fora do container, acesse o seguinte diretório:
  ````sh
  cd frontend
  ````
Instale as dependências e em seguida o cypress (caso não possua):
  ````sh
  npm install
  npm install cypress --save-dev
  ````
Execulte o frontend:
  ````sh
  npm run dev
  ````
Agora, em um terminal paralelo, execulte o seguinte comando **dentro do diretório frontend**
  ````sh
  npx cypress open
  ````
Isso deve abrir a tela do cypress com duas opções de testes, portanto, selecione E2E 'Testing'. Em seguida, selecione um navegador de sua preferencia e clique em 'Start E2E Testing in Chrome'. Por último, selecione o arquivo 'searchSupplie.cy.js' e aguarde os testes serem execultados.
