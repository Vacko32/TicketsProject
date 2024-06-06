import BurgerMenu from "./BurgerMenu";
import Collums from "./Collums";
import Container from "./Container";
import Logo from "./Logo";

const Navbar = () => {
  return (
    <div>
      <div className="sm:block py-3 border-slate-700 border-b-[1px] bg-sushidarkblue">
        <Container>
          <div className="flex flex-row justify-center items-center text-white">
            <div className="sm:mr-auto ml-3 sm:relative">
              <Logo />
            </div>
            <Collums />
            <div className="sm:hidden ml-auto">
              <BurgerMenu />
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Navbar;
