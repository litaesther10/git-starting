import { useState } from "react";
import MobileMenu from "../navbar/MobileMenu";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function HamburguerBtn() {
  const [openState, setOpen] = useState(false);

  function buttonClick() {
    setOpen(!openState);
  }

  return (
    <div className="md:hidden ">
      <button
        type="button"
        className={classNames(
          openState && "open",
          "z-40 block md:hidden focus:outline-none hamburguer right-4"
        )}
        onClick={buttonClick}
      >
        <span className="hamburguer-top"></span>
        <span className="hamburguer-middle"></span>
        <span className="hamburguer-bottom"></span>
      </button>
      {openState && <MobileMenu />}
    </div>
  );
}
