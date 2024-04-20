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
import chicken_breast from "../../src/assets/images/chicken_breast_img.webp"
import doritos_chilli_heatwave from "../../src/assets/images/doritos_chilli_heatwave_img.webp"
import hot_cross_buns from "../../src/assets/images/hot_cross_buns_img.webp"
import mascarpone from "../../src/assets/images/mascarpone_img.webp"
import mozzarella from "../../src/assets/images/mozzarella_img.webp"
import potatoes from "../../src/assets/images/potatoes_img.webp"
import prawn_cocktail from "../../src/assets/images/prawn_cocktail_img.webp"
import salmon from "../../src/assets/images/salmon_img.webp"
import tropical_juice from "../../src/assets/images/tropical_juice_omg.webp"
import wallnuts from "../../src/assets/images/walnuts_img.webp"

const products = [
    {
        id: 1, 
        name: 'Tropical Juice', 
        price: 0.49, 
        image: tropical_juice, 
        category: [
            {
                id: 8, 
                name: 'Juices & Drinks'
            }
        ]
    },
    {
        id: 2, 
        name: 'Walnuts', 
        price: 1.49, 
        image: wallnuts, 
        category: [
            {
                id: 9, 
                name: 'Snacks'
            } 
        ]
    },
    {
        id: 3, 
        name: 'Doritoz - Chilli Heat Wave', 
        price: 2.50, 
        image: doritos_chilli_heatwave, 
        category: [
            {
                id: 9, 
                name: 'Snacks'
            } 
        ]
    },
    {
        id: 4, 
        name: 'Prawn Cocktail - Walkers (6 Pack)', 
        price: 2.20, 
        image: prawn_cocktail, 
        category: [
            {
                id: 9, 
                name: 'Snacks'
            } 
        ]
    },
    {
        id: 5, 
        name: 'Mozzarella', 
        price: 1.0, 
        image: mozzarella, 
        category: [
            {
                id: 5, 
                name: 'Dairy'
            }
        ]
    },
    {
        id: 16, 
        name: 'Mascarpone Cheese', 
        price: 1.80, 
        image: mascarpone, 
        category: [
            {
                id: 5, 
                name: 'Dairy'
            }
        ]
    },
    {
        id: 7, 
        name: 'Hot Cross Buns', 
        price: 1.50, 
        image: hot_cross_buns, 
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
        name: 'Potatoes', 
        price: 1.70, 
        image: potatoes, 
        category: [
            {
                id: 1, 
                name: 'Fruits & Vegetables'
            }
        ]
    },
    {
        id: 9, 
        name: 'Wild Salmon', 
        price: 7.50, 
        image: salmon, 
        category: [
            {
                id: 11, 
                name: 'Meat & Fish'
            }
        ]
    },
    {
        id: 10, 
        name: 'Chicken Breast', 
        price: 2.00, 
        image: chicken_breast,
        category: [
            {
                id: 11, 
                name: 'Meat & Fish'
            }
        ]
    },
    {
        id: 11, 
        name: 'Apple', 
        price: 0.49, 
        image: apples, 
        category: [
            {
                id: 1, 
                name: 'Fruits & Vegetables'
            }, 
            {
                id: 2, 
                name: 'Summer'
            }
        ]
    },
    {
        id: 12, 
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
        id: 13, 
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
        id: 14, 
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
        id: 15, 
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
        id: 16, 
        name: 'Orange', 
        price: 0.49, 
        image: oranges, 
        category: [
            {
                id: 1, 
                name: 'Fruits & Vegetables'
            }, 
            {
                id: 2, 
                name: 'Summer'
            }
        ]
    },
    {
        id: 17, 
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
        id: 18, 
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
        id: 19, 
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
        id: 20, 
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