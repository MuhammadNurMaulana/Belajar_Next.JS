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

const serverside = ({ product }: ProductProps) => {
  return (
    <div>
      <h1 className="product">Product Page Server Side Rendering</h1>
      <ProductView product={product} />
    </div>
  );
};

export default serverside;

export async function getServerSideProps() {
  const res = await fetch("http://localhost:3000/api/product");
  const response = await res.json();

  return {
    props: {
      product: response.data,
    },
  };
}
