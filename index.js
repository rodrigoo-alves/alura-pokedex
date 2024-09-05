const section = document.querySelector('.card');
const input = document.querySelector('.input-text');
const button = document.querySelector('.button-search');

function search() {
  // toLowerCase() - transforma a string em letras minúsculas
  const searchvalue = input.value.toLowerCase();

  //funçao find() retorna o primeiro elemento que satisfaça a condição
  const result = pokeDb.find((pokemon)  => pokemon.name.toLocaleLowerCase() === searchvalue)

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
    section.innerHTML = 'Pokemon não encontrado'
  }
  
}


// for(let data of pokeDb) {
  //   section.innerHTML += `
  //       <div class="card-section">
  //         <img src=${data.image} alt="Bulbasaur" class="card-image">
  //         <div class="card-title-wrapper">
  //           <a href=${data.link} target="_blank" class="link-title">
  //             <h2 class="card-title">${data.name}</h2>
  //           </a>
  //           <p class="type-text"><span class="type"> Tipo: </span> ${data.type} </p>
  //         </div>
  //       </div>`;
  // }
  
