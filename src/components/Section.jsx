import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./section.css";
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import AOS from "aos";
function Section(props) {
  //hook for changing background

  const [backgrounds, setBackground] = React.useState(
    "url(assets/darkness-bg.png) center bottom -130.8px / cover no-repeat"
  );
  //hook for changing character
  const [character, setCharacter] = React.useState("assets/char-1.png");
  //hook for changing qualities of character
  const [qualities, setQualities] = React.useState(
    "url(/assets/zygor-item.4a45a1ca.png) no-repeat"
  );
  //hook for storing the prev section
  const prevSec = React.useRef(document.getElementsByTagName("img")[5]);
  //hook for storing the next section
  const nextSec = React.useRef(document.getElementsByTagName("img")[1]);
  //hook for storing features of the characther
  const [features, setFeatures] = React.useState([
    "Ancient Beast",
    "Dragon Fang",
    "Hard Mud",
    "Born from Earth",
  ]);
  //hook for storing left attributes of the characther
  const [leftattr, setLeftAttr] = React.useState(["Zygor", "Abyssal Calamity"]);
  const [loading, setLoading] = React.useState(true);
  setTimeout(() => {
    setLoading(false);
  }, 5000);
  React.useEffect(() => {


   
    setTimeout(() => {
      document.getElementById('animationid1').classList.add('aos-animate');
      document.getElementById('animationid2').classList.add('aos-animate');
    }
      ,1000);
    var elements = document.getElementsByClassName("item__icon");
    for (let index = 0; index < elements.length; index++) {
      elements[index].style.background = qualities;
    }
    elements[1].style.backgroundPosition = "-1px -87px";
    elements[2].style.backgroundPosition = "-1px -174px";
    elements[3].style.backgroundPosition = "-1px -261px";
    console.log("UseEffect");
  }, [qualities]);
  //submit handler for changing the background, character and qualities of the character based on the section selected by the user
  const submithandler = (e) => {
    document.getElementById('animationid1').classList.remove('aos-animate')
    document.getElementById('animationid2').classList.remove('aos-animate')
    
    //storing all image attributes for removing the active tag from the prev section
    
  
    var allelements = document.getElementsByTagName("img");
  
    for (let index = 0; index < allelements.length; index++) {
      var element = allelements[index];
      element.parentElement.id = "";
    }
    
    try {
      if (e.target) {
        e.target.parentElement.id = "active";
        var element;
        element = e.target.alt;
      }
    } catch (e) {}
    if (e.alt) {
      element = e.alt;
      e.parentElement.id = "active";
    }
 
    
    if (element) {
      // screens are changed based on the section selected by the user and the background, character and qualities of the character are changed accordingly
      switch (element) {
        case "element-1":
          //background
          setBackground(
            "url(assets/zygor-bg.png) center bottom -130.8px / cover no-repeat"
          );
          //character
          setCharacter("assets/char-1.png");
          //qualities
          setQualities("url(/assets/zygor-item.4a45a1ca.png) no-repeat");
          //features
          setFeatures([
            "Ancient Beast",
            "Dragon Fang",
            "Hard Mud",
            "Born from Earth",
          ]);
          //left attributes
          setLeftAttr(["Zygor", "Abyssal Calamity"]);
          //prev section
          prevSec.current = document.getElementsByTagName("img")[5];
          //next section
          nextSec.current = document.getElementsByTagName("img")[1];
          break;

        case "element-2":
          setBackground(
            "url(assets/heroes-bg.png) center bottom -130.8px / cover no-repeat"
          );
          setCharacter("assets/char-2.png");
          setQualities("url(/assets/phalanx-item.4fc810a7.png) no-repeat");
          setFeatures([
            "Spirit Focus",
            "Holy Shield",
            "Holy Mark",
            "Holy Blessing",
          ]);
          setLeftAttr(["Phalanx", "the Shinning Sage"]);
          prevSec.current = document.getElementsByTagName("img")[0];
          nextSec.current = document.getElementsByTagName("img")[2];

          break;

        case "element-3":
          setBackground(
            "url(assets/darkness-bg.png) center bottom -130.8px / cover no-repeat"
          );
          setCharacter("assets/char-6.png");
          setQualities("url(/assets/diadora-item.11eb8231.png) no-repeat");
          setFeatures(["Toxic Attack", "Silence", "Grateful", "Curse of Soul"]);
          setLeftAttr(["Diadora", "the Dark One"]);
          prevSec.current = document.getElementsByTagName("img")[1];
          nextSec.current = document.getElementsByTagName("img")[3];

          break;
        case "element-4":
          setBackground(
            "url(assets/cernunos-bg.png) center bottom -130.8px / cover no-repeat"
          );
          setCharacter("assets/char-4.png");
          setQualities("url(/assets/cernunos-item.e27bd407.png) no-repeat");
          setFeatures([
            "Natures Root",
            "Good Spirit",
            "Nature Style",
            "Nature Blood",
          ]);
          setLeftAttr(["Cernunos", "the Nature One"]);
          prevSec.current = document.getElementsByTagName("img")[2];
          nextSec.current = document.getElementsByTagName("img")[4];

          break;
        case "element-5":
          setBackground(
            "url(assets/osse-bg.png) center bottom -130.8px / cover no-repeat"
          );
          setCharacter("assets/char-5.png");
          setQualities("url(/assets/osse-item.4a45a1ca.png) no-repeat");
          setFeatures(["Toxic Attack", "Silence", "Grateful", "Curse of Soul"]);
          setLeftAttr(["Osse", "the Ocean One"]);
          prevSec.current = document.getElementsByTagName("img")[3];
          nextSec.current = document.getElementsByTagName("img")[5];

          break;
        case "element-6":
          setBackground(
            "url(assets/eitri-bg.png) center bottom -130.8px / cover no-repeat"
          );
          setCharacter("assets/char-6.png");
          setQualities("url(/assets/eitri-item.4a45a1ca.png) no-repeat");
          setFeatures([
            "Eitris pet",
            "Self Purify",
            "Defender",
            "Furious Eitri",
          ]);
          setLeftAttr(["Eitri", "Empress of Fire"]);
          prevSec.current = document.getElementsByTagName("img")[4];
          nextSec.current = document.getElementsByTagName("img")[0];
          break;
        default:
          setBackground(
            "url(assets/zygor-bg.png) center bottom -130.8px / cover no-repeat"
          );
      }
    }
  };
  //handlers for prev and next buttons
  const prevHandler = () => {
    submithandler(prevSec.current);
  };
  const nextHandler = () => {
    submithandler(nextSec.current);
  };

  return (
    <div className="section element" style={{ background: backgrounds }}>
      <div className="section__background"></div>
      <div className="container">
        <div className="row_section">
          <div></div>
          <div className="row_title">
            <h1>The Epic Elements</h1>
          </div>
          <Swiper
            spaceBetween={10}
            slidesPerView={4}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
          >
            <SwiperSlide>
              <div
                className="swiper-slide__element"
                onClick={(e) => {
                  submithandler(e);
                }}
              >
                <div className="swiper-slide__element__image">
                  <img src="assets/element-item-01.png" alt="element-1" />
                </div>
                <div className="swiper-slide__element__title">
                  <h2>Malefica</h2>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                className="swiper-slide__element"
                onClick={(e) => {
                  submithandler(e);
                }}
              >
                <div className="swiper-slide__element__image">
                  <img src="assets/element-item-02.png" alt="element-2" />
                </div>
                <div className="swiper-slide__element__title">
                  <h2>Halo Kingdom</h2>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                className="swiper-slide__element"
                onClick={(e) => {
                  submithandler(e);
                }}
              >
                <div className="swiper-slide__element__image">
                  <img src="assets/element-item-03.png" alt="element-3" />
                </div>
                <div className="swiper-slide__element__title">
                  <h2>Kingdom Of Darkness</h2>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                className="swiper-slide__element"
                onClick={(e) => {
                  submithandler(e);
                }}
              >
                <div className="swiper-slide__element__image">
                  <img src="assets/element-item-04.png" alt="element-4" />
                </div>
                <div className="swiper-slide__element__title">
                  <h2>Land Of Nature</h2>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                className="swiper-slide__element"
                onClick={(e) => {
                  submithandler(e);
                }}
              >
                <div className="swiper-slide__element__image">
                  <img src="assets/element-item-05.png" alt="element-5" />
                </div>
                <div className="swiper-slide__element__title">
                  <h2>Marina Union</h2>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                className="swiper-slide__element"
                onClick={(e) => {
                  submithandler(e);
                }}
              >
                <div className="swiper-slide__element__image">
                  <img src="assets/element-item-06.png" alt="element-6" />
                </div>
                <div className="swiper-slide__element__title">
                  <h2>Burning Continent</h2>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      <div className="element-info">
        <div
          className="swiper-button-next"
          tabIndex="0"
          role="button"
          aria-label="Next slide"
          aria-controls="swiper-wrapper-8c4e38f661f31ef4"
          onClick={() => {
            nextHandler();
          }}
        ></div>

        <div className="element-content" style={{ display: "flex" }}>
          <div className="left-info">
            <div data-aos="fade-right" id="animationid1">
              <div className="left-info__name">{leftattr[0]}</div>
              <div className="left-info__line">
                <div className="left-info__title">{leftattr[1]}</div>
                <div className="left-info__stars">
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            </div>
          </div>
          <div className="center-info">
            <div className="element-pic">
              <img className="char" src={character} alt="element-2" />
            </div>
          </div>
          <div className="right-info">
            <div
              data-aos="fade-left"
              style={{ display: "flex", alignItems: "center" } }id="animationid2"
            >
              <div className="right-info__line"></div>
              <div className="right-info__items">
                <div className="item">
                  <div className="item__icon"></div>
                  <div className="item__name">{features[0]}</div>
                </div>
                <div className="item">
                  <div className="item__icon"></div>
                  <div className="item__name">{features[1]}</div>
                </div>
                <div className="item">
                  <div className="item__icon"></div>
                  <div className="item__name">{features[2]}</div>
                </div>
                <div className="item">
                  <div className="item__icon"></div>
                  <div className="item__name">{features[3]}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="swiper-button-prev"
          tabIndex="0"
          role="button"
          aria-label="Previous slide"
          aria-controls="swiper-wrapper-8c4e38f661f31ef4"
          onClick={() => {
            prevHandler();
          }}
        ></div>
      </div>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={loading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
  );
}

export default Section;
