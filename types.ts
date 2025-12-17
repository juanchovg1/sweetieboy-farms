export enum ProductCategory {
    MILK = 'Milk & Dairy',
    WATER = 'Spring Water',
    BAKERY = 'Bakery',
    BUTCHER = 'Butcher'
}

export interface Product {
    id: string;
    title: string;
    description: string;
    price: number;
    unit: string;
    category: ProductCategory;
    imageUrl: string;
    isFeatured?: boolean;
    isSubscriptionStaple?: boolean; // Highlights core items like Milk/Water
    farmName: string;
}

export interface SubscriptionPlan {
    deliveryDay: 'Monday' | 'Wednesday' | null;
    zipCode: string;
    items: { [productId: string]: number }; // ID -> Quantity
}