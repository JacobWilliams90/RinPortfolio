import React from "react";
import { Tab, Menu } from "semantic-ui-react";
import { NavLink } from "react-router-dom";

const Nav = (props) => <NavLink exact {...props} activeClassName="active" />;

// const labels = (icon, text) => (
//   <span>
//     {icon}
//     {text}
//   </span>
// );

// const welcomeLabel = labels("home", "Home Page");
// const galleryLabel = labels("envira gallery", "Gallery");
// const contactLabel = labels("content", "Contact");
// const ratesLabel = labels("money bill alternate", "Rates");

const panes = [
  {
    menuItem: <Menu.Item key="home" content="Home Page" as={Nav} to={`/`} />,
  },
  {
    menuItem: (
      <Menu.Item key="gallery" content="Gallery" as={Nav} to={`/gallery`} />
    ),
  },
  {
    menuItem: <Menu.Item key="rates" content="Rates" as={Nav} to={`/rates`} />,
  },
  {
    menuItem: (
      <Menu.Item key="contact" content="Contact Us" as={Nav} to={`/contact`} />
    ),
  },
];

export default function TabNav() {
  return <Tab panes={panes} />;
}
