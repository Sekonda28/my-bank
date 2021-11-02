import Logo from "./Logo";
import User from "./User";

const Header = () => {
  return (
    <header>
      <div className="container header-items">
        <Logo />
        <User />
      </div>
    </header>
  );
};

export default Header;
