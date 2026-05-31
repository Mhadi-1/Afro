export interface Product {
  id: string;
  name: string;
  nameRu: string;
  category: ProductCategory;
  images: string[];
  origin: string;
  originRu: string;
  thickness: string;
  texture: string;
  textureRu: string;
  bestFor: string;
  bestForRu: string;
  description: string;
  descriptionRu: string;
  price: number;
  moq: number;
}

export type ProductCategory = 'crocodile' | 'snake' | 'tiger' | 'lion' | 'ostrich' | 'stingray' | 'lizard';

export interface CategoryInfo {
  id: ProductCategory;
  nameKey: string;
  image: string;
  description: string;
  descriptionRu: string;
}
