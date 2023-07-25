import { useRef, useState, useLayoutEffect, useEffect } from 'react';

import Hero from '../../components/Sections/Hero/Hero';
import CopySection from '../../components/Sections/CopySection/CopySection';
import Mobile from '../../components/Sections/Mobile/Mobile';
import SingleImage from '../../components/Sections/SingleImage/SingleImage';
import ResponsiveSlider from '../../components/Sections/ResponsiveSlider/ResponsiveSlider';
import NextProject from '../../components/Sections/NextProject/NextProject';
import IagHero from '../../components/Sections/IagHero/IagHero';
import Video from '../../components/Sections/Video/Video';
import useImagesPreloader from '../../hooks/UseImagesPreloader';
import Spinner from '../../components/layout/Spinner/Spinner';

import mobile01 from '../../assets/projects/iag/mobile-01.jpg';
import mobile02 from '../../assets/projects/iag/mobile-02.jpg';
import mobile03 from '../../assets/projects/iag/mobile-03.jpg';
import sliderMobileImage from '../../assets/projects/iag/iag-claims-ami-mobile.png';
import sliderTabletImage from '../../assets/projects/iag/iag-claims-ami-tablet.png';
import sliderDesktopImage from '../../assets/projects/iag/iag-claims-ami-desktop.png';
import screenhotImageDesktop from '../../assets/projects/iag/screenshot-disaster_hub-state-1440.jpg';
import screenhotImageTablet from '../../assets/projects/iag/screenshot-disaster_hub-state-768.jpg';
import screenhotImageMobile from '../../assets/projects/iag/screenshot-disaster_hub-state-360.jpg';
import sliderImageEmail01 from '../../assets/projects/iag/email-state-light.jpg';
import sliderImageEmail02 from '../../assets/projects/iag/email-state-dark.jpg';

import DarkMode from '../../components/Sections/DarkMode/DarkMode';
import BtnSection from '../../components/Sections/BtnSection/BtnSection';

const sliderImagesEmail = [sliderImageEmail01, sliderImageEmail02];
const responsiveSliderImages = [
  sliderMobileImage,
  sliderTabletImage,
  sliderDesktopImage,
];
const mySingleImage = {
  name: 'Disaster hub Image',
  mobileSrc: screenhotImageMobile,
  tabletSrc: screenhotImageTablet,
  desktopSrc: screenhotImageDesktop,
};
const mobileShowcase = [mobile01, mobile02, mobile03];

const IagPageImages = [
  sliderImageEmail01,
  sliderImageEmail02,
  screenhotImageMobile,
  screenhotImageTablet,
  screenhotImageDesktop,
  mobile01,
  mobile02,
  mobile03,
  sliderMobileImage,
  sliderTabletImage,
  sliderDesktopImage
];

const IagPage = () => {
  const imgsLoaded = useImagesPreloader(IagPageImages);

  return imgsLoaded ? (
    <>
      <Hero
        url="https://www.iag.co.nz"
        title="Making the world a safer place"
        copy={'Full-time front-end engineer role'}
        heroComponent={<IagHero />}
      />
      <CopySection
        paddingTop={true}
        title="Our team built..."
        body="Motor and property lodgement applications using the latest technologies."
        backgroundColor="#f2f2f2"
      />
      <ResponsiveSlider images={responsiveSliderImages} />
      {/* <IagDeveloper />   */}
      <CopySection
        paddingTop={true}
        title="Disaster Claims Hub"
        body="Helpful information on how to prepare for and get back on your feet after a natural disaster."
        backgroundColor="#fff"
      />
      <SingleImage image={mySingleImage} backgroundColor="#fff" />
      <CopySection
        paddingTop={true}
        title="Built for all brands"
        body="UI designed and developed for all New Zealand brands using the Oracle Service Cloud including IAG, State and AMI."
        backgroundColor="#f2f2f2"
      />
      <Mobile images={mobileShowcase} backgroundColor="#f2f2f2" />
      <CopySection
        paddingTop={true}
        title="What are the odds?"
        body="A promotional microsite built for State Insurance and Flybuys"
        backgroundColor="#fff"
      />
      <Video
        src="https://player.vimeo.com/video/355045208?autoplay=1&loop=1&autopause=0"
        backgroundColor="#fff"
      />

      <BtnSection
        btn01Url="https://charlesd.co.nz/wato/"
        btn02Url="/projects/wato"
        btn01Label="Launch Project"
        btn02Label="More Info"
        backgroundColor="#fff"
      />
      <CopySection
        paddingTop={true}
        title="Responsive emails"
        body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sem urna, sagittis et justo et, sodales posuere eros."
        backgroundColor="#f2f2f2"
      />
      <DarkMode images={sliderImagesEmail} backgroundColor="#f2f2f2" />
      <NextProject
        backgroundColor="#fff"
        copy="Unichem is network of more than 250 pharmacies throughout New&nbsp;Zealand."
        header="Want to see another project?"
        btnUrl="/projects/unichem"
        btnLabel="Unichem casestudy"
      />
    </>
  ) : (
    <Spinner />
  );
};

export default IagPage;
