import React from "react";
import Carousel from "react-elastic-carousel";
import styled from "styled-components";
import "./Home.css";
import Product from "./Product";

function Home() {
  const StyledImage = styled.img`
    width: 100%;
    height: 500px;
  `;

  const images = [
    {
      src:
        "https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg",
      alt: "amazon header",
    },
    {
      src:
        "https://florida.thejoyfm.com/sites/joyfl/images/features/2018/echodot3_giveaway_header.png",
      alt: "echo dot ad",
    },
    {
      src:
        "https://cdn.images.express.co.uk/img/dynamic/59/590x/Amazon-Amazon-Christmas-deals-Amazon-Christmas-deals-2018-Amazon-sale-Amazon-offer-Amazon-discount-Amazon-news-Amazon-1057382.jpg?r=1544626787600",
      alt: "christmas ad",
    },
  ];
  return (
    <div className="home">
      <div className="home__container">
        <Carousel>
          {images.map((image) => (
            <StyledImage src={image.src} alt={image.alt} />
          ))}
        </Carousel>

        <div className="home__row">
          <Product
            id="2347596"
            title="the lean startup"
            price={19.99}
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQJYrBXim6EfqjMDv93m1oiByBadE6BDzJ4liacCR_umBwQaW4ELKq5j0vGjuDUwdiVm97i7AiU&usqp=CAc"
            rating={3}
          />
          <Product
            id="4538093"
            title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 litre Glass Bowl"
            price={239.0}
            rating={4}
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS-EwtgJCBWzLQOR3fgDsp3lcuhtoJdWnnPmuCVegtmuJe8GQivRWfD3f9drw&usqp=CAc"
          />
        </div>
        <div className="home__row">
          <Product
            id="4538094"
            title="Fitbit Charge 4 Fitness and Activity Tracker with Built-in GPS, Heart Rate, Sleep & Swim Tracking, Black/Black, One Size (S &L Bands Included)"
            price={199.0}
            rating={3}
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTPGv6YKW0glnn_rH-hp_wtqbxicLNrPVWCEEvFlF-yx7sdEmbVMciFfYxU6H_Sn5_NntLRYbw&usqp=CAc"
          />
          <Product
            id="4538095"
            title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
            price={98.99}
            rating={5}
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQqkNIIgsWWB5BLvzDd7tYK9qTP58gMGH3T9A5P2GE32dELmhTTtrVyt4KW9-k&usqp=CAc"
          />
          <Product
            id="4538096"
            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th generation)"
            price={598.99}
            rating={4}
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRBKBJH-cuS3JrcCpy-kiWcyACXFPRbHpGAhZRWdUQm1uHCWtMwHHDtekDckA&usqp=CAc"
          />
        </div>
        <div className="home__row">
          <Product
            id="4538097"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
            price={199.0}
            rating={3}
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQa5QScM-6RQMxwl6-YbfrFjs8VM8iNoVr4zML3bh-JLOrkh3U6vKnRkt4izS0&usqp=CAc"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
