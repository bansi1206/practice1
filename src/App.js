import { useCallback, useMemo, useState, useEffect } from "react";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Client from "./components/Client";
import Community from "./components/Community";
import Spending from "./components/Spending";
import Business from "./components/Business";
import Design from "./components/Design";
import Customer from "./components/Customer";
import Caring from "./components/Caring";
import Demo from "./components/Demo";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const [active, setActive] = useState(false);

  const isActive = useMemo(() => {
    return active ? "active" : "";
  }, [active]);

  const onClick = useCallback(() => {
    setActive(true);
    console.log(active);
    console.log(isActive);
  }, [active]);

  useEffect(() => {
    const handleOutsideClick = (e) => {
      const navMenu = document.querySelector(".nav-menu");

      if (
        navMenu &&
        !navMenu.contains(e.target) &&
        e.target.className !== "menu-toggle"
      ) {
        setActive(false);
      }
    };

    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [active]);
  return (
    <div className="wrapper">
      <NavBar onClick={onClick} active={isActive} />
      <Hero />
      <Client />
      <Community />
      <Spending />
      <Business />
      <Design />
      <Customer />
      <Caring />
      <Demo />
      <Footer />
    </div>
  );
}

export default App;
