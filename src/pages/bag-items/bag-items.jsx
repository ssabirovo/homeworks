import SideBar from "../../shared/sidebar/sidebar";
import "./bag-items.scss";

const BagItems = ({ onPageChange, onLogOut }) => {
  return (
    <div>
      <h1>BagItems Page</h1>
      <SideBar
        from='Bag Items'
        onPageChange={onPageChange}
        onLogOut={onLogOut}
      />
    </div>
  );
};

export default BagItems;
