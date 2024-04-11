export class PurchaseItem {
    id: number;
    name: string;
    quantity: number;
    price: number;

    constructor(id: number = 0, name: string = '', quantity: number = 0, price: number = 0) {
        this.id = id;
        this.name = name;
        this.quantity = quantity;
        this.price = price;
    }
}

export function SeedPurchaseItems() {
    let items: PurchaseItem[] = [
        { id: 1, name: "Apple", quantity: 10, price: 1.99 },
        { id: 2, name: "Banana", quantity: 5, price: 0.99 },
        { id: 3, name: "Cherry", quantity: 20, price: 2.99 }
    ];

    return items;
}