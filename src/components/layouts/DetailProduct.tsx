import React from "react";

type ProductProps = {
  product: {
    id: string | number;
    img: string;
    title: string;
    name: string;
    price: number;
  };
};

const DetailProduct = ({ product }: ProductProps) => {
  return (
    <div>
      <div className="">
        <div key={product.id} className="flex-card__product">
          <img src={product.img} alt={product.title} className="img" />
          <h4>{product.title}</h4>
          <p>{product.name}</p>
          <h4>{product.price && product.price.toLocaleString("id-ID", { style: "currency", currency: "IDR" })}</h4>
        </div>
      </div>
    </div>
  );
};

export default DetailProduct;
