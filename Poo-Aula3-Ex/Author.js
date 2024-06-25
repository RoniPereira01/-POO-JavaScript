const Post = require("./Post");

class Author{
    constructor(name){
        this.name = name;
        //criou um array vazio 
        this.posts = [];
    }

    writePost(title,body){
        //aqui esta fazendo a associaçao da class Post como se tivesse
        // criando um metodo dentro desse metodo
        const post = new Post(title,body, this);

         //push é um método de arrays em JavaScript. 
        //Ele adiciona um ou mais elementos ao final de um array e retorna o novo comprimento do array.
        this.posts.push(post);

        //esta retornando opost
        return post;
    }
}

module.exports = Author;