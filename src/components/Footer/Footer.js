import React from "react";
import { FooterContainer, FooterLink } from "./FooterStyles";

function Footer({ variant, links }) {
  return (
    <FooterContainer variant={variant}>
      <div>
        {links.map((link, index) =>
          // Insert a div at the 4th index as a separator
          index !== 4 ? (
            <FooterLink>{link}</FooterLink>
          ) : (
            <>
              <div />
              <FooterLink>{link}</FooterLink>
            </>
          )
        )}
      </div>
    </FooterContainer>
  );
}

export default Footer;
