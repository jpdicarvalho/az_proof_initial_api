describe('Login Page', () => {
    beforeEach(() => {
        cy.visit('http://localhost:5173'); // Ajuste conforme o endereço da aplicação
    });

    it('Verifica se os elementos principais estão presentes', () => {
        cy.get('input[type="email"]').should('be.visible');
        cy.get('input[type="password"]').should('be.visible');
        cy.get('button.button-submit').should('be.visible').and('contain', 'Entrar');
    });

    it('Valida erro ao inserir e-mail inválido', () => {
        cy.get('input[type="email"]').type('usuario@errado');
        cy.contains('E-mail inválido').should('be.visible');
    });

    it('Valida erro ao inserir senha inválida (menos de 6 dígitos)', () => {
        cy.get('input[type="password"]').type('123');
        cy.contains('A senha deve ter exatamente 6 números').should('be.visible');
    });

    it('Permite inserir e-mail e senha corretamente', () => {
        cy.get('input[type="email"]').type('usuario@teste.com');
        cy.get('input[type="password"]').type('123456');
        cy.get('.error').should('not.exist'); // Não deve ter erro visível
    });

    it('Exibe erro quando os campos não são preenchidos', () => {
        cy.get('button.button-submit').click();
        cy.contains('Por favor, corrija os erros e tente novamente.').should('be.visible');
    });

    it('Simula um login bem-sucedido', () => {
        cy.intercept('POST', 'http://localhost:3333/proof/session', {
            statusCode: 200,
            body: {
                token: 'fake-token',
                profile: { name: 'Usuário Teste' }
            }
        }).as('loginRequest');

        cy.get('input[type="email"]').type('usuario@teste.com');
        cy.get('input[type="password"]').type('123456');
        cy.get('button.button-submit').click();

        cy.wait('@loginRequest');
        cy.contains('Seja bem-vindo Usuário Teste').should('be.visible');
    });

    it('Simula erro ao tentar logar com credenciais inválidas', () => {
        cy.intercept('POST', 'http://localhost:3333/proof/session', {
            statusCode: 401,
            body: { error: 'Usuário não encontrado' }
        }).as('loginFail');

        cy.get('input[type="email"]').type('invalido@teste.com');
        cy.get('input[type="password"]').type('999999');
        cy.get('button.button-submit').click();

        cy.wait('@loginFail');
        cy.contains('Usuário não encontrado. E-mail ou senha incorretos.').should('be.visible');
    });

    it('Verifica se a navegação ocorre após login', () => {
        cy.intercept('POST', 'http://localhost:3333/proof/session', {
            statusCode: 200,
            body: {
                token: 'fake-token',
                profile: { name: 'Usuário Teste' }
            }
        });

        cy.get('input[type="email"]').type('usuario@teste.com');
        cy.get('input[type="password"]').type('123456');
        cy.get('button.button-submit').click();

        cy.url().should('include', '/Dashboard'); // Verifica se redireciona para a Dashboard
    });
});