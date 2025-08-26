import useResetShipments from "../hooks/useResetShipments";
import AccountDropdown from "./AccountDropdown";

const Navbar = () => {
  const { reset } = useResetShipments();

  return (
    <nav className="navbar">
      <h1 className="navbar-title">Fast Shipment</h1>
      <button className="navbar-button" onClick={() => reset()}>
        Reset All Shipments
      </button>
      <AccountDropdown />
    </nav>
  );
};

export default Navbar;
