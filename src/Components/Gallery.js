import React from "react";
import pictures from "../Image/images.js";
import styled from "styled-components";

const Img = styled.img`
  max-height: 98%;
  max-width: 98%;
  border-style: solid;
`;

const A = styled.a`
  max-height: 45%;
  max-width: 45%;
  margin: 4px 0 4px 0;
`;

export default function Gallery() {
  return (
    <section>
      <header>
        <h1>Some of my work seen below!</h1>
      </header>
      <section className="grid-view">
        {pictures.map((link, id) => (
          <A href={link}>
            <Img key={id} src={link} alt="Failed" />
          </A>
        ))}
      </section>
    </section>
  );
}
