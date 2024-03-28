import Image from "next/image";
import React from "react";

const ProductConfig = () => {
  return (
    <div className="w-1/2 bg-[#FAFAFA] flex flex-col h-full px-20 pt-20 text-2xl gap-8">
      Choose a product
      <div className="flex items-center justify-between gap-2 mb-4">
        <Button title="Canovan Home Plus" active />
        <Button title="Home only" />
      </div>
      Product Models
      <div className="grid grid-cols-2 gap-4">
        <Button
          title="Front Giebel"
          active
          imageUrl={"/images/models/model.png"}
        />
        <Button
          title="Puldatch"
          imageUrl={"/images/models/model.png"}
        />
        <Button
          title="Front Giebel"
          imageUrl={"/images/models/model.png"}
        />
        <Button
          title="Puldatch"
          imageUrl={"/images/models/model.png"}
        />
      </div>
    </div>
  );
};
const Button = ({
  title,
  active = false,
  imageUrl = null,
}: {
  title: string;
  active?: boolean;
  imageUrl?: string | null;
}) => {
  return (
    <button
      className={`rounded-2xl w-full py-6 px-12 text-black text-[1rem] capitalize flex flex-col gap-2 items-center justify-center ${active ? "bg-white border border-black" : "bg-[#EFEFEF]"}`}
    >
      {imageUrl && (
        <Image src={imageUrl} height={100} width={190} alt="product" className="object-cover"/>
      )}
      {title}
    </button>
  );
};

export default ProductConfig;
