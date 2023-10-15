import ProductView from "@/components/layouts/ProductView";

type ProductProps = {
  product: {
    id: string | number;
    img: string;
    title: string;
    name: string;
    price: number;
  }[];
};
const staticside = ({ product }: ProductProps) => {
  return (
    <div>
      <h1 className="product">Product Page Static Side Rendering</h1>
      <ProductView product={product} />
    </div>
  );
};

export default staticside;

export async function getStaticSideProps() {
  const res = await fetch("http://localhost:3000/api/product");
  const response = await res.json();

  return {
    props: {
      product: response.data,
    },
  };
}
