export interface Recipe {
    id: number;
    name: string;
    description: string;
    tags: Array<string>;
    ingredients: Array<string>;
    steps: Array<string>;
    photo: string;
}
