
# Frontend - Projeto

Este repositório contém o frontend da aplicação, construído utilizando Tailwind 4 e Shadcn para estilização e componentes. A principal dificuldade encontrada durante o desenvolvimento foi entender a documentação do Tailwind 4, além das limitações do Shadcn, que ainda está em beta para o Tailwind 4.

# Tecnologias Usadas

Tailwind CSS (v4): Framework de estilização utilizado para construir a interface responsiva e personalizável.
Shadcn: Biblioteca de componentes que foi utilizada para construir o layout da página.
React: Biblioteca JavaScript para construção da interface de usuário interativa.
Vite: Ferramenta de build e bundler rápido, utilizada para o desenvolvimento do projeto.

# Dificuldades e Desafios

Durante o desenvolvimento do frontend, enfrentei alguns desafios técnicos e conceituais:

1. Documentação do Tailwind 4
   A principal dificuldade foi entender as mudanças introduzidas na documentação do Tailwind 4. A transição da versão 3 para a 4 trouxe muitas modificações, e a documentação nem sempre estava clara sobre como implementar certas funcionalidades. Algumas das mudanças mais significativas incluem a nova estrutura de configuração, que impactou o modo como personalizamos a estilização no projeto.
2. Shadcn em Beta para Tailwind 4
   Como o Shadcn ainda está em beta para o Tailwind 4, encontrei dificuldades para integrar novos componentes, especialmente porque não encontrei alguns arquivos que estavam presentes na versão 3 do Tailwind. Isso dificultou a adaptação dos componentes da biblioteca, especialmente na questão de consistência visual e de comportamentos esperados.

Alguns arquivos que estavam presentes na versão 3 do Tailwind e não estavam disponíveis na versão 4 incluem:

tailwind.config.js: Mudanças nas configurações padrões e a nova estrutura de configuração do Tailwind 4.
postcss.config.js: A integração com PostCSS também teve algumas mudanças e impactou a forma como os estilos foram aplicados ao longo do projeto.

3. Exploração do CSS Global do Tailwind 4
   O Tailwind 4 agora possui um CSS global que pode ser utilizado para estilizar a aplicação de maneira centralizada. Eu tentei aplicar uma estilização padrão e global utilizando essa funcionalidade, mas não consegui explorar tanto quanto gostaria. A principal limitação foi a dificuldade em personalizar alguns aspectos globais da interface, como a tipografia e o espaçamento, sem interferir na personalização das classes utilitárias.
   Apesar disso, consegui usar o CSS global para a parte da estilização do layout, especialmente na página de "match", que ficou conforme o esperado. Isso incluiu a aplicação de cores, tipografia e bordas.
4. Parte de Match
   A parte da página de match foi implementada com sucesso e está exatamente como eu gostaria, utilizando o Shadcn para exibir os cards de lançadores e especialistas. O design ficou responsivo e a interface está bem alinhada com o esperado.

# Como Rodar Localmente

# 1. Clonando o Repositório

Clone o repositório para sua máquina local:

bash
Copiar
Editar
git clone <URL do repositório>
cd <diretório do projeto>

# 2. Instalando Dependências

Execute o comando abaixo para instalar todas as dependências necessárias:

bash
Copiar
Editar
npm install

# 3. Rodando o Frontend

Execute o projeto com o comando:

bash
Copiar
Editar
npm run dev
O frontend estará disponível em http://localhost:3000 (ou outra porta configurada).

# Considerações finais

Apesar dos desafios enfrentados, o projeto está no caminho certo, com a parte de match finalizada e funcionando como esperado. Ainda que não seja posts como solicitado no projeto, mas achei valido por ter uma aplicação similar ao que foi pedido. Embora o uso do Tailwind 4 e do Shadcn tenha trazido algumas dificuldades, a experiência foi valiosa, e a interface está bem alinhada com as expectativas. O que faria de diferente na próxima oportunidade seria componentizar ainda mais, e estilizar, além de realizar commit's a cada mudança o que acabei não fazendo, assim como os testes que  também faltaram.
