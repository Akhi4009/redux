import ProductItem from './ProductItem';
import classes from './Products.module.css';


const dummyProducts=[
  {
    id:"P1",
    price:6,
    title:"my first book",
    description:"The first book I ever wrote"
  },
  {
    id:"P2",
    price:5,
    title:"my second book",
    description:"The second book I ever wrote"
  }
] 

const Products = (props) => {


  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {dummyProducts.map(product=>(
          <ProductItem
          id={product.id}
          key={product.id}
          title={product.title}
          price={product.price}

          description={product.description}
        />
        ))}
        
      </ul>
    </section>
  );
};

export default Products;
