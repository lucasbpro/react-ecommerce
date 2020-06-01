function isStringInText(string, text){
    return (text.toLowerCase().search(string.toLowerCase()) !== -1);
}

function filterByText(productList, text) {
    return productList.filter(product => isStringInText(text, product.name));
}
   
export {
    filterByText
};
  












export default utils;