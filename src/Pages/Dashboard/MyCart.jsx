import { Helmet } from "react-helmet-async";
import useCart from "../../hooks/useCart";

const MyCart = () => {
  const [cart] = useCart();
  console.log(cart);
  const total = cart.reduce((sum, item) => item.price + sum, 0);
  console.log(total);
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | My Cart</title>
      </Helmet>
      <h2>My Cart</h2>
    </div>
  );
};

export default MyCart;
