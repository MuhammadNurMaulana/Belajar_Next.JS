import { useRouter } from "next/router";

const ShopPage = () => {
  const { query } = useRouter();
  return (
    <div>
      <div>ShopPage</div>
      <h1>Nama Shop : {`${query.slug ? query.slug[0] + "-" + query.slug[1] : ""}`}</h1>
    </div>
  );
};

export default ShopPage;
