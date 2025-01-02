import { addToCart } from "@/redux/AddToCart/cartSlice";
import { useAppDispatch } from "@/redux/hooks";
import { FaShoppingCart } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface CartItem {
  rating:{rate:number,count:number};
  category:string;
  id: string;
  title: string;
  image: string;
  productDetails?: string;
  price: number;
  allCategory?: string;
  size?: string;
  color?: string;
  quantity: number;
}

interface ToastAddToCartProps {
  cartItem: CartItem;
  buttonSize?: string;
}

const ItemAddNotification: React.FC<ToastAddToCartProps> = ({
  cartItem,
  buttonSize = "p-3 rounded-xl",
}) => {
  const dispatch = useAppDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(cartItem));
    toast.success(`${cartItem.title} added to cart!`, {
      position: "top-center",
      autoClose: 2000,
    });
  };

  return (
    <div>
      <div className="w-fit" onClick={handleAddToCart}>
        <button
          className={`group bg-gray-800 hover:border-[1px] hover:border-gray-700 flex hover:bg-transparent text-white hover:text-black text-sm ${buttonSize} dark:hover:bg-white`}
        >
          <FaShoppingCart className="mr-2 h-4 w-4 group-hover:text-red-500 duration-300" />
          Add to Cart
        </button>
      </div>
      <ToastContainer
        toastClassName="top-[3.2rem] dark:bg-zinc-900 "
        className="fixed top-0 left-1/2 -translate-x-1/2 "
      />
    </div>
  );
};

export default ItemAddNotification;
