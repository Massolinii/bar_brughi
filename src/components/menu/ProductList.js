import { useState } from "react";

export default function ProductList({ title, products }) {
  return (
    <div className="max-w-screen-md mx-auto">
      <h2 className="text-3xl bg-magenta mb-0 py-1 text-center text-bold text-2xl tracking-wide">
        {title}
      </h2>
      <div className="grid grid-cols-1 bg-darkmag bg-opacity-75">
        {products.map((product) => (
          <div
            key={product.id}
            className="flex items-center p-2 border-t border-black"
          >
            <img
              src={product.img}
              alt={product.title}
              className="w-1/3 max-w-[90px] max-h-[80px] rounded-full object-cover border-2 brightness-90"
            />
            <div className="flex flex-col w-2/3 justify-center ml-2">
              <span className="text-left ms-3 text-2xl md:text-3xl mb-1 tracking-normal">
                {product.title}
              </span>
              <span className="text-right md:text-xl tracking-wide">
                {product.price}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
