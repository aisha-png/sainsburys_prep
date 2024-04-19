import apples from "../../src/assets/images/apples_img.webp"
import bread from "../../src/assets/images/bread_img.webp"
import semi_milk from "../../src/assets/images/semi_skimmed_milk_img.webp"
import plain_flour from "../../src/assets/images/plain_flour_img.webp"
import ladyFingers from "../../src/assets/images/lady_fingers_img.webp"
import self_rasing_flour from "../../src/assets/images/self_raising_flour_img.webp"
import vanilla_extract from "../../src/assets/images/vanilla_extract_img.webp"
import oranges from "../../src/assets/images/oranges_img.webp"
import baguette from "../../src/assets/images/baguette_img.webp"
import whole_milk from "../../src/assets/images/whole_milk_img.webp"

const products = [
    {
        id: 1, 
        name: 'Apple', 
        price: 0.49, 
        image: apples, 
        category: [
            {
                id: 1, 
                name: 'Fruits'
            }, 
            {
                id: 2, 
                name: 'Summer'
            }
        ]
    },
    {
        id: 2, 
        name: 'Bread', 
        price: 1.49, 
        image: bread, 
        category: [
            {
                id: 3, 
                name: 'Bakery'
            }, 
            {
                id: 4, 
                name: 'Baking'
            }
        ]
    },
    {
        id: 3, 
        name: 'Semi Skimmed Milk', 
        price: 0.79, 
        image: semi_milk, 
        category: [
            {
                id: 5, 
                name: 'Dairy'
            }, 
            {
                id: 6, 
                name: 'Breakfast'
            }
        ]
    },
    {
        id: 4, 
        name: 'Plain Flour', 
        price: 1.79, 
        image: plain_flour, 
        category: [
            {
                id: 7, 
                name: 'Pantry Staples'
            }, 
            {
                id: 3, 
                name: 'Baking'
            }
        ]
    },
    {
        id: 5, 
        name: 'Lady Fingers', 
        price: 2.00, 
        image: ladyFingers, 
        category: [
            {
                id: 7, 
                name: 'Pantry Staples'
            }, 
            {
                id: 4, 
                name: 'Baking'
            }
        ]
    },
    {
        id: 6, 
        name: 'Orange', 
        price: 0.49, 
        image: oranges, 
        category: [
            {
            id: 1, 
            name: 'Fruits'
            }, 
            {
                id: 2, 
                name: 'Summer'
            }
        ]
    },
    {
        id: 7, 
        name: 'Baguette', 
        price: 1.49, 
        image: baguette, 
        category: [
            {
                id: 3, 
                name: 'Bakery'
            }, 
            {
                id: 4, 
                name: 'Baking'
            }
        ]
    },
    {
        id: 8, 
        name: 'Whole Milk', 
        price: 0.79, 
        image: whole_milk, 
        category: [
            {
                id: 5, 
                name: 'Dairy'
            }, 
            {
                id: 6, 
                name: 'Breakfast'
            }
        ]
    },
    {
        id: 9, 
        name: 'Self Raising Flour', 
        price: 1.79, 
        image: self_rasing_flour, 
        category: [
            {
                id: 7, 
                name: 'Pantry Staples'
            }, 
            {
                id: 3, 
                name: 'Baking'
            }
        ]
    },
    {
        id: 10, 
        name: 'Vanilla Extract', 
        price: 2.00, 
        image: vanilla_extract,
        category: [
            {
                id: 7, 
                name: 'Pantry Staples'
            }, 
            {
                id: 3, 
                name: 'Baking'
            }
        ]
    }
]

export default products;