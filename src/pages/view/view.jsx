import SideBar from "../../shared/sidebar/sidebar";
import "./view.scss";

const View = ({ onPageChange, onLogOut }) => {
  return (
    <div>
      <h1>View Page</h1>
      <SideBar
        from='Bag Items'
        onPageChange={onPageChange}
        onLogOut={onLogOut}
      />
    </div>
  );
};

export default View;
