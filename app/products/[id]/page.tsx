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

// ✅ Async params — обязательно
export default async function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  return <ProductDetail productId={id} />;
}