import React from "react"
import { StyledWapper, StyledServiceHeader, StyledServiceCardContainer } from "./Styles"
import Card from "../Card"

function Services({ services }) {
  return (
    <StyledWapper>
      <StyledServiceHeader>Our Services</StyledServiceHeader>
      <StyledServiceCardContainer>
        {services.map(({ title, description, icon }, idx) => (
          <Card key={`Card-${title}-${idx}`} header={title} description={description} icon={icon} />
        ))}
      </StyledServiceCardContainer>
    </StyledWapper>
  )
}

Services.defaultProps = {
  services: [
    {
      title: "Artifical Intelligence",
      icon: "fas fa-head-side-virus",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, nam unde! Molestiae iusto ipsum porro accusamus libero, eveniet quam ab, atque omnis, optio repudiandae modi rem. Quas ipsa a consequuntur!",
      link: "/",
      branches: null,
    },
    {
      title: "IoT Solution Development",

      icon: "fas fa-network-wired",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, nam unde! Molestiae iusto ipsum porro accusamus libero, eveniet quam ab, atque omnis, optio repudiandae modi rem. Quas ipsa a consequuntur!",

      link: "/",
      branches: null,
    },
    {
      title: "Enterprise Development",
      icon: "fas fa-handshake",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, nam unde! Molestiae iusto ipsum porro accusamus libero, eveniet quam ab, atque omnis, optio repudiandae modi rem. Quas ipsa a consequuntur!",
      link: "/",
      branches: null,
    },
    {
      title: "Cloud Services",

      icon: "fas fa-cloud",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, nam unde! Molestiae iusto ipsum porro accusamus libero, eveniet quam ab, atque omnis, optio repudiandae modi rem. Quas ipsa a consequuntur!",

      link: "/",
      branches: null,
    },
    {
      title: "Mobile Application Development",
      icon: "fas fa-mobile",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, nam unde! Molestiae iusto ipsum porro accusamus libero, eveniet quam ab, atque omnis, optio repudiandae modi rem. Quas ipsa a consequuntur!",
      link: "/",
      branches: null,
    },
    {
      title: "Custom Web Application Development",

      icon: "fas fa-laptop-code",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, nam unde! Molestiae iusto ipsum porro accusamus libero, eveniet quam ab, atque omnis, optio repudiandae modi rem. Quas ipsa a consequuntur!",

      link: "/",
      branches: null,
    },
    {
      title: "Manage Services",
      icon: "fas fa-users-cog",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, nam unde! Molestiae iusto ipsum porro accusamus libero, eveniet quam ab, atque omnis, optio repudiandae modi rem. Quas ipsa a consequuntur!",
      link: "/",
      branches: null,
    },
    {
      title: "Staff Augmentation",

      icon: "fas fa-users",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, nam unde! Molestiae iusto ipsum porro accusamus libero, eveniet quam ab, atque omnis, optio repudiandae modi rem. Quas ipsa a consequuntur!",

      link: "/",
      branches: null,
    },
    {
      title: "Embedded Software Development Services",
      icon: "fas fa-microchip",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, nam unde! Molestiae iusto ipsum porro accusamus libero, eveniet quam ab, atque omnis, optio repudiandae modi rem. Quas ipsa a consequuntur!",
      link: "/",
      branches: null,
    },
  ],
}

export default Services
