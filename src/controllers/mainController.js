const path = require ('path');


const controller = {
     index: (req, res) => {
         res.render(path.join(__dirname,'../views/index.ejs'))
     },
     gallery: (req, res) => {
        res.render(path.join(__dirname,'../views/gallery.ejs'))
    },
    contact: (req, res) => {
        res.render(path.join(__dirname,'../views/contactUs.ejs'))
    },
    // catalog: (req, res) => {
    //     res.render(path.join(__dirname,'../views/catalog.ejs'))
    // },
    

    
    
};

module.exports = controller;