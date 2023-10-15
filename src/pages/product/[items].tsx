import DetailProduct from "@/components/layouts/DetailProduct";
import { ADDRGETNETWORKPARAMS } from "dns";
import Link from "next/link";
import { useRouter } from "next/router";
import useSwr from "swr";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

type ProductProps = {
  product: {
    id: string | number;
    img: string;
    title: string;
    name: string;
    price: number;
  };
};

const ProductPage = ({ product }: ProductProps) => {
  const { query } = useRouter();

  // client side
  // const { data, error, isLoading } = useSwr(`/api/product/${query.items}`, fetcher);
  return (
    <div>
      <div>Product</div>
      <h1>Nama Product : {query.items}</h1>
      <Link href={"/product"}>Back To Product</Link>
      {/* client-side */}
      {/* <DetailProduct product={isLoading ? [] : data.data} /> */}

      {/* Server-side */}
      <DetailProduct product={product} />
    </div>
  );
};

export default ProductPage;

// Server-side
// export async function getServerSideProps({ params }: { params: { items: string } }) {
//   const res = await fetch(`http://localhost:3000/api/product/${params.items}`);
//   const response = await res.json();
//   return {
//     props: {
//       product: response.data,
//     },
//   };
// }

export async function getStaticPaths() {
  const res = await fetch(`http://localhost:3000/api/product`);
  const response = await res.json();

  const paths = response.data.map((product: { id: string | number }) => ({
    params: {
      items: product.id,
    },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }: { params: { items: string } }) {
  const res = await fetch(`http://localhost:3000/api/product/${params.items}`);
  const response = await res.json();
  return {
    props: {
      product: response.data,
    },
  };
}
