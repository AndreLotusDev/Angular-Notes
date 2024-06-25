export class Product {
  id: number | null = null;
  name: string | null = null;
  price: number | null = null;
  image: string | null = null;
  description: string | null = null;

  constructor(init?: Partial<Product>) {
    Object.assign(this, init);
  }
}
