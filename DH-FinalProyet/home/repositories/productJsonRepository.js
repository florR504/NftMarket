const fs = require("fs");
const path = require("path");

const productsFilePath = path.join(__dirname, "../data/products.json");
const products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));

const productjsonRepository = {
    save: (newProduct) => {
        products.push(newProduct);
        const productsJson = JSON.stringify(products, null, 4);
        fs.writeFileSync(productsFilePath, productsJson);
        return newProduct;
    },
    change:(products) => {
        let productsJson = JSON.stringify(products, null, 4)
        fs.writeFileSync(productsFilePath, productsJson)
        return productsJson;
    },
    delete: (newProducts) => {
        const productsJson = JSON.stringify(newProducts, null, 4)
        fs.writeFileSync(productsFilePath, productsJson);
        return productsJson;

    }

}

module.exports = productjsonRepository;