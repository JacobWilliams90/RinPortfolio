import React from "react";
import { Tab, Menu, Icon } from "semantic-ui-react";
import { NavLink } from "react-router-dom";

const Nav = (props) => <NavLink exact {...props} activeClassName="active" />;

const lables = (icon, text) => (
  <span>
    <Icon name={icon} />
    {text}
  </span>
);

const welcomeLabel = lables("home", "Home Page");
const galleryLabel = lables("gallery", "Gallery");
const contactLabel = lables("contact", "Contact");
const ratesLabel = lables("rates", "Rates");

const panes = [
  {
    menuItem: <Menu.Item key="home" as={Nav} to={`/`} content={welcomeLabel} />,
  },
  {
    menuItem: (
      <Menu.Item
        key="gallery"
        as={Nav}
        to={`/gallery`}
        content={galleryLabel}
      />
    ),
  },
  {
    menuItem: (
      <Menu.Item
        key="rates"
        as={Nav}
        to={`/rates`}
        content={ratesLabel}
      />
    ),
  },
  {
    menuItem: (
      <Menu.Item
        key="contact"
        as={Nav}
        to={`/contact`}
        content={contactLabel}
      />
    ),
  },
];

export default function TabNav() {
  return <Tab panes={panes} renderActiveOnly={false} />;
}
