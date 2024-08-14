import '../styles/Home.css'

import SimpleImageSlider from "react-simple-image-slider";

//components
import TopSavings from '../components/TopSaving';
import Category from '../components/Category';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Notify   from '../components/Notify';

//interfaces

const Home = ()=>{
    const sliderImages = [
        {
           url: "https://images.ctfassets.net/7rldri896b2a/5RGZbjV3t2Gbv6LNdsWzIT/dcdd69099d2a788f0296e13afdd47617/hero2-m.png",
        },
        {
           url: "https://images.ctfassets.net/7rldri896b2a/4edFjPq3fcoV9C3wprWeG9/bac8bc36bda73a7306a445dc2101de97/831-desk.jpg",
        },
        {
            url: "https://images.ctfassets.net/7rldri896b2a/5vv9Q3xivofh0rEfZ18zTm/25e61a9577e79f2e93e8763012563d90/hero1-laborday.png",
         },
        {
            url: "https://images.ctfassets.net/7rldri896b2a/5vv9Q3xivofh0rEfZ18zTm/25e61a9577e79f2e93e8763012563d90/hero1-laborday.png",
         },
    ];  

    const Cat ={
        title: "Example Title",
        value: "ex"
    };

    return(
        <>
            <Notify />
            <Header />
            <div className="slider-container">
                <SimpleImageSlider
                    width={1347}
                    height={470}
                    images={sliderImages}
                    showBullets={true}
                    showNavs={true}
                    loop={true}
                    autoPlay={true}
                /> 
            </div>
            <TopSavings {...Cat}/>
            <Category option="category"/>
            <Category option="season"/>
            <Footer />
        </>
    );
}

export default Home;