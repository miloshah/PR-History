function MenuItem({ key, menu, isActive, onClick }) {
    return (
      <li className={isActive ? "active" : ""} onClick={onClick}>
        <span className="badge">{menu.id} </span>
        {menu.title}
      </li>
    );
  }
  
  export default MenuItem;
  