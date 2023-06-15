import { useEffect, useMemo } from "react";
import { useParams } from "react-router-dom";
import { Products, fetchProducts } from "../../redux/state/Products/productsSlice";
import { useAppDispatch, useAppSelector } from "../../redux/store";


import { HiOutlineShoppingBag } from "react-icons/hi";
import { useCart } from "react-use-cart";


import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import Cart from "../Cart/Cart";



const Detail = () => {

  const dispatch = useAppDispatch();
  const products = useAppSelector((state) => state.products.data);
  const { id } = useParams();

  // filter of products to get the id
  const filterId = useMemo(() => products.filter((f: Products) => f.id == id), [products, id]);
 
  // library variable
  const { addItem } = useCart();


  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);



  return (
    <section>
      <NavBar />
      
      <Cart/>

      {/* display of details of the products with add cart button */}
      {filterId.map((p) => (
        <div key={toString(p.id)} className="flex flex-wrap mt-20 ">
          <div className="ml-5 mb-3">
            <img src={p.image} alt="" className="lg:mr-10 lg:ml-32 w-64"/>
          </div>
          <div className="pt-20 pl-10 lg:ml-32 lg:border-l border-lightGrey border-t">
            <h1 className="font-bold lg:text-5xl w-[15em]">{p.title}</h1>
            <p className="font-semibold text-2xl pt-6">$ {p.price}</p>
          <div className="flex bg-maroon text-white rounded py-2 px-4 w-52 mt-10 hover:bg-black transition duration-300">
            <button onClick={() => addItem(p)} className="font-semibold text-xl ">Add to cart</button>
            <HiOutlineShoppingBag className="ml-5 mt-1 font-semibold text-xl"/>
          </div>
          </div>
        </div>
      ))}

      <Footer /> 

    </section>
  );
};

export default Detail;
