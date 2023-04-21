import classes from './CartButton.module.css';
import { useSelector } from 'react-redux';

import { useDispatch } from 'react-redux';
import { toggle } from '../../store/uiSlice';

const CartButton = () => {

  const total=useSelector(state=>state.cart.totalQuantiy)
  console.log(total)
  const dispatch=useDispatch()
  const toggleCartHandler=()=>{
    dispatch(toggle())
  }
  return (
    <button className={classes.button}  onClick={toggleCartHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{total}</span>
    </button>
  );
};

export default CartButton;
