// // Creamos un funcion que devuelva una promesa.

// function isNumber(num){
//     return new Promise((resolve, reject) => {
//         if(typeof(num) === "number"){
//             resolve('Si es un numero y esto lo recibo por .then')
//         }else{
//             reject('Esto no es un numero, esto lo recibo por .catch')
//         }
//     })
// }

// isNumber("2")
//     .then(resolve => console.log(resolve))
//     .catch(reject => console.log(reject))

// fetch('https://dummyjson.com/products/1')
//     .then(res => res.json())
//     .then(data => console.log(data))
//     .catch(error => console.log(error))

import { getProduct } from "./getProducts.mjs"

const select = selector => document.querySelector(selector)


const productos =await  getProduct('all')

console.log(productos)



const divConetenedor = select('.contenedor-productos')
const selector = select('#selector')

productos.map( prod =>{
    selector.innerHTML += `
    <option value="${prod.id}">${prod.id}</option>`
})

productos.map( producto => {
    divConetenedor.innerHTML += `
<article>
    <img src=${producto.images[1]} alt="">
    <h3>${producto.title}</h3>
    <p>${producto.description}</p>
    <small>${producto.id}</small>
    <small>${producto.stock}</small>
</article>
`
})



selector.addEventListener('change', async () =>{
  let  producto = await getProduct(selector.value)
   console.log(producto)
   divConetenedor.innerHTML = `
<article>
   <img src=${producto.images[1]} alt="">
   <h3>${producto.title}</h3>
   <p>${producto.description}</p>
   <small>${producto.id}</small>
   <small>${producto.stock}</small>
</article>
   `
})

select('#buscador').addEventListener('blur',async () => {

    const prod = await getProduct('all')
    const productosFiltrados = prod.filter( producto => producto.title.toLowerCase().includes(select('#buscador').value.toLowerCase()))
    divConetenedor.innerHTML = ""

    productosFiltrados.map( prodFilter => {
        console.log(prodFilter);
        divConetenedor.innerHTML += `
    <article>
    
        <img src=${prodFilter.images[1]} alt="">
        <h3>${prodFilter.title}</h3>
        <p>${prodFilter.description}</p>
        <small>${prodFilter.id}</small>
        <small>${prodFilter.stock}</small>
    </article>
    `
    })
})