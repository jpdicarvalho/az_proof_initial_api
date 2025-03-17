# Requisitos Técnicos e Diferencias implementados

### **Backend**
 - **Tecnologias:** API RESTfull com Node.js, JavaScript, Jest e Supertest.
 - **Descrição:**

     Para a complementação do backend, segui a risca o padrão de desenvolvimento já existente, portanto, para atender os requisitos e as regras de negócios do item 2, desenvolvi a solução contida no seguinte arquivo: **backend/src/app/controllers/DashboardController.js**. Dessa forma, a lógica e os métodos implementados, possibilitam a obtenção dos dados tanto pelos períodos de datas informados quanto pela página requisitada ou pelo número de linhas exibidas por página.

     Ademais, desenvolvi duas funções contidas em **backend/src/utils/utils.js** para a validação dos dados fornecidos pelo usuário. Além disso, para garantir a **qualidade, confiabilidade e integridade da solução proposta**, implementei **testes automatizados** utilizando **Jest e Supertest**. Por fim, esses testes validam o correto funcionamento da solução, logo, o código fonte dos testes pode se encontrado no mesmo diretório de DashboardController.js e utils.js, sendo eles: DashboardController.test.js; e utils.test.js.
   
### **Frontend**
- **Tecnologias Utilizadas:** React + Vite, JavaScript, CSS e Cypress.
- **Descrição:** Para desenvolver o frontend, **optou-se pela combinação de React e Vite**, tanto para atender aos requisitos do desafio quanto pela familiaridade com essas tecnologias, reconhecidas por sua alta performance e modularidade. Além disso, **conforme estabelecido, a aplicação  prever a utilização via Web (Desktop)**, seguindo práticas de **clean code**, respeitando rigorosamente as regras de negócio e **mantendo fidelidade ao protótipo disponibilizado no Figma**. Na implementação, **criou-se primeiramente a página de Login, responsável por validar as credenciais do usuário, fornecendo respostas adequadas para cada cenário (login bem-sucedido ou não, e dados incorretos)**. Em seguida, foi desenvolvida **a página de Dashboard, que utiliza o token obtido no processo de login para realizar requisições à API**. Logo, seja no primeiro acesso, **ao navegar pelas páginas por meio do componente de paginação ou ao aplicar filtros de busca por períodos, todos os dados são obtidos conforme especificado no problema**. Outrossim, a Dashboard só pode ser acessada por usuários autenticados, pois **a rota é protegida por um sistema de Private Route que exige o token**, garantindo maior segurança e controle de acesso. Já para a estilização, optei por usar o **CSS puro**, sem dependências externas. Ademais, para validação da interface e experiência do usuário, foram implementados **testes automatizados end-to-end (E2E) com Cypress** para a página de login, garantindo que a navegação e as interações funcionem corretamente. Portanto, o código fonte dos testes pode ser encontrado em **frontend/cypress/e2e/login.cy.js**.


### **Dokerização do projeto**
- **Tecnologias:** Docker e Docker Compose.
- **Descrição:** Para tornar a aplicação **portável e fácil de rodar em qualquer ambiente**, utilizei o **Docker** para containerizar os serviços. Isso permite que a aplicação seja executada sem necessidade de instalações manuais ou configurações específicas de cada máquina.

- **Orquestração com Docker Compose:**  
  Para evitar que cada serviço precise ser iniciado individualmente, implementei um **Docker Compose** que gerencia **backend e frontend** de forma automática. Assim, ao rodar um único comando, todos os containers sobem juntos e já conectados corretamente.
  

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

Depois, para usar a aplicação completa, basta fazer login no link abaixo usando as credenciais do usuário de teste:
  - Credenciais:
     - usuário: teste@azape.co
     - senha: 123456 
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
Isso deve abrir a tela do cypress com duas opções de testes, portanto, selecione E2E 'Testing'. Em seguida, selecione um navegador de sua preferencia e clique em 'Start E2E Testing in Chrome'. Por último, selecione o arquivo 'login.cy.js' e aguarde os testes serem execultados.
