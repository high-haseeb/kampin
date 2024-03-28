"use client";
import React from "react";
import { useProductSotre } from "@/components/Store";
import { Button } from "@/components/ui/Button";

const ProductConfig = () => {
  const {
    products,
    activeProduct,
    productModels,
    activeProductModel,
    setActiveProduct,
    setActiveProductModel,
  } = useProductSotre();
  return (
    <>
      Choose a product
      <div className="flex items-center justify-between gap-4 mb-4 text-[#3B3B3B] text-[1rem]">
        {products.map((product, index) => (
          <Button
            title={product}
            key={index}
            active={product === activeProduct}
            setActive={setActiveProduct}
          />
        ))}
      </div>
      <div className="text-[#1A1A1A]">Product Models</div>
      <div className="grid grid-cols-2 gap-4 text-[#3B3B3B] text-[1rem]">
        {productModels.map((productModel, index) => (
          <Button
            title={productModel.title}
            imageUrl={`/images/models/${productModel.image}`}
            key={index}
            active={productModel.title === activeProductModel}
            setActive={setActiveProductModel}
          />
        ))}
      </div>
    </>
  );
};

export default ProductConfig;
