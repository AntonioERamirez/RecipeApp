import React from "react";
import {
    Box,
    Container,
    Row,
    Column,
    FooterLink,
    Heading,
} from "./FooterStyles";

const Footer = () => {
    return (
        <Box>
            <h1 style={{ color: "green",
                textAlign: "center",
                marginTop: "-50px" }}>
                Getting stuffed: A recipe generator for what ya got.
            </h1>
            <Container>
                <Row>
                    <Column>
                        <Heading>About Us</Heading>
                        A pog lil project where we are showing you what you can make with the ingredients you have in your fridge. This was motivated by the fact that we are too lazy to grocery shop on a regular basis so this is our way of enabling ourselves to shop less.
                    </Column>
                    <Column>
                        <Heading>Contact Us</Heading>
                        <FooterLink href="#">wesleybernard15@gmail.com</FooterLink>
                        <FooterLink href="#">Lucas@email.com</FooterLink>
                        <FooterLink href="#">Antonio@email.com</FooterLink>
                    </Column>
                    <Column>
                        <Heading>Social Media</Heading>
                        <FooterLink href="#">
                            <i className="fab fa-facebook-f">
				<span style={{ marginLeft: "10px" }}>
				Facebook
				</span>
                            </i>
                        </FooterLink>
                        <FooterLink href="#">
                            <i className="fab fa-instagram">
				<span style={{ marginLeft: "10px" }}>
				Instagram
				</span>
                            </i>
                        </FooterLink>
                        <FooterLink href="#">
                            <i className="fab fa-twitter">
				<span style={{ marginLeft: "10px" }}>
				Twitter
				</span>
                            </i>
                        </FooterLink>
                        <FooterLink href="https://github.com/WesleyBernard" target="_blank">
                            <i className="fab fa-youtube">
				<span style={{ marginLeft: "10px" }}>
				Github
				</span>
                            </i>
                        </FooterLink>
                    </Column>
                </Row>
            </Container>
        </Box>
    );
};
export default Footer;
