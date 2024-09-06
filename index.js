const section = document.querySelector('.card'); //seleciona a div com a classe card
const input = document.querySelector('.input-text'); //seleciona o input
const button = document.querySelector('.button-search'); //seleciona o botão

function search() {
  // toLowerCase() - transforma a string em letras minúsculas
  const searchvalue = input.value.toLowerCase();

  //funçao find() retorna o primeiro elemento que satisfaça a condição
  const result = pokeDb.find((pokemon)  => pokemon.name.toLocaleLowerCase() === searchvalue)
  
  if(searchvalue == '') {
    return alert('Digite o nome de um pokemon');
  }

  //se o resultado for verdadeiro, ele exibe o html, se não, exibe a mensagem de pokemon não encontrado
  if(result) {
    const html = `
        <div class="card-section">
          <img src=${result.image} alt=${result.name} class="card-image">
          <div class="card-title-wrapper">
            <a href=${result.link} target="_blank" class="link-title">
              <h2 class="card-title">${result.name}</h2>
            </a>
            <p class="type-text"><span class="type"> Tipo: </span> ${result.type} </p>
            <p class="type-text"><span class="type"> Habilidade: </span> ${result.ability} </p>
            <p class="type-text"><span class="type"> Habilidade Escondida: </span> ${result.hiddenAbility} </p>
          </div>
        </div>`;
    section.innerHTML = html;
  } else {
    section.innerHTML = `
        <div class="card-section">
          <img src="./assets/missing-pokemon.png" alt="Missing Pokemon" class="card-image">
          <div class="card-title-wrapper">
            <a href="#" class="link-title">
              <h2 class="card-title">Pokemon não encontrado</h2>
            </a>
            <p class="type-text"><span class="type"> Tipo: </span> Não Existe </p>
            <p class="type-text"><span class="type"> Habilidade: </span> Não Existe </p>
            <p class="type-text"><span class="type"> Habilidade Escondida: </span> Não Existe </p>
          </div>
        </div>`;
  }
  
}
