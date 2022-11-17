import React from 'react'
import {ServicesContainer,ServicesH1,ServicesWrapper,ServicesCard,ServicesIcon,ServicesH2,ServicesP} from './ServicesElements'
import Icon1 from '../../images/reality.webp'
import Icon2 from '../../images/bigdata.webp'
import Icon3 from '../../images/ds.jpeg.crdownload'
const Services = () => {
  return (
    <ServicesContainer id='services'>
      <ServicesH1>Other widely used terms</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
            <ServicesIcon src={Icon1}/>
            <ServicesH2>Augmented Reality </ServicesH2>
            <ServicesP></ServicesP>
        </ServicesCard>
        <ServicesCard>
            <ServicesIcon src={Icon2}/>
            <ServicesH2>Big Data</ServicesH2>
            <ServicesP></ServicesP>
        </ServicesCard>
        <ServicesCard>
            <ServicesIcon src={Icon3}/>
            <ServicesH2>Data Science</ServicesH2>
            <ServicesP></ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  )
}

export default Services
