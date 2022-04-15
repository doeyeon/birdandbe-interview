var url = "https://web-ge8buw2ff-bird-and-be.vercel.app/api/interview";

function getProduct(url){
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", url, false);
    xmlHttp.send(null);
    return xmlHttp.responseText;
}
export const Product = JSON.parse(getProduct(url))

//console.log(Product["products"]);
//console.log(getProduct(url))
//const myArr = Object.entries(Product.products);
//console.log(myArr)
//const something = JSON.parse(JSON.stringify(Product.products))

for (let i = 0; i < Product.products.length; i++){
    console.log(Product.products[i])
}