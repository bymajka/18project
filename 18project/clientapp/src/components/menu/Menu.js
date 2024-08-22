import handleScroll from "../../handleScroll";

const Menu = () => {
  return (
    <>
      <p>
        <a href="#about-us" onClick={(e) => handleScroll(e, "about-us")}>
          About Us
        </a>
      </p>
      <p>
        <a href="#hiw" onClick={(e) => handleScroll(e, "hiw")}>
          How It Works
        </a>
      </p>
      <p>
        <a href="#pricing" onClick={(e) => handleScroll(e, "pricing")}>
          Pricing
        </a>
      </p>
      <p>
        <a href="#faqs" onClick={(e) => handleScroll(e, "faqs")}>
          FAQs
        </a>
      </p>
    </>
  );
};

export default Menu;
