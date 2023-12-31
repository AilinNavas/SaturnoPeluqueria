const path = require ('path');
const fs = require('fs');

const productsFilePath = path.join(__dirname, '../database/products.json');
function getProducts() {
	return JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
}


const controller = {
     index: (req, res) => {
         res.render('index')
     },
     gallery: (req, res) => {
        res.render('gallery')
    },
    contact: (req, res) => {
        res.render('contactUs')
    },
     products:  (req, res) => {
        const products = getProducts();
        res.render('products', { products });
    },
    productDetail: (req, res) => {
		const id = req.params.id;
		const products = getProducts();
		const product = products.find(element => element.id == id);
		res.render('chat', { product });
	},
    information:(req, res) => {
        res.render('information')
    }
    
};

module.exports = controller;