import React, { Component } from "react";

class Footer extends Component {
  year = () => {
    let d = new Date();
    return d.getFullYear();
  };

  render() {
    return (
      <footer className="clearfix mt-4">
        <p>
          &copy; {this.year()}
          <a
            href="https://www.fiverr.com/toqeerhaider597"
            target="_blank"
          >
            Toqeer Haider
          </a>
          , Just for Fun!
        </p>
      </footer>
    );
  }
}

export default Footer;
