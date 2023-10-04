# Desenvolvimento e Entrega do Checkpoint 5 - Front-End Design :rooster:
![Badge Concluido](https://img.shields.io/badge/STATUS-CONCLUIDO-GREEN)

**Nomes + RM dos integrantes:**
- Guilherme Akio - 98582
- Matheus Motta - 550352
- Guilherme Morais - 551981
- Fabrício Saavedra - 97631	
- Vinicius Buzato - 99125

**Turma:** 1ESPW

**Ano:** 2023
___
## Descrição do Projeto
O projeto é voltado para a aplicação prática dos conceitos aprendidos em sala de aula, na matéria de Front-End Design. O conteúdo aqui praticado é a utilização da biblioteca React-Bootstrap, junto com a ferramenta Vite, bem como de seus módulos e componentes, para a construção de elementos HTML/CSS/JavaScript prática e rápida.

Neste repostiório, disponibilizamos a adaptação do código para uma loja virtual que nos foi fornecida pelo professor, com o objetivo de acrescentar as ferramentas aprendidas em sala de aula:
- Criação de rotas entre páginas
- Utilização de imagens e do componente "carrossel"
- Construção de um contador que aumenta quantidades na página através de uma simulaçã de carrinho de loja
- Formulário de login com validação de usuário e senha
___
## Desenvolvimento do Projeto
O projeto foi desenvolvido utilizando como base um arquivo disponibilizado pelo professor, que continha a primeira página da loja virtual e seu _header_. Para a construção e estilização das demais páginas, utilizamos a biblioteca React-Bootstrap e o pacote extra  o _Router-DOM_.

Através do _header_ podemos veirificar todas as páginas presentes no site, acessáveis a partir de seus respectivos botões:
  - Galo Shop
  - Casual
  - Masculino
  - Feminino
  - Outlet
  - Carrinho
  - Login
    
Os botões funcionam a partir de rotas criadas com o RouterProvider.

As páginas Casual, Masculino, Feminino e Outlet contam com um carrosseel composto por 3 imagens, e imagens extras de produtos corespondentes a sua categoria. A página do carrinho apresenta um placeholder simulando a função de alterar a quantidade de itens no carriho através de um contador, já a página de Login apresenta um formulário para inserir o email de usuário e senha de uma conta cadastrada, que serão validados e, caso sejam posaitivamente autenticadaos, direcionarão o usuário para a página inicial.

Por fim, há também no projeto um componenete de "erro - página não encontrada" caso o usuário tente navegar para uma página que não se encontra presente dentre as opções citadas, ou caso haja algum erro com a programação do site. A esatilização do site foi feita utilizando módulos CSS.
___
## Como executar o projeto
Para executar o projeto, é necessário copiar o repositório em uma máquina local (através de um _IDE_, por exemplo), e ter instalado o ambiente de desenvolvimento [Node](https://nodejs.org/en).

Uma vez que os arquivos estão presentes na máquina, é necessário utilizar o comando "npm install" através de um terminal de comando na pasta principal, para que a biblioteca styled-components também seja adicionada aos arquivos*

Por fim, é necessário somente utilizar o comando "npm run dev" para que a página inicial seja exibida.

*atenção para mudar o diretório utilizado para a pasta principal dos arquivos
