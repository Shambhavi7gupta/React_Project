import React, { useState } from "react";
import "./index.css";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [show, setShow] = useState(false);

  return (
    <main className={show ? "space-toggle" : null}>
      <aside className={`sidebar ${show ? "show" : "hide"}`}>
        <nav className="nav">
          {/* <header className={`header ${show ? "space-toggle" : null}`}></header> */}

          <div className="header-toggle" onClick={() => setShow(!show)}>
            {show ? (
              <div className="cross-button">
                <div className="outer">
                  <i className="fas fa-times fa-solid fa-xmark "></i>
                </div>
              </div>
            ) : (
              <div className="menu-icon">
                <i className="fas fa-bars"></i>
              </div>
            )}
          </div>

          {/* <Link to="/" className="nav-logo">
            <div onClick={() => setShow(!show)}>
              <i className={`fas fa-bars nav-logo-icon`}></i>
            </div>
          </Link> */}

          <Link to="/" className="nav-link  active">
            <i className={`fas fa-home-alt nav-link-icon`}></i>
            <span className="nav-link-name">Homepage</span>
          </Link>

          <Link to="/dashboard" className="nav-link ">
            <i className="fas fa-tachometer-alt nav-link-icon"></i>
            <span className="nav-link-name">Dashboard</span>
          </Link>

          <Link to="/gallery" className="nav-link">
            <i className="fas fa-image nav-link-icon"></i>
            <span className="nav-link-name">Gallery</span>
          </Link>
          <Link to="/gallery" className="nav-link">
            <i className="fas fa-dollar-sign nav-link-icon"></i>
            <span className="nav-link-name">Transaction</span>
          </Link>
        </nav>
      </aside>
    </main>
  );
};

export default Sidebar;
