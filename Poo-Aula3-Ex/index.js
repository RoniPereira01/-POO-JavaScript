const Author = require("./Author");
const Comment = require("./Comment");
const Post = require("./Post");


const Author = new Author("John Doe");

//esta atribuindo a estancia e pegando um metodo dessa estancia
const Post = Author.writePost("Titulo do Post", "Lorem ipsum dolor sic...");

//essa parte e voce trabalhando com os metodos da class diretamente e uma forma mais oculta 
//mas tem como trabalhar tambem atravez dos metodos colocando os parametros diretamente neles
Post.addComment("Roni ","Muito Bom");
Post.addComment("Lucas","Que lega!");







const Comment =  new Comment();