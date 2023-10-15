import Link from "next/link";
import React from "react";

type ProductProps = {
  product: {
    id: string | number;
    img: string;
    title: string;
    name: string;
    price: number;
  }[];
};

const ProductView = ({ product }: ProductProps) => {
  return (
    <div>
      <div className="flex-card">
        {product.length > 0 ? (
          <>
            {product.map((item) => (
              <Link href={`/product/${item.id}`} key={item.id} className="flex-card__item">
                <img src={item.img} alt={item.title} className="flex-card__img" />
                <h4>{item.title}</h4>
                <p>{item.name}</p>
                <h4>{item.price.toLocaleString("id-ID", { style: "currency", currency: "IDR" })}</h4>
              </Link>
            ))}
          </>
        ) : (
          <div className="flex-card__skeleton">
            <img src="" alt="" className="flex-card__skeleton__img" />
            <h4 className="flex-card__skeleton__title" />
            <p className="flex-card__skeleton__name" />
            <h4 className="flex-card__skeleton__price" />
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductView;
