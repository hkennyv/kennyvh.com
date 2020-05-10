import React, { Component } from "react";

class Me extends Component {
  renderBio = () => {
    return (
      <div className="me">
        <p>
          I'm a <strong>DevOps Engineer</strong> at{"  "}
          <a href="http://www.rejouleenergy.com/">
            <strong>ReJoule, Inc.</strong>
          </a>{" "}
          We are an early-stage startup with an amazing team whose goal is to
          maximize the value of every battery through advanced battery
          diagnostics.
        </p>
        <p>
          I'm interested in solving high societal/environmental impact problems
          through technology and engineering. I love learning and experimenting
          with technology across the entire stack (from making schematics and
          laying out PCBs to writing drivers to software interfaces and APIs).
        </p>
        <h2>Interests</h2>
        <p>
          Some of my interests that keep me busy throughout the day (and night).
        </p>
        <ul className="interests">
          <li>🚲 bicycling</li>
          <li>🐱 cats</li>
          <li>💻 computers & coding</li>
          <li>🎮 gaming</li>
          <li>🏍 motorcycles (SR400)</li>
          <li>🏋️‍♀️ powerlifting</li>
          <li>🛹 skateboarding</li>
          <li>🧳 traveling</li>
        </ul>
        <h2>Tech</h2>
        <h3>Development Environment</h3>
        <p>
          I've loved tinkering with computers and electronics since I was a kid
          (dial-up days) so I love talking hardware. At home, I have one desktop
          and one laptop I normally use day to day (and a sh!t ton of raspberry
          pis and dev boards laying around):
        </p>
        <h4>🖥 Desktop: kmac (Hackintosh Desktop Windows 10/MacOS Mojave)</h4>
        <ul>
          <li>Ryzen 5 2600X</li>
          <li>AMD Radeon RX580</li>
          <li>16GB RAM</li>
          <li>500GB M.2. SSD (OS)</li>
          <li>1TB HDD</li>
        </ul>
        <h4>💻 Laptop: kmbp (MacOS Mojave)</h4>
        <ul>
          <li>Mid-2012 13" Macbook Pro Core i5</li>
          <li>AMD Radeon RX580</li>
          <li>16GB RAM</li>
          <li>500GB SSD (OS)</li>
          <li>500GB HDD (in place of superdrive)</li>
        </ul>
        <h4>IDE</h4>
        <ul>
          <li>
            <strong>Preferred Editor:</strong> vim or VSCode w/ vim keybindings
            (see <a href="https://github.com/hkennyv/dotfiles">dotfiles</a>)
          </li>
          <li><strong>Preferred Colorscheme:</strong> Gruvbox (dark mode)</li>
        </ul>
      </div>
    );
  };

  render() {
    return (
      <div className="me">
        <h1>About Me</h1>
        {this.renderBio()}
      </div>
    );
  }
}

export default Me;
