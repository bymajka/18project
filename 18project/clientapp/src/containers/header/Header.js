import "./header.css";
import payment_systems from "../../assets/svg/payment_systems.svg";
import atc_img from "../../assets/svg/atc_img.svg";

const Header = () => {
  return (
    <div className="header header__padding" id="header">
      <div className="header-content">
        <h1>Always Track & Analyze Your Business Statistics To Succeed.</h1>
        <p>
          A better way to manage your sales, team, clients & marketing — on a
          single platform. Powerful, affordable & easy.
        </p>
        <div className="header-content__input">
          <input type="email" placeholder="Enter your email" id="email" />
          <button className="button">Get started</button>
        </div>

        <div className="header-content-payment__systems">
          <img src={payment_systems} alt="payment_systems_image" />
        </div>
      </div>
      <div className="header-image">
        <img src={atc_img} alt="welcome_image" />
      </div>
    </div>
  );
};

export default Header;
