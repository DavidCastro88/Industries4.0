import React,{useState} from 'react'
import Video from '../../videos/video.mp4'
import {HeroContainer,HeroBg,VideoBg,HeroContent,HeroH1,HeroP,HeroBtnWrapper,ArrowForward,ArrowRight} from './HeroElements'
import {Button} from '../ButtonElements';

import imagen2 from '../../images/img5.png';
const HeroSection = () => {

    const[hover,setHover]=useState(false);
    const onHover = () =>{
        setHover(!hover)
    }

  return (
    <HeroContainer id='home'>
        <HeroBg>
            <VideoBg autoPlay loop muted src={Video} type='video.mp4'/>
        </HeroBg>
        <HeroContent>
            <HeroH1>Industries 4.0</HeroH1>
            <HeroP>
                Is based on nine technological pillars. These innovations connect the physical and digital worlds and enable intelligent and autonomous systems. Businesses and supply chains already use some of these advanced technologies, but the full potential of Industry 4.0 comes to life when used together.
            </HeroP>
            <br></br>
            <div>
                <img src={imagen2} width="500px" right="100px" alt=""/>
            </div>

                
                <HeroBtnWrapper>
                    <Button to='machineLearning' onMouseEnter={onHover} onMouseLeave={onHover}
                    primary='true'
                    dark='true' smooth={true} duration={500} spy={true} exact='true' offset={-80}>
                        Geet started {hover ? <ArrowForward/> : <ArrowRight/>}
                    </Button>
                </HeroBtnWrapper>
        </HeroContent>
    </HeroContainer>
  )
}

export default HeroSection