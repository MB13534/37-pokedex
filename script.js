const container = document.getElementById('pokedex-container')
const pokemon_count = 151;
const URL = 'https://pokeapi.co/api/v2/pokemon/'

const fetchPokemon = async () => {
    for(let i = 1; i < pokemon_count + 1; i ++){
        pokemon = await getPokemon(i)
    }   
}

const getPokemon = async (i) => {
    const response = await axios.get(URL + i)
    const { data: pokemon } = response
    buildCard(pokemon);
}

const buildCard = (pokemon) => {
    const card = document.createElement('div')
    card.classList.add('card');
    card.style.backgroundColor = `var(--${pokemon.types[0].type.name})`
    card.innerHTML = `
    <div class="circle"></div>
        <div class="avatar">
          <div class="content">
            <img
              src="${pokemon.sprites.other["official-artwork"].front_default}"
              alt="Pokemon"
            />
            <div class="number">#${zeroPad(pokemon.id)}</div>
            <div class="name">${pokemon.name}</div>
            <div class="type">Type: <span>${pokemon.types[0].type.name}</span></div>
          </div>
        </div>
    `
    container.appendChild(card)
}

function zeroPad(id) {
    return id.toString().padStart(3, "0")
}



fetchPokemon();