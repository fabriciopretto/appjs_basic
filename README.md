# API JS Básica

Este pequeno trecho de código apresenta uma forma rápida e simples para instalar os pacotes necessários para executar uma API escrita na linguagem JavaScript, utilizando o ambiente de execução Node.js para executar o código.

Dois métodos/rotas estão disponíveis:
- / - endpoint raiz que retorna a expressão 'Olá mundo!'
- /status - endpoint que retorna a expressão 'Status de vida!!!'

Após startar o projeto, teste-o abrindo um navegador de sua preferência e digite:
- http://localhost:3000/
- http://localhost:3000/status

Caso a aplicação esteja executando em outro computador, substitua 'localhost' pelo IP ou Domínio daquele host.

## Instalação das dependências
Atenção: Os comandos serão executados em um ambiente Linux, com base na distribuição Ubuntu (pacotes Debian).

### instalar o NodeJS
sudo apt install nodejs
sudo apt install npm

### iniciar projeto
npm init -y

### instalar express (framework para criação de APIs JS)
npm install express

### criar arquivo do projeto pelo editor de textos VIM (poderia ser qualquer outro editor)
vim app.js

### executar
node app.js
