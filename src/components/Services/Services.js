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
      icon: "fas fa-cogs",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, nam unde! Molestiae iusto ipsum porro accusamus libero, eveniet quam ab, atque omnis, optio repudiandae modi rem. Quas ipsa a consequuntur!",
      link: "/",
      branches: null,
    },
    {
      title: "IoT Solution Development",

      icon: "fas fa-cogs",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, nam unde! Molestiae iusto ipsum porro accusamus libero, eveniet quam ab, atque omnis, optio repudiandae modi rem. Quas ipsa a consequuntur!",

      link: "/",
      branches: null,
    },
    {
      title: "Artifical Intelligence",
      icon: "fas fa-cogs",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, nam unde! Molestiae iusto ipsum porro accusamus libero, eveniet quam ab, atque omnis, optio repudiandae modi rem. Quas ipsa a consequuntur!",
      link: "/",
      branches: null,
    },
    {
      title: "IoT Solution Development",

      icon: "fas fa-cogs",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, nam unde! Molestiae iusto ipsum porro accusamus libero, eveniet quam ab, atque omnis, optio repudiandae modi rem. Quas ipsa a consequuntur!",

      link: "/",
      branches: null,
    },
    {
      title: "Artifical Intelligence",
      icon: "fas fa-cogs",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, nam unde! Molestiae iusto ipsum porro accusamus libero, eveniet quam ab, atque omnis, optio repudiandae modi rem. Quas ipsa a consequuntur!",
      link: "/",
      branches: null,
    },
    {
      title: "IoT Solution Development",

      icon: "fas fa-cogs",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, nam unde! Molestiae iusto ipsum porro accusamus libero, eveniet quam ab, atque omnis, optio repudiandae modi rem. Quas ipsa a consequuntur!",

      link: "/",
      branches: null,
    },
    {
      title: "Artifical Intelligence",
      icon: "fas fa-cogs",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, nam unde! Molestiae iusto ipsum porro accusamus libero, eveniet quam ab, atque omnis, optio repudiandae modi rem. Quas ipsa a consequuntur!",
      link: "/",
      branches: null,
    },
    {
      title: "IoT Solution Development",

      icon: "fas fa-cogs",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, nam unde! Molestiae iusto ipsum porro accusamus libero, eveniet quam ab, atque omnis, optio repudiandae modi rem. Quas ipsa a consequuntur!",

      link: "/",
      branches: null,
    },
    {
      title: "Artifical Intelligence",
      icon: "fas fa-cogs",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, nam unde! Molestiae iusto ipsum porro accusamus libero, eveniet quam ab, atque omnis, optio repudiandae modi rem. Quas ipsa a consequuntur!",
      link: "/",
      branches: null,
    },
  ],
}

export default Services
