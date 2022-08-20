const {Book,Author} = require("../model/model");

const authorController = {
    // add author
    // getAuthor: async (req,res)=>{
        
    //     res.send(` <form action="/search" method="post">
    //     <label for="email">email<input type="text" name="email"></label>
    //     <label for="name">name<input type="text" name="name"></label>
    //     <button type="submit">submit</button>
    // </form>`);
    // },

    addAuthor: async (req,res)=>{
        res.status(200).json(req.body);
    }
}
module.exports = authorController;

