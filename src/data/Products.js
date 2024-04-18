import apple from "../../src/assets/apple_img.jpeg"
import bread from "../../src/assets/bread_img.jpeg"
import milk from "../../src/assets/semi_skimmed_milk_img.jpeg"
import flour from "../../src/assets/plain_flour_img.jpeg"
import ladyFingers from "../../src/assets/lady_fingers_img.jpeg"

const products = [
    {
        id: 1, 
        name: 'Apple', 
        price: 0.49, 
        image: apple, 
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
        name: 'Semi-Skimmed Milk', 
        price: 0.79, 
        image: milk, 
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
        image: flour, 
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
        image: apple, 
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
        id: 8, 
        name: 'Whole Milk', 
        price: 0.79, 
        image: milk, 
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
        image: flour, 
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
        image: ladyFingers,
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