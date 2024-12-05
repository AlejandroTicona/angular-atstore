export class Product {
  id!: number;
  category: { name: string; description: string } = { name: '', description: '' };
  name!: string;
  description!: string;
  stock!: number;
  price!: number;
  active!: boolean;
}
