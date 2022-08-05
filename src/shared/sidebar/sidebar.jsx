const SideBar = ({ from, onLogOut, onPageChange }) => {
  return (
    <div>
      <h1>SideBar Component calling from {from}</h1>
      <ul>
        <li>
          <button onClick={() => onPageChange("dashboard")}>Dashboard</button>
        </li>
        <li>
          <button onClick={() => onPageChange("bag-items")}>Bag Items</button>
        </li>
      </ul>
      <button onClick={onLogOut}>Log Out</button>
    </div>
  );
};

export default SideBar;
