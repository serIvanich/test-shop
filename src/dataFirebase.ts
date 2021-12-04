import {getDatabase, onValue, ref, set} from "firebase/database";
import ProductImage from './assecs/image/parfum.jpg'

let products = [
]
const prod1 =  {
    id: 1,
    name: 'pen',
    price: 4.50,
    photo: ProductImage,
    info: 'it is a good pen',
    category: 'stationery',
}
const prod2 =  {
    id: 2,
    name: 'lamp',
    price: 220,
    photo: 'url: lamp',
    info: 'it is a lightest lamp',
    category: 'light',
}
const prod3 =  {
    id: 3,
    name: 'keyboard',
    price: 970,
    photo: 'url: keyboard',
    info: 'very reliable keyboard',
    category: 'compute',
}
const prod4 =  {
    id: 4,
    name: 'handle-phone',
    price: 770,
    photo: 'url: handle-phone',
    info: 'white handle-phone',
    category: 'compute',
}
const prod5 =  {
    id: 5,
    name: 'milk',
    price: 31,
    photo: 'url: milk',
    info: 'it is a good milk',
    category: 'foods',
}
const prod6 =  {
    id: 6,
    name: 'sugar',
    price: 35,
    photo: 'url: sugar',
    info: 'it is a sweetest sugar',
    category: 'foods',
}
const prod7 =  {
    id: 7,
    name: 'bread',
    price: 15.50,
    photo: 'url: bread',
    info: 'it is a good fresh bread',
    category: 'foods',
}
products.push(prod1,prod2,prod3,prod4,prod5,prod6,prod7)
const  productsAssociativeArray = products.map(i => ({[i.id]: i}))
console.log(productsAssociativeArray)

function writeProdData(data: any) {
    const db = getDatabase();
    set(ref(db, `products/`), {

        ...data
    });

}
writeProdData(products)

export const getDataFareBase = (dispatch: any, getDataProducts: any) => {
    debugger



    }
