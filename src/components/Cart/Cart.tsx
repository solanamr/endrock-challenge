import { useState, useCallback } from "react";
import { HiOutlineShoppingCart, HiPlusSm, HiArrowSmLeft, HiX, HiOutlineMinusSm } from "react-icons/hi";
import { motion } from "framer-motion";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { useCart } from "react-use-cart";

const Cart = () => {

  const [open, setOpen] = useState<boolean>(false);

  
  const {
    totalUniqueItems,
    items,
    updateItemQuantity,
    removeItem,
    cartTotal,
    emptyCart
  } = useCart();

  

  const notify = useCallback(() => {
    emptyCart()
    toast("Tu compra se realizó con éxito");
  }, [emptyCart]);

  return (
    <section>
      <div className="flex justify-end animate-pulse">
      <HiOutlineShoppingCart
          className="cursor-pointer text-3xl mt-10 mr-10 lg:mr-40"
          onClick={() => setOpen(prevOpen => !prevOpen)}
        />
      </div>
      {open && (
        <motion.div
          initial={{ x: 300 }}
          animate={{ x: 0 }}
          className="fixed right-0 top-0 bg-lightBlue h-screen text-black border border-maroon bg-white w-full lg:w-4/12 z-40"
        >
          <div className="flex flex-col gap-8 mt-[10%] ml-[15%]">
            <h1 className="text-2xl lg:text-4xl font-semibold pt-20 pb-8">Shopping cart ({totalUniqueItems})</h1>
            <div className="text-xl font-semibold">
            <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.quantity} x {item.title} &mdash;
            <button
              onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
              className="ml-2"
            >
              <HiOutlineMinusSm/>
            </button>
            <button
              onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
              className="ml-2"
            >
              <HiPlusSm/>
              
              
            </button>
            <button onClick={() => removeItem(item.id)} className="ml-2"><HiX/></button>
            <div className="flex justify-end mr-8 pt-2 pb-5">
              <p>${item.price}</p>
            </div>
          </li>
        ))}
      </ul>
      <p className="text-xl lg:text-3xl">Total ${cartTotal}</p>
            </div>
            <button onClick={notify} className="text-xl font-semibold bg-maroon text-white w-48 h-10 rounded">
              Finalizar compra
              <ToastContainer />
            </button>
          </div>
          <HiArrowSmLeft
            className="absolute left-1 mb-2 text-3xl top-10 cursor-pointer"
            onClick={() => setOpen(!open)}
          />
        </motion.div>
      )}
    </section>
  );
};

export default Cart;
