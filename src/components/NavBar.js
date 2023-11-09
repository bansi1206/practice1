export default function NavBar(props) {
  return (
    <div className="header-top">
      <div className="container">
        <div className="brand-container">
          <img src="/images/logo.svg" alt="brand-logo" />
          <span>Nexcent</span>
        </div>
        <span className="menu-toggle" onClick={props.onClick}>
          Menu
        </span>
        <nav className={`nav-menu ${props.active}`}>
          <ul className="menu">
            <li className="menu-item">
              <a className="menu-link">Home</a>
            </li>
            <li className="menu-item">
              <a className="menu-link">Service</a>
            </li>
            <li className="menu-item">
              <a className="menu-link">Feature</a>
            </li>
            <li className="menu-item">
              <a className="menu-link">Product</a>
            </li>
            <li className="menu-item">
              <a className="menu-link">Testimonial</a>
            </li>
            <li className="menu-item">
              <a className="menu-link">FAQ</a>
            </li>
          </ul>
          <div className="group-button">
            <button className="login-button">Login</button>
            <button className="register-button">Sign up</button>
          </div>
        </nav>
      </div>
    </div>
  );
}
