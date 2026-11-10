import { Card, CodeBlock, Typography } from '@/shared/ui';

type Categories = 'Fruit' | 'vegetable' | 'All';

interface IProduct {
  id: bigint;
  uniqueId: symbol;
  name: string;
  price: string;
  isAvailable: boolean;
  description: null;
  discount: number;
  categories: Categories;
}

const product: IProduct[] = [
  {
    id: 1n,
    uniqueId: Symbol('product-unique-id'),
    price: '10',
    name: 'Apple',
    isAvailable: true,
    description: null,
    discount: 10,
    categories: 'Fruit',
  },
  {
    id: 2n,
    uniqueId: Symbol('product-unique-id'),
    price: '5',
    name: 'Carrot',
    isAvailable: true,
    description: null,
    discount: 20,
    categories: 'vegetable',
  },
];

const parse = parseInt('23px');

export function JSPage() {
  return (
    <Card title="JavaScript Data Types" maxWidth="2xl" border="2px">
      {product.map((product) => (
        <CodeBlock
          key={product.id}
          title={product.name}
          codeR={product.categories}
          codeL={Number(product.price)}
          badge={product.isAvailable ? 'Available' : 'Not Available'}
        />
      ))}

      <Typography as="h2" text={parse} align="center" />
    </Card>
  );
}
