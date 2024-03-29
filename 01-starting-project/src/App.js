
import {useSelector} from "react-redux"

import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';


function App() {
  const cartshow=useSelector(state=>state.ui.cartvisible)
 return (
    <Layout>
      {cartshow &&<Cart />}
      <Products />
    </Layout>
  );
}

export default App;
