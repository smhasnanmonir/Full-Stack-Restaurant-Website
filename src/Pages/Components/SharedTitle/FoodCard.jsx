import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import { data } from "autoprefixer";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import useCart from "../../../hooks/useCart";

const FoodCard = ({ items }) => {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const [, refetch] = useCart();
  const handleAddToCart = (items) => {
    const { name, image, price, recipe, _id } = items;
    console.log(items);
    if (user && user.email) {
      const cartItem = {
        menuItemId: _id,
        name,
        image,
        price,
        email: user.email,
      };
      fetch("http://localhost:5000/carts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(cartItem),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            refetch(); //refetch the cart
            Swal.fire("Added to cart.");
          }
        });
    } else {
      Swal.fire({
        title: "Please log in to order food",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, take me to login page",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login");
        }
      });
    }
  };
  return (
    <div className="card-1 bg-[#e9e6e2] text-center relative">
      <p className="absolute right-3 top-3 px-4 py-2 bg-black text-white">
        ${items.price}
      </p>
      <img className="w-full" src={items.image} />
      <div className="p-[24px] space-y-2">
        <h1 className="text-xl font-bold">{items.name}</h1>
        <p className="">{items.recipe}</p>
        <button onClick={() => handleAddToCart(items)} className="btn-one">
          add to cart
        </button>
      </div>
    </div>
  );
};

export default FoodCard;
