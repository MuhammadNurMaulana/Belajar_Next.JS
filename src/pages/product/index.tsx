import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

type Item = {
  name: string;
};

const ProductPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [product, setProduct] = useState([]);
  const [warung, setWarung] = useState([]);
  const { push } = useRouter();
  useEffect(() => {
    if (!isLogin) {
      push("/auth/login");
    }
  }, []);
  useEffect(() => {
    fetch("/api/product")
      .then((res) => res.json())
      .then((res) => setProduct(res.data));
  }, []);

  useEffect(() => {
    fetch("/api/warung")
      .then((res) => res.json())
      .then((res) => {
        setWarung(res.data);
        console.log(res);
      });
  }, []);
  return (
    <div>
      <h1>Product Page</h1>
      <h1>Products</h1>
      {product.map((item: Item, index) => (
        <div key={index}>
          <h1>{item.name}</h1>
        </div>
      ))}
      <hr />
      <hr />
      <hr />
      <h1>Warung Makan</h1>
      {warung.map((item: Item, index) => (
        <div key={index}>
          <h1>{item.name}</h1>
        </div>
      ))}
    </div>
  );
};

export default ProductPage;
