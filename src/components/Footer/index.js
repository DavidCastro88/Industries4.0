import React from 'react'
import {FooterContainer,FooterWrapp,FooterLinksContainer,FooterLinksWrapper,FooterLinkItems,FooterLinkTitle,FooterLink,SocialMedia,SocialMediaWrap,SocialLogo,WebsiteRights,SocialIcons,SocialIconLink
} from './FooterElements'
import {FaFacebook,FaInstagram,FaTwitter,FaYoutube,FaLinkedin} from 'react-icons/fa'
import {animateScroll as scroll} from 'react-scroll'
const Footer = () => {

    const toggleHome=()=>{
        scroll.scrollToTop();
    }
  return (
    <FooterContainer>
      <FooterWrapp>
        <FooterLinksContainer>
            <FooterLinksWrapper>
                <FooterLinkItems>
                    <FooterLinkTitle>About Us</FooterLinkTitle>
                        <FooterLink to='/'>How it works</FooterLink>
                        <FooterLink to='/'>Testimonials </FooterLink>
                        <FooterLink to='/'>Careers</FooterLink>
                        <FooterLink to='/'>Investors </FooterLink>
                        <FooterLink to='/'>Terms of Service </FooterLink>              
                </FooterLinkItems>
                <FooterLinkItems>
                    <FooterLinkTitle>Contact Us</FooterLinkTitle>
                        <FooterLink to='/'>Contact</FooterLink>
                        <FooterLink to='/'>Support </FooterLink>
                        <FooterLink to='/'>Destinations</FooterLink>
                        <FooterLink to='/'>Sponsorships</FooterLink>         
                </FooterLinkItems>      
            </FooterLinksWrapper>
            <FooterLinksWrapper>
                <FooterLinkItems>
                    <FooterLinkTitle>Videos</FooterLinkTitle>
                        <FooterLink to='/'>Submit Video</FooterLink>
                        <FooterLink to='/'>Ambassadors</FooterLink>
                        <FooterLink to='/'>Agency</FooterLink>
                        <FooterLink to='/'>Influencer</FooterLink>            
                </FooterLinkItems>
                <FooterLinkItems>
                    <FooterLinkTitle>SocialMedia</FooterLinkTitle>
                        <FooterLink to='/'>Instagram</FooterLink>
                        <FooterLink to='/'>Facebook </FooterLink>
                        <FooterLink to='/'>Youtube</FooterLink>
                        <FooterLink to='/'>Twitter</FooterLink>
                        <FooterLink to='/'>Linkedin</FooterLink>              
                </FooterLinkItems>   
            </FooterLinksWrapper>
        </FooterLinksContainer>
        <SocialMedia>
            <SocialMediaWrap>
                <SocialLogo to='/' onClick={toggleHome}>
                    Dcastro88
                </SocialLogo>
                <WebsiteRights>Dcastro88 © {new Date().getFullYear()}All rights reserved.</WebsiteRights>
                <SocialIcons>
                    <SocialIconLink href='/' traget='_blank' aria-label='Facebook'><FaFacebook/></SocialIconLink>
                    <SocialIconLink href='/' traget='_blank' aria-label='Instagram'><FaInstagram/></SocialIconLink>
                    <SocialIconLink href='/' traget='_blank' aria-label='Youtube'><FaYoutube/></SocialIconLink>
                    <SocialIconLink href='/' traget='_blank' aria-label='Twitter'><FaTwitter/></SocialIconLink>
                    <SocialIconLink href='/' traget='_blank' aria-label='Linkedin'><FaLinkedin/></SocialIconLink>
                </SocialIcons>
            </SocialMediaWrap>
        </SocialMedia>
      </FooterWrapp>
    </FooterContainer>
  )
}

export default Footer
