import React from 'react';

const Html = () => {
  return (
    <React.Fragment>
      <header>
      <h1>Navegação</h1>
      {/* A tag <nav> é utilizada para gerar uma área de navegação */}
        <nav>
          <ul>
            <li>
              <a href="www.google.com">Início</a>
            </li>
            <li>
              <a href="#">Sobre nós</a>
            </li>
            <li>
              <a href="#">Contato</a>
            </li>
          </ul>
        </nav>
      </header>
      {/* <Main> Não deve haver mais de um elemento main em um documento e o
          mesmo não pode ser dependente de um elemento <article>, <aside>, 
          <footer>, <header>, e <nav>.
      */}
      <main> 
        <section>
          <h2>Produtos</h2>
          <ul>
            <li>Produto 1</li>
            <li>Produto 2</li>
            <li>Produto 3</li>
          </ul>
        </section>
        {/* <aside> Representa uma seção de uma página que consiste em conteúdo 
            indiretamente relacionado ao conteúdo principal. Ele pode estar
            localizado em qualquer lugar do site, o rótulo não define a 
            posição na página.  
        */}
        <aside>
          <h3>Artigos relacionados</h3>
          <ul>
            <li>
              <a href="#">Artigo 1</a>
            </li>
            <li>
              <a href="#">Artigo 2</a>
            </li>
            <li>
              <a href="#">Artigo 3</a>
            </li>
          </ul>
        </aside>
      </main>
      {/* 
        Costumamos nos referir ao footer quando falamos do rodapé de uma página
        web, ou seja, a última seção que encontramos, comumente diferenciada do
        resto da página por outras cores ou por uma divisão horizontal.

        Assim como o <header>, podemos definir um <footer> dentro de outras tags
      */}
      <footer>
        <address>
          <p>Endereço: Rua 123, Cidade, Estado</p>
          <p>Telefone: (00) 0000-0000</p>
          <p>E-mail: contato@empresa.com</p>
        </address>
      </footer>
    </React.Fragment>
  );
};

export default Html;
