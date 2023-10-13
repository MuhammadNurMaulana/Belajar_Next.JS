import { useRouter } from "next/router";

const ProductPage = () => {
  const { query } = useRouter();

  return (
    <div>
      <div>Product</div>
      <h1>Nama Product : {query.items}</h1>
    </div>
  );
};

export default ProductPage;
