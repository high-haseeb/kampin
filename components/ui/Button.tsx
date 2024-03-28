import Image from "next/image";

export const Button = ({
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
