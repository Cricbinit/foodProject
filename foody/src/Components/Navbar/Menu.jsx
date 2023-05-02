import React from "react";

const Menu = () => {
  return (
    <div id="menu">
      <ul>
        <input
          type="text"
          placeholder="Enter your location..."
          id="input"
        />
        <li class="list">
          <a href="#">Search</a>
        </li>
        <li class="list">
          <a href="#">Offer</a>
        </li>
        <li class="list">
          <a href="#">Help</a>
        </li>
        <li class="list">
          <a href="#">Profile</a>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
