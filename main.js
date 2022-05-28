const bodyElement = document.querySelector('body')

function darkMode() {

    bodyElement.classList.toggle('dark')

    console.log('a cor foi trocada')
}

// Criando post para inserção
let novoPost = {
    foto: 'https://www.petz.com.br/blog/wp-content/uploads/2017/04/comportamento-dos-gatos-1.jpg',
    titulo: 'Gato',
    texto: 'O gato (Felis silvestris catus), também conhecido como gato caseiro, gato urbano ou gato doméstico, é um mamífero carnívoro da família dos felídeos'
}

//Criando array de posts para inserção
let posts = [
    {
        foto: 'https://s3.static.brasilescola.uol.com.br/be/2022/01/tigre.jpg',
        titulo:'O tigre',
        texto:'O tigre (Panthera tigris) é uma das espécies da subfamília Pantherinae (família Felidae) pertencente ao gênero Panthera. É encontrado de forma nativa apenas no continente asiático; é um predador carnívoro e é a maior espécie de felino do mundo junto com o leão.'
    },
    {
        foto: 'https://vejasp.abril.com.br/wp-content/uploads/2021/12/20211202-Tigre-de-bengala9-foto-Paulo-Gil-2.jpg-1.jpg',
        titulo: 'O tigre versão Shine',
        texto:'O tigre (Panthera tigris) é uma das espécies da subfamília Pantherinae (família Felidae) pertencente ao gênero Panthera. É encontrado de forma nativa apenas no continente asiático; é um predador carnívoro e é a maior espécie de felino do mundo junto com o leão.'
    }
]
// Inserindo novo post 
let containerElement = document.querySelector('.container')
containerElement.innerHTML += `
<div class="item">
      <img src="${novoPost.foto}">
      <h2>${novoPost.titulo}</h2>
      <p>
        ${novoPost.texto}
      </p>
</div>
`
//Inserindo vários posts
console.log(posts)
let containerElement1 = document.querySelector('.container')
for(let post of posts){
    containerElement.innerHTML += `
        <div class="item">
            <img src="${post.foto}">
            <h2>${post.titulo}</h2>
            <p>
                ${post.texto}
            </p>
        </div>`

}


