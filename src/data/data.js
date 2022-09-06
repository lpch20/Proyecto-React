import remeraRipcurl from './../remera ripcurl.jpg'
import remeraVans from './../remera vans.jpg'

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
        precio: 1500,
        stock: 10,
        imagen: remeraVans,
        category:  'canguros',   
    },
    {
        id: 3,
        nombre: 'Nike Air Force',
        talles: [
            'XL', 'L', 'XXL', 'M'
        ],
        precio: 1500,
        stock: 10,
        imagen: remeraVans,
        category: 'championes',    
    },
]

export default stock