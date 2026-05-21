export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  description: string;
  specs: {
    material: string;
    weight: string;
    length: string;
    care: string;
  };
  image: string;
  colors: string[];
}

export const products: Product[] = [
  {
    id: 'fork-dinner',
    name: 'Dinner Fork',
    category: 'Flatware',
    price: 24.99,
    description: 'Precision-engineered dining fork. Sharp geometric prongs with luminous frosted finish.',
    specs: {
      material: '18/10 Stainless Steel',
      weight: '45g',
      length: '200mm',
      care: 'Dishwasher safe. Hand dry recommended.',
    },
    image: '/products/fork-dinner.jpg',
    colors: ['Silver', 'Matte Black'],
  },
  {
    id: 'knife-dinner',
    name: 'Dinner Knife',
    category: 'Flatware',
    price: 26.99,
    description: 'Razor-sharp serrated edge. Blade-like geometry meets functional elegance.',
    specs: {
      material: '18/10 Stainless Steel',
      weight: '52g',
      length: '220mm',
      care: 'Hand wash recommended. Dishwasher safe.',
    },
    image: '/products/knife-dinner.jpg',
    colors: ['Silver', 'Matte Black'],
  },
  {
    id: 'spoon-table',
    name: 'Table Spoon',
    category: 'Flatware',
    price: 22.99,
    description: 'Concave geometric form. Minimal surface with maximum presence.',
    specs: {
      material: '18/10 Stainless Steel',
      weight: '48g',
      length: '195mm',
      care: 'Dishwasher safe. Machine dry preferred.',
    },
    image: '/products/spoon-table.jpg',
    colors: ['Silver', 'Matte Black'],
  },
  {
    id: 'spoon-dessert',
    name: 'Dessert Spoon',
    category: 'Flatware',
    price: 18.99,
    description: 'Compact precision. Sharp architectural lines in miniature.',
    specs: {
      material: '18/10 Stainless Steel',
      weight: '32g',
      length: '165mm',
      care: 'Dishwasher safe.',
    },
    image: '/products/spoon-dessert.jpg',
    colors: ['Silver'],
  },
  {
    id: 'fork-salad',
    name: 'Salad Fork',
    category: 'Flatware',
    price: 20.99,
    description: 'Three-prong geometry. Reduced scale, full intensity.',
    specs: {
      material: '18/10 Stainless Steel',
      weight: '38g',
      length: '175mm',
      care: 'Dishwasher safe.',
    },
    image: '/products/fork-salad.jpg',
    colors: ['Silver', 'Matte Black'],
  },
  {
    id: 'fork-service',
    name: 'Service Fork',
    category: 'Serving',
    price: 34.99,
    description: 'Large-scale serving piece. Architectural presence on the table.',
    specs: {
      material: '18/10 Stainless Steel',
      weight: '65g',
      length: '240mm',
      care: 'Hand wash recommended.',
    },
    image: '/products/fork-service.jpg',
    colors: ['Silver'],
  },
  {
    id: 'spoon-serving',
    name: 'Serving Spoon',
    category: 'Serving',
    price: 32.99,
    description: 'Oversized concave geometry. Functional sculpture.',
    specs: {
      material: '18/10 Stainless Steel',
      weight: '72g',
      length: '245mm',
      care: 'Hand wash recommended.',
    },
    image: '/products/spoon-serving.jpg',
    colors: ['Silver'],
  },
  {
    id: 'butter-knife',
    name: 'Butter Knife',
    category: 'Speciality',
    price: 14.99,
    description: 'Blade-flat design. Minimal geometry for maximum utility.',
    specs: {
      material: '18/10 Stainless Steel',
      weight: '24g',
      length: '155mm',
      care: 'Dishwasher safe.',
    },
    image: '/products/butter-knife.jpg',
    colors: ['Silver', 'Matte Black'],
  },
  {
    id: 'knife-steak',
    name: 'Steak Knife',
    category: 'Speciality',
    price: 28.99,
    description: 'Aggressive serrated edge. Engineered for precision cutting.',
    specs: {
      material: '18/10 Stainless Steel',
      weight: '58g',
      length: '210mm',
      care: 'Hand wash recommended.',
    },
    image: '/products/knife-steak.jpg',
    colors: ['Silver'],
  },
  {
    id: 'spoon-coffee',
    name: 'Coffee Spoon',
    category: 'Speciality',
    price: 12.99,
    description: 'Petite geometric form. Espresso-scale precision.',
    specs: {
      material: '18/10 Stainless Steel',
      weight: '18g',
      length: '125mm',
      care: 'Dishwasher safe.',
    },
    image: '/products/spoon-coffee.jpg',
    colors: ['Silver'],
  },
  {
    id: 'fork-oyster',
    name: 'Oyster Fork',
    category: 'Speciality',
    price: 16.99,
    description: 'Three-prong specialist tool. Minimal form factor.',
    specs: {
      material: '18/10 Stainless Steel',
      weight: '20g',
      length: '135mm',
      care: 'Dishwasher safe.',
    },
    image: '/products/fork-oyster.jpg',
    colors: ['Silver'],
  },
  {
    id: 'flatware-set-12',
    name: 'Flatware Set - 12 Piece',
    category: 'Sets',
    price: 199.99,
    description: '4x dinner forks, 4x dinner knives, 4x table spoons. Complete minimalist place setting.',
    specs: {
      material: '18/10 Stainless Steel',
      weight: '540g',
      length: 'Mixed',
      care: 'Dishwasher safe. See individual piece care.',
    },
    image: '/products/set-12.jpg',
    colors: ['Silver'],
  },
];
