export interface Products{
    id: number;
    name: string;
    price: number;
    image: string;
    description: string;
    storage: string;
    detail: string;
    nutrition: {
        protein: number;
        fat: number;
        carbohydrates: number;
        salt: number;
    };
}