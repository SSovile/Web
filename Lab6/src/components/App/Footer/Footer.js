import React from "react";
import { Wrapper,Logo, IconsWrapper, Line, Image, Text, Icons } from "./Footer.styled";
import logo from '../../../assets/camera_icon.png'
import Icon, {
    TwitterOutlined,
    InstagramOutlined,
    LinkedinOutlined,
    YoutubeOutlined
  } from "@ant-design/icons";

const Footer = () => {
  return (
    <Wrapper>
      <Logo>
        <Image>
            <img class="Logo" src={logo} alt="Logo" />
        </Image>
        <Text>Camera SHOP</Text>
      </Logo>
      <Line />
      <IconsWrapper>
          <Icons component={YoutubeOutlined} color='#000000'/>
          <Icons component={TwitterOutlined} color='#000000' />
          <Icons component={LinkedinOutlined} color='#000000'/>
          <Icons component={InstagramOutlined} color='#000000'/>
      </IconsWrapper>
      <Line />
      <Text>Copyright © 2006-2021 SHOP INC. All Rights Reserved.</Text>
    </Wrapper>
  );
};

export default Footer;