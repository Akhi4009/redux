import { useDispatch } from 'react-redux';

import classes from './CartItem.module.css';
import { addToCart,removeFromCart } from '../../store/cart.Slice';


const CartItem = (props) => {
  const { id,name:title, quantity, totalPrice, price } = props.item;
  const dispatch=useDispatch()

  const addToCartHandler=()=>{
    dispatch(addToCart({
      id,title,price
    }))
  }
  const removeFromCartHandler=()=>{
    dispatch(removeFromCart(id))
  }

 return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${totalPrice.toFixed(2)}{' '}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={addToCartHandler}>+</button>
          <button onClick={removeFromCartHandler}>-</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
