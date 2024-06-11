import NavItem from "./NavItem";

const Collums = () => {
  return (
    <div>
      <div className="hidden sm:flex items-center max-w-[2520px] ml-auto xl:px-20 md:px-10 px-4">
        <div className="flex items-center mx-auto space-x-4">
          <NavItem>Flights</NavItem>
          <NavItem>Reviews</NavItem>
          <NavItem>About us</NavItem>
          <NavItem>Login</NavItem>
        </div>
      </div>
    </div>
  );
};

export default Collums;
