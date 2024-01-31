import React from 'react';
import HomeBanner from '../HomeBanner/HomeBanner';
import TopMenu from '../TopMenu/TopMenu';
import Story from '../story/Story';
import SpecialDish from '../SpecialDish/SpecialDish';
import MainMenu from '../MainMenu/MainMenu';
import OnlineReservetion from '../OnlineReservetion/OnlineReservetion';
import OurStrength from '../OurStrength/OurStrength';
import Footer from '../../Shared/Footer/Footer';



const Home = () => {
    return (
        <div>
            <HomeBanner></HomeBanner>
            <TopMenu></TopMenu>
            <Story></Story>
            <SpecialDish></SpecialDish>
            <MainMenu></MainMenu>
            <OnlineReservetion></OnlineReservetion>
            <OurStrength></OurStrength>
            <Footer></Footer>
           
            
        </div>
    );
};

export default Home;