import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

type Item = {
  id: string;
  name: string;
  price: number;
  size: string;
};

const ProductPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [product, setProduct] = useState([]);
  const { push } = useRouter();
  useEffect(() => {
    if (!isLogin) {
      push("/auth/login");
    }
  }, []);
  useEffect(() => {
    fetch("/api/product")
      .then((res) => res.json())
      .then((res) => {
        setProduct(res.data);
      });
  }, []);
  return (
    <div>
      <h1>Product Page</h1>
      {product.map((item: Item) => (
        <div key={item.name}>
          <h1>{item.name}</h1>
          <p>{item.price}</p>
          <p>{item.size}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductPage;
