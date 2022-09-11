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
        options: [
            { value: 'XL', text: 'XL' }, { value: 'L', text: 'L' }, { value: 'XXL', text: 'XXL' }, { value: 'M', Text: 'M' }
        ],
        precio: 2500,
        stocks: 10,
        imagen: remeraRipcurl,
        category: 'remeras',
    },

    {
        id: 2,
        nombre: 'Canguro Vans',
        options: [
            { value: 'XL', text: 'XL' }, { value: 'L', text: 'L' }, { value: 'XXL', text: 'XXL' }, { value: 'M', Text: 'M' }
        ],
        precio: 4000,
        stocks: 10,
        imagen: canguroVans,
        category: 'canguros',
    },
    {
        id: 3,
        nombre: 'Nike Air',
        options: [
            { value: 'XL', text: 'XL' }, { value: 'L', text: 'L' }, { value: 'XXL', text: 'XXL' }, { value: 'M', text: 'M' }
        ],
        precio: 6000,
        stocks: 10,
        imagen: championesNike,
        category: 'championes',
    },
    {
        id: 4,
        nombre: 'Adidas light',
        options: [
            { value: 'XL', text: 'XL' }, { value: 'L', text: 'L' }, { value: 'XXL', text: 'XXL' }, { value: 'M', text: 'M' }
        ],
        precio: 4500,
        stocks: 10,
        imagen: championesAdidas,
        category: 'championes',
    },
    {
        id: 5,
        nombre: 'All Star Classic',
        options: [
            { value: 'XL', text: 'XL' }, { value: 'L', text: 'L' }, { value: 'XXL', text: 'XXL' }, { value: 'M', text: 'M' }
        ],
        precio: 3000,
        stocks: 10,
        imagen: championesAllstar,
        category: 'championes',
    },
    {
        id: 6,
        nombre: 'Remera Vans',
        options: [
            { value: 'XL', text: 'XL' }, { value: 'L', text: 'L' }, { value: 'XXL', text: 'XXL' }, { value: 'M', text: 'M' }
        ],
        precio: 1500,
        stocks: 10,
        imagen: remeraVans,
        category: 'remeras',
    },
    {
        id: 7,
        nombre: 'Canguro Nike',
        options: [
            { value: 'XL', text: 'XL' }, { value: 'L', text: 'L' }, { value: 'XXL', text: 'XXL' }, { value: 'M', text: 'M' }
        ],
        precio: 2500,
        stocks: 10,
        imagen: canguroNike,
        category: 'canguros',
    },
    {
        id: 8,
        nombre: 'Canguro Levis',
        options: [
            { value: 'XL', text: 'XL' }, { value: 'L', text: 'L' }, { value: 'XXL', text: 'XXL' }, { value: 'M', text: 'M' }
        ],
        precio: 4000,
        stocks: 10,
        imagen: canguroLevis,
        category: 'canguros',
    },
    {
        id: 9,
        nombre: 'Remera Levis',
        options: [
            { value: 'XL', text: 'XL' }, { value: 'L', text: 'L' }, { value: 'XXL', text: 'XXL' }, { value: 'M', text: 'M' }
        ],
        precio: 1500,
        stocks: 10,
        imagen: remeraLevis,
        category: 'remeras',
    },
]

export default stock