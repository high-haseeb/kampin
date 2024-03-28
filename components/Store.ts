import create from "zustand";

interface TabStore {
  tabs: string[];
  currentTab: string;
  setCurrentTab: (tab: string) => void;
}

const useTabStore = create<TabStore>((set) => ({
  tabs: ["products", "doors", "window", "applicators", "summary"],
  currentTab: "products",
  setCurrentTab: (tab) => set({ currentTab: tab }),
}));

interface ProductModel {
  title: string;
  image: string;
  key: number;
}

interface ProductStore {
  products: string[];
  activeProduct: string;
  productModels: ProductModel[];
  activeProductModel: string;
  setActiveProduct: (product: string) => void;
  setActiveProductModel: (productModel: string) => void;
}

export const useProductSotre = create<ProductStore>((set) => ({
  products: ["Canovan plus Home", "Home Only"],
  activeProduct: "Canovan plus Home",
  productModels: [
    { title: "Front Giebel", image: "model.png", key: 1 },
    { title: "Pultdach", image: "model.png", key: 2 },
    { title: "Pultdach 2", image: "model.png", key: 4 },
    { title: "Front Giebel 2", image: "model.png", key: 3 },
  ],
  activeProductModel: "Front Giebel",
  setActiveProduct: (product: string) => set({ activeProduct: product }),
  setActiveProductModel: (productModel: string) =>
    set({ activeProductModel: productModel }),
}));

export default useTabStore;
