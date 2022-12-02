import React from "react";
import {
  FooterContainer,
  FooterWrap,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  WebsiteRights,
  SocialIcons,
  SocialIconLink,
} from "./style.js";
import {
  FacebookOutlined,
  Twitter,
  LinkedIn,
  WhatsApp,
  Instagram,
} from "@mui/icons-material";

const styles = {
  height: "35px",
  width: "35px",
  marginRight: "10px",
};

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>For Patients</FooterLinkTitle>
              <FooterLink to="/about">Find a Practice</FooterLink>
              <FooterLink to="/contact">Find a Doctor</FooterLink>
              <FooterLink to="/profile">Find a Dentist</FooterLink>
              <FooterLink to="/home">Find a Physio</FooterLink>
              <FooterLink to="/login">My Account</FooterLink>
              <FooterLink to="/login">Help Center</FooterLink>
              <FooterLink to="/login">Leave Feedback</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>For Practices</FooterLinkTitle>
              <FooterLink to="/about">General Practice</FooterLink>
              <FooterLink to="/contact">Allied Health</FooterLink>
              <FooterLink to="/profile">Dentists</FooterLink>
              <FooterLink to="/home">Optometrists</FooterLink>
              <FooterLink to="/login">Specialists</FooterLink>
              <FooterLink to="/login">Dashboard Login</FooterLink>
              <FooterLink to="/login">Support Center</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>Dr Rush</FooterLinkTitle>
              <FooterLink to="/about">About Us</FooterLink>
              <FooterLink to="/contact">Contact</FooterLink>
              <FooterLink to="/profile">Careers</FooterLink>
              <FooterLink to="/home">Terms & Conditions</FooterLink>
              <FooterLink to="/login">Privacy Policy</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to="/">
              <img src="./images/logo.jpg" alt="logo" style={styles} />
              SENSEI
            </SocialLogo>
            <WebsiteRights>
              SENSEI &#169; {new Date().getFullYear()} All rights reserved.
            </WebsiteRights>
            <SocialIcons>
              <SocialIconLink href="/" target="_blank" arial-label="Facebook">
                <FacebookOutlined />
              </SocialIconLink>
              <SocialIconLink href="/" target="_blank" arial-label="Twitter">
                <Twitter />
              </SocialIconLink>
              <SocialIconLink href="/" target="_blank" arial-label="LinkedIn">
                <LinkedIn />
              </SocialIconLink>
              <SocialIconLink href="/" target="_blank" arial-label="WhatsApp">
                <WhatsApp />
              </SocialIconLink>
              <SocialIconLink href="/" target="_blank" arial-label="Instagram">
                <Instagram />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
