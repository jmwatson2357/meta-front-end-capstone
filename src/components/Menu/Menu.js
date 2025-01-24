import recipes from "../../lib/recipes";
import Swal from "sweetalert2";
import "./Menu.css";
import { MenuCard } from "./MenuCard";

const Menu = () => {
  const handleOrder = (id) => {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-danger",
      },
      buttonsStyling: false,
    });

    swalWithBootstrapButtons
      .fire({
        title: "Do you want to confirm order?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: false,
        confirmButtonText: "Yes, order it!",
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          swalWithBootstrapButtons.fire(
            "Orderd!",
            "Your order has been confirmed.",
            "success"
          );
        }
      });
  };
  return (
    <div className="menu-container">
      <div className="menu-header">
        <h2 className="display">This weeks specials!</h2>
        <button className="lead">Online Menu</button>
      </div>
      <div className="cardGroup">
        {recipes.map((recipe) => (
          <MenuCard
            key={recipe.id}
            id={recipe.id}
            image={recipe.image}
            title={recipe.title}
            price={recipe.price}
            desc={recipe.description}
            handleOrder={handleOrder}
          />
        ))}
      </div>
    </div>
  );
};

export { Menu };
