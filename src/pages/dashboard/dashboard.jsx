import "./dashboard.scss";
import SideBar from "../../shared/sidebar/sidebar";
import Bag from "../../shared/bag/bag";
import Search from "./components/search/search";
import Products from "./components/products/products";

const Dashboard = ({ onLogOut, onPageChange, products }) => {
  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <SideBar
        from='Dashboard'
        onPageChange={onPageChange}
        onLogOut={onLogOut}
      />
      <div style={{ display: "flex", flexDirection: "column" }}>
        <Search />
        <Products products={products} />
      </div>
      <Bag />
    </div>
  );
};

export default Dashboard;
