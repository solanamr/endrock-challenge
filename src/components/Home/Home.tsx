import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { Products, fetchProducts } from "../../redux/state/Products/productsSlice";

import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer"
import Product from "../Products/Products";

import banner from "../../assets/images/banner.jpg"

const Home = () => {

    const dispatch = useAppDispatch()
    const products = useAppSelector((state) => state.products.data);
    const firstProducts: Products[] = products.slice( 0, 4 )


    useEffect(() => {
        dispatch(fetchProducts());
      }, [dispatch]);

    return (
        <section>

            <NavBar/>

            <img src={banner} alt="banner" className="mt-6 rounded"/>

            {/* display of first 4 products */}
            <section className="flex justify-center flex-wrap">
                {
                    firstProducts.map((display: any) =>(
                        <Link to={`/products/${display.id}`}>
                            <Product key={display.id} display={display}/>
                        </Link>
                    ))
                }
            </section>

            {/* about */}
            <section className="flex justify-center">
                <div className="border border-maroon rounded mt-20 lg:px-10 lg:py-10 ">
                    <h2 className="text-3xl lg:text-7xl pt-3 font-bold text-maroon text-center">Who we are</h2>
                    <p className="w-60 px-2 py-2 lg:w-96 lg:text-xl pt-5 text-center">Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                    Iure praesentium perspiciatis fuga repellat nisi fugit sequi aut. Numquam corporis nihil libero at eaque nisi esse animi! 
                    Iusto delectus aliquam inventore!</p>
                </div>
            </section>

            <Footer/>
        </section>
    );
}
 
export default Home;