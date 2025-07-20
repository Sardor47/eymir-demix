import ProductDetail from './ProductDetail';

export async function generateStaticParams() {
  return [
    { id: 'concrete-floors' },
    { id: 'topping-system' },
    { id: 'epoxy-floors' },
    { id: 'polyurethane-floors' },
    { id: 'polyurea-coating' },
  ];
}

export default function ProductPage({ params }: { params: { id: string } }) {
  return <ProductDetail productId={params.id} />;
}