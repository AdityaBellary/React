import ProductItem from './ProductItem';
import classes from './Products.module.css';

const Products = (props) => {
  const DUMMY_PRODUCTS = [
    {
      id : 'p1',
      title : 'My first book',
      price : 100,
      description : "This is my first book"
    },
    {
      id : 'p2',
      title : 'My second book',
      price : 200,
      description : "This is my second book"
    }
  ]
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map(item => <ProductItem
          key={item.id}
          id = {item.id}
          title={item.title}
          price={item.price}
          description={item.description}
        /> ) }
      </ul>
    </section>
  );
};

export default Products;
