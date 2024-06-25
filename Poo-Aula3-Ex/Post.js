const Comment = require("./Comment");

class Post{
    constructor(title,body,author){
        this.title =title;
        this.body = body;
        this.author = author;
        //aqui esta criando um array vazio para fazer a lista
        this.comments= [];
        //aqui é um obejto nativo do javascript um objeto global
        this.createdAt = new Date()
    }

    //metodo para adicionar os comentarios
    addComment(username,content){
        //push é um método de arrays em JavaScript. 
        //Ele adiciona um ou mais elementos ao final de um array e retorna o novo comprimento do array.
        this.comments.push(new Comment(username,content));

    }
}

module.exports = Post;