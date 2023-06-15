import { Link } from "react-router-dom";
import { useEffect } from "react";
import { Products, fetchProducts } from "../../redux/state/Products/productsSlice";
import { useAppDispatch, useAppSelector } from "../../redux/store";

import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer"

const ProductsList = () => {

    const dispatch = useAppDispatch()
    const products: Products[] = useAppSelector((state) => state.products.data);
    

    useEffect(() => {
        dispatch(fetchProducts());
      }, [dispatch]);

    return (
        <section>

             <NavBar/>
             

             {/* list of all products */}
            <div className="flex flex-wrap justify-center ">
                {
                    products.map((e, i) =>(
                       <Link to={`/products/${e.id}`}>
                         <div key={i} className="lg:border border-black rounded px-10 py-5 w-96 h-[37em] lg:m-5 
                         hover:-translate-y-1 hover:scale-110 duration-300">
                             <div className="flex justify-center">
                                <img src={e.image} alt="img" className="w-60 h-60 items-center mt-5"/>
                             </div>
                             <h1 className="text-center font-bold text-xl pt-4">{e.title.substring(0, 67)}</h1>
                             <h3 className="text-center text-sm pt-2">{e.description.substring(0, 200)}...</h3>
                             <p className="text-center text-xl pt-2">$ {e.price}</p>
                         </div>
                       </Link>
                    ))
                }
            </div>


            <Footer/>

        </section>
    );
}
 
export default ProductsList;