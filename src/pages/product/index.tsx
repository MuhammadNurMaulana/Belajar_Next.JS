import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import useSwr from "swr";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const ProductPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [product, setProduct] = useState([]);
  const [warung, setWarung] = useState([]);
  const [minuman, setMinuman] = useState([]);
  const { push } = useRouter();

  const { data, isLoading } = useSwr("/api/product", fetcher);
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
        console.log(res.data);
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
      <h1 className="product">Product Page</h1>
      <div className="flex-card">
        {isLoading ? (
          <div className="flex-card__skeleton">
            <img src="" alt="" className="flex-card__skeleton__img" />
            <h4 className="flex-card__skeleton__title" />
            <p className="flex-card__skeleton__name" />
            <h4 className="flex-card__skeleton__price" />
          </div>
        ) : (
          <>
            {data.data.map((item: any) => (
              <div key={item.id} className="flex-card__item">
                <img src={item.img} alt={item.title} className="flex-card__img" />
                <h4>{item.title}</h4>
                <p>{item.name}</p>
                <h4>{item.price.toLocaleString("id-ID", { style: "currency", currency: "IDR" })}</h4>
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default ProductPage;
