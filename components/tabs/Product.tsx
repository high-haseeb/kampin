"use client";
import Image from "next/image";
import React from "react";
import { useProductSotre } from "@/components/Store";

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
    <div className="w-[45rem] bg-[#FAFAFA] flex flex-col h-full px-20 pt-20 text-2xl gap-8 text-[#1A1A1A]">
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
    </div>
  );
};
const Button = ({
  title,
  setActive,
  active = false,
  imageUrl = null,
}: {
  title: string;
  active?: boolean;
  setActive: (item: string) => void;
  imageUrl?: string | null;
}) => {
  return (
    <button
      className={`rounded-2xl transition-colors w-full py-4 px-12 text-black text-[1rem] capitalize flex flex-col gap-2 items-center justify-center ${active ? "bg-white border border-black" : "bg-[#EFEFEF]"}`}
      onClick={() => setActive(title)}
    >
      {imageUrl && (
        <Image
          src={imageUrl}
          height={100}
          width={190}
          alt="product"
          className="object-cover"
        />
      )}
      {title}
    </button>
  );
};

export default ProductConfig;
