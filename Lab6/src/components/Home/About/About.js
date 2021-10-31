import React from "react";
import './About.css'
import CameraImage from '../../../assets/camera_sony.jpg'
import CameraSonyImage from '../../../assets/camera.png'
import CameraCanonImage from '../../../assets/camera_canon.jpg'

const About = () => (
<div className="containerAbout">
    <div className="liItem">
      <div className="photo__class">
        <img className="item__photo" src={CameraImage} alt="camera"/>
        </div>
        <div className="item__text">
            <h3 className="item__name">Name: Sony</h3>
            <h5 className="item__location">Zoom: 3x</h5>
            <h5 className="item__amoutOfLivestock">Amout Of memory: 2000 MB</h5>
        </div>
      </div>
      <div className="liItem">
      <div className="photo__class">
        <img className="item__photo" src={CameraSonyImage} alt="camera"/>
        </div>
        <div className="item__text">
        <h3 className="item__name">Name: Nikon</h3>
            <h5 className="item__location">Zoom: 30x</h5>
            <h5 className="item__amoutOfLivestock">Amout Of memory: 20000 MB</h5>
        </div>
      </div>
      <div className="liItem">
      <div className="photo__class">
        <img className="item__photo3" src={CameraCanonImage} alt="camera"/>
      </div>
        <div className="item__text">
        <h3 className="item__name">Name: Canon</h3>
            <h5 className="item__location">Zoom: 10x</h5>
            <h5 className="item__amoutOfLivestock">Amout Of memory: 6400 MB</h5>
        </div>
      </div>
</div>
);

export default About;