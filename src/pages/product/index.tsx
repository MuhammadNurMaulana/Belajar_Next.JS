import ProductView from "@/components/layouts/ProductView";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import useSwr from "swr";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const ProductPage = () => {
  const [product, setProduct] = useState([]);
  const [warung, setWarung] = useState([]);
  const [minuman, setMinuman] = useState([]);

  const { data, isLoading } = useSwr("/api/product", fetcher);

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
      });
  }, []);

  useEffect(() => {
    fetch("/api/minuman")
      .then((res) => res.json())
      .then((res) => {
        setMinuman(res.data);
        console.log(res.data);
      });
  }, []);

  return (
    <div>
      <h1 className="product">Product Page Client Side Rendering</h1>
      <ProductView product={isLoading ? [] : data.data} />
    </div>
  );
};

export default ProductPage;
