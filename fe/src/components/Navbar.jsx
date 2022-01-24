const Navbar = () => {
  return (
    <div className="navbar">
      <span className="logo">Lama App</span>
      <ul className="list">
        <li className="listItem">
          <img src="https://images.pexels.com/photos/5100872/pexels-photo-5100872.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="by Vlad Fonsark from Pexels" className="avatar" />
        </li>
        <li className="listItem">John Doe</li>
        <li className="listItem">Logout</li>
      </ul>
    </div>
  );
};

export default Navbar;