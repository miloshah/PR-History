import MenuItem from './MenuItem';

const menuItems = [
  {id:1, title:'Menu1'},
  {id:2, title:'Menu2'},
  {id:3, title:'Menu3'},
  {id:4, title:'Menu4'},
  {id:5, title:'Menu5'},
]

function LeftPane({activeMenu, onMenuClick}){
  return(
    <div className="left-pane">
      <h2>Menus</h2>
      <ul>
        {menuItems.map(menu => (
          <MenuItem
            key={menu.id}
            menu={menu}
            isActive={menu.id === activeMenu}
            onClick={() => onMenuClick(menu.id)}
          />
        ))}
      </ul>
    </div>
  );
}

export default LeftPane;
