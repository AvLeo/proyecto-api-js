/**
 * 
 * @param {*} num id del producto tipo String
 * @returns devuelve un objeto si se le pasa id, si no un array de objetos
 */

export const getProduct =async (num) => {
    if(num !== "all"){
        const responseFetch = await fetch(`https://dummyjson.com/products/${num}`)
        const responseJson = await responseFetch.json();
        const data = responseJson
        console.log("estoy en getProducto.mjs", data)
        return data
    }else{
        const responseFetch = await fetch(`https://dummyjson.com/products`)
        const responseJson = await responseFetch.json();
        return responseJson.products
    }
}


