import { Recipe } from "./interfaces/Recipe";

export const recipesDummy: Array<Recipe> = [
    {
        id: 1,
        name: 'Pizza with tomato an olives',
        description: 'The best pizza in the world',
        tags: ['Pizza'],
        ingredients: ['Tomato', 'Olives', 'Cheese', 'Flour', 'Water'],
        steps: [],
        photo: 'assets/pizza.jpg'
    },
    {
        id: 2,
        name: 'Paella',
        description: 'The most famous Spanish meal',
        tags: ['Rice'],
        ingredients: ['Rice', 'Meat', 'Garlic', 'Onion'],
        steps: [],
        photo: 'assets/paella.jpg'
    },
    {
        id: 3,
        name: 'Steak',
        description: 'For meatlovers',
        tags: ['Steak'],
        ingredients: ['Steak', 'Oil', 'Salt'],
        steps: [],
        photo: 'assets/steak.jpg'
    }
];