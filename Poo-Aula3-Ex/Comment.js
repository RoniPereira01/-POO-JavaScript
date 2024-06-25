class Comment{
    constructor(username,content) {
        this.username=username;
        this.content = content;

        //aqui é um obejto nativo do javascript
        this.createdAt = new Date()
    }
}

module.exports = Comment;