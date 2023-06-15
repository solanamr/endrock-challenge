const Product = ({ display }) => {
  return (
    <section className="mt-10 lg:ml-10 border border-maroon w-80 h-[30.5em] rounded">
      <div className="px-10 py-5 pt-10 items-center">
        <img src={display.image} alt="img" className="w-full h-60"/>
        <h1 className="pt-5 text-center font-bold text-2xl">{display.title}</h1>
        <p className="pt-2 text-center text-xl">$ {display.price}</p>
      </div>
    </section>
  );
};

export default Product;
