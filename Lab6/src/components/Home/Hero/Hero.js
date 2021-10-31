import React from "react";
import { HeroContainer, Image, Text} from './Hero.styles';
import camera__hero from '../../../assets/camera__hero.jpg'


const Hero = () => {
  return (
    <HeroContainer>
      <Image>
        <img src={camera__hero} alt="Logo" />
      </Image>
      <Text>
        A video camera is a camera used for electronic motion picture acquisition 
        (as opposed to a movie camera, which records images on film), initially developed for the 
        television industry but now common in other applications as well.
        Video cameras are used primarily in two modes. The first, characteristic of much early 
        broadcasting, is live television, where the camera feeds real time images directly to a screen 
        for immediate observation. A few cameras still serve live television production, but most live 
        connections are for security, military/tactical, and industrial operations where surreptitious 
        or remote viewing is required. In the second mode the images are recorded to a storage device 
        for archiving or further processing; for many years, videotape was the primary format used for 
        this purpose, but was gradually supplanted by optical disc, hard disk, and then flash memory. 
        Recorded video is used in television production, and more often surveillance and monitoring 
        tasks in which unattended recording of a situation is required for later analysis.
      </Text>
    </HeroContainer>
  );
};

export default Hero;