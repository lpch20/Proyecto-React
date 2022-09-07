import remeraRipcurl from './../remera ripcurl.jpg'
import remeraVans from './../remera vans.jpg'
import canguroLevis from './../canguro levis.jpg'
import canguroNike from './../canguro nike.jpg'
import canguroVans from './../canguro vans.jpg'
import championesAdidas from './../championes adidas.jpg'
import championesAllstar from './../championes all star.jpg'
import championesNike from './../championes nike.jpeg'
import remeraLevis from './../remera levis.jpg'

const stock = [
    {
        id: 1,
        nombre: 'Remera Ripcurl F',
        talles: [
            'XL', 'L', 'XXL', 'M'
        ],
        precio: 2500,
        stock: 10,
        imagen:  remeraRipcurl,
        category: 'remeras',    
    },
    
    {
        id: 2,
        nombre: 'Canguro Vans',
        talles: [
            'XL', 'L', 'XXL', 'M'
        ],
        precio: 4000,
        stock: 10,
        imagen: canguroVans,
        category:  'canguros',   
    },
    {
        id: 3,
        nombre: 'Nike Air',
        talles: [
            'XL', 'L', 'XXL', 'M'
        ],
        precio: 6000,
        stock: 10,
        imagen: championesNike,
        category: 'championes',    
    },
    {
        id: 4,
        nombre: 'Adidas light',
        talles: [
            'XL', 'L', 'XXL', 'M'
        ],
        precio: 4500,
        stock: 10,
        imagen: championesAdidas,
        category: 'championes',    
    },
    {
        id: 5,
        nombre: 'All Star Classic',
        talles: [
            'XL', 'L', 'XXL', 'M'
        ],
        precio: 3000,
        stock: 10,
        imagen: championesAllstar,
        category: 'championes',    
    },
    {
        id: 6,
        nombre: 'Remera Vans',
        talles: [
            'XL', 'L', 'XXL', 'M'
        ],
        precio: 1500,
        stock: 10,
        imagen: remeraVans,
        category: 'remeras',    
    },
    {
        id: 7,
        nombre: 'Canguro Nike',
        talles: [
            'XL', 'L', 'XXL', 'M'
        ],
        precio: 2500,
        stock: 10,
        imagen: canguroNike,
        category: 'canguros',    
    },
    {
        id: 8,
        nombre: 'Canguro Levis',
        talles: [
            'XL', 'L', 'XXL', 'M'
        ],
        precio: 4000,
        stock: 10,
        imagen: canguroLevis,
        category: 'canguros',    
    },
    {
        id: 9,
        nombre: 'Remera Levis',
        talles: [
            'XL', 'L', 'XXL', 'M'
        ],
        precio: 1500,
        stock: 10,
        imagen: remeraLevis,
        category: 'remeras',    
    },
]

export default stock