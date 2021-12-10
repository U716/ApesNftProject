import React, { useState, useEffect } from "react";
import Logo from "../../assets/images/Logo.svg";
import Ship from "../../assets/images/ship.svg";
import Instagram from "../../assets/images/instagram.svg";
import Twitter from "../../assets/images/Twitter.svg";
import Banner from "../../assets/images/banner-img.png";
import MobileBanner from "../../assets/images/mobilebanner.png";
import CardImage from "../../assets/images/card-image.png";
import Main from "../../assets/images/mok-one.gif";
import Monkey from "../../assets/images/main-monkey.png";
import Mockone from "../../assets/images/mok-one.png";
import Mocktwo from "../../assets/images/mok-two.png";
import Mockthree from "../../assets/images/mok-three.png";
import Mockfour from "../../assets/images/mok-four.png";
import Prospect from "../../assets/images/tenpersent.png";
import percent from "../../assets/images/twityfive.png";
import numberpercent from "../../assets/images/fiftypersent.png";
import numberstyle from "../../assets/images/seventyfive.png";
import fulfit from "../../assets/images/numbers-percent.png";
import AppImage from "../../assets/images/app.png";
import Game from "../../assets/images/game.png";
import Heart from "../../assets/images/heart.svg";
import Instagreen from "../../assets/images/instragreen.svg";
import TabsIcon from "../../assets/images/tabs-icon.svg";
import Greenship from "../../assets/images/greenship.svg";
import Dig from "../../assets/images/dig.svg";
import Twitter1 from "../../assets/images/twitter1.svg";
import FooterGreenInst from "../../assets/images/footer-green-inst.svg";
const Landing = () => {
  const [faq1, setFaq1] = useState(false)
  const [faq2, setFaq2] = useState(false)
  const [faq3, setFaq3] = useState(false)
  const [faq4, setFaq4] = useState(false)
  const [faq5, setFaq5] = useState(false)
  const [faq6, setFaq6] = useState(false)
  const [faq7, setFaq7] = useState(false)
  const [value,setValue]=useState(0)
  const [amount,setAmount]=useState(0)
  const changeValue = (operation)=>{
    if(operation==="+"){
        if(value<20){
          setValue(value+1)
        }
        else{
          setValue(20)
        }
    }else{
        if(value>0){
          setValue(value-1)
        }
        else{
          setValue(0)
        }
    }
  }

  useEffect(() => {
    setAmount(0.09*value)
  }, [value])
  return (
    <>
      <section>
        <div className="wapper" id="#">
          <header>
            <div className="container">
              <div className="row">
                <div className="column col">
                  <a href="#">
                    {" "}
                    <div className="logo">
                      <img src={Logo} alt="" />
                    </div>
                  </a>
                </div>
                <div className="column nav-column">
                  <div className="navbar">
                    <ul className="nav">
                      <li>
                        <a href="#mint">Mint</a>
                      </li>
                      <li>
                        <a href="#story">Story </a>
                      </li>
                      <li>
                        <a href="#featured">Featured Apes</a>
                      </li>
                      <li>
                        <a href="#roadmap">Roadmap</a>
                      </li>
                      <li>
                        <a href="#team">Team</a>
                      </li>
                      <li>
                        <a href="#faq">FAQ</a>
                      </li>
                    </ul>
                    <div class="menu-btn">
                      <i class="fas fa-bars"></i>
                    </div>
                  </div>
                </div>
                <div className="column">
                  <div className="header-links">
                    <div className="ship">
                      <a href="#">
                        <img src={Ship} alt="" />
                      </a>
                    </div>
                    <div className="ship">
                      <a href="https://www.instagram.com/">
                        <img src={Instagram} alt="" />
                      </a>
                    </div>
                    <div className="ship">
                      <a href="https://twitter.com/">
                        <img src={Twitter} alt="" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="column">
                  <div className="header-btn">
                    <a href="#">Join Our Discord</a>
                  </div>
                </div>
              </div>
            </div>
          </header>
        </div>
      </section>
      {/* banner-section */}
      <section>
        <div className="banner">
          <div className="banner-img">
            <img className="deaktop" src={Banner} alt="" />
            <img className="mobile" src={MobileBanner} alt="" />
          </div>
        </div>
      </section>
      {/* banner-section-End */}
      {/* Card-Section */}
      <section>
        <div className="card" id="mint">
          <div className="container">
            <div className="row">
              <div className="columns">
                <div className="card-count">
                  <div className="clim-flex">
                    <div className="card-contain">
                      <h1>MINT YOUR APE</h1>
                      <p>Please enter the amount of apes you want to mint</p>
                    </div>
                    <div className="min-logo">
                      <img src={Logo} alt="" />
                    </div>
                  </div>
                  <div className="card-profile">
                    <div className="card-img">
                      <img src={Main} alt="" />
                    </div>
                    <div className="profile-contain">
                      <span>Price Per AAP</span>
                      <h2>0.09 ETH Each</h2>
                      <p>Presale Announcement TBA 11.10.202</p>
                    </div>
                  </div>
                  <div className="plus">
                    <div className="plus-con">
                      <div class="quantity buttons_added">
                        <input type="button" value="-" class="minus" onClick={()=>{changeValue("-")}} />
                        <input type="number" step="1" min="0" max="20" name="quantity" value={value} title="Qty" className="input-text qty text" size="4" pattern="" inputmode="" />
                        <input type="button" value="+" className="plus" onClick={()=>{changeValue("+")}}  />
                      </div>
                    </div>
                    <div className="plus-max">
                      <span>20 Max</span>
                    </div>
                  </div>
                  <div className="totle">
                    <div className="main-totle">
                      <span>Total</span>
                      <p>{parseFloat(amount).toFixed(2)} ETH</p>
                    </div>
                  </div>
                  <div className="card-btn">
                    <a href="#">COMING SOON</a>
                  </div>
                </div>
              </div>
              <div className="columns">
                <div className="main-card-img">
                  <img src={Main} alt="" />
                </div>
              </div>
            </div>
            <div className="raity">
              <h3>Rarity and Specs</h3>
              <p>
                Apes After party is a special collection of 9,999 Apes that party their asses off on the Ethereum blockchain.The entire Apes After Party NFT collection is generated from over 150+ hand drawn traits by world class artists and includes rarities such as common, rare, & super rare!
              </p>
              {/* <p>
                Mauris lectus lorem, ultricies sit amet nisl vitae, ultricies
                ultrices nisi. Aliquam eu rutrum urna. Vivamus sed elit in felis
                facilisis tempor facilisis nec velit. Phasellus non massa
                tellus. Nam diam urna, tincidunt a placerat a, vestibulum eget
                velit. Pellentesque mauris nisi, aliquam vitae faucibus et,
                euismod quis metus. Etiam vestibulum hendrerit suscipit.
              </p> */}
              <div className="monkey-images">
                <div className="columns">
                  <div className="big-mok">
                    <img src={Monkey} alt="" />
                  </div>
                </div>
                <div className="columns">
                  <div className="mok-flex">
                    <div className="main-monke">
                      <img src={Mocktwo} alt="" />
                    </div>
                    <div className="main-monke">
                      <img src={Mockone} alt="" />
                    </div>
                  </div>
                  <div className="mok-flex">
                    <div className="main-monke">
                      <img src={Mockthree} alt="" />
                    </div>
                    <div className="main-monke">
                      <img src={Mockfour} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Card-Section End */}
      {/* Story Section */}
      <section>
        <div className="story" id="story">
          <div className="container">
            <div className="main-story-contain">
              <h4>STORY</h4>
              <p>
                Located in the hills of Vine City is a gigantic mansion which is owned by a highly prestigious group of mafia apes. They are filled with generosity and wealth. Every party held at their mansion gives money to help support those in their communities. After all of the great things these 9 apes have done for Vine City, none of the other ape residents are aware of how the group of apes became so wealthy.
              </p>
              <p>
                15 years ago, poverty plagued Vine City. Homelessness became a rapidly increasing epidemic, and many apes who were not homeless could hardly pay for basic necessities such as rent and even food.
                One day, the group of the 9 mafia apes decided that they could not watch so many people lose their homes and struggle to afford food or clothing. They all came upon an agreement to steal from one of the largest banks in the Metaverse.
                .
              </p>
              <span>
                The bank was very well known in the Metaverse. It contained quadrillions of cryptocurrency. It had the expected strengthened security. The 9 apes came prepared with a variety of lethal weapons.
                The task was not easy, but it was and still remains the largest feat they have accomplished in their lives. When they returned, they purchased a colossal mansion. A mansion where many parties could be hosted.
                15 years later, Parties continue to be hosted at the mansion where the 9 generous apes give the stolen cash to the other apes in need.

              </span>
            </div>
          </div>
        </div>
      </section>
      {/* Story Section End */}
      {/* FEATURED AAPS section */}
      <section>
        <div className="featured" id="featured">
          <div className="featured-contain">
            <h5>PRESTIGIOUS APES</h5>
          </div>
          <div className="slider-scroll2">
            <div className="monkey-slider">
              <div className="col-one">
                <div className="slider-img-one">
                  <img src={Mockone} alt="" />
                </div>
              </div>
              <div className="col-one">
                <div className="slider-img-one">
                  <img src={Mocktwo} alt="" />
                </div>
              </div>
              <div className="col-one">
                <div className="slider-img-one">
                  <img src={Mockfour} alt="" />
                </div>
              </div>
              <div className="col-one">
                <div className="slider-img-one">
                  <img src={Mockthree} alt="" />
                </div>
              </div>
              <div className="col-one">
                <div className="slider-img-one">
                  <img src={Mockone} alt="" />
                </div>
              </div>
              <div className="col-one">
                <div className="slider-img-one">
                  <img src={Mockthree} alt="" />
                </div>
              </div>
              <div className="col-one">
                <div className="slider-img-one">
                  <img src={Mocktwo} alt="" />
                </div>
              </div>
              <div className="col-one">
                <div className="slider-img-one">
                  <img src={Mockfour} alt="" />
                </div>
              </div>
              <div className="col-one">
                <div className="slider-img-one">
                  <img src={Mockone} alt="" />
                </div>
              </div>
              <div className="col-one">
                <div className="slider-img-one">
                  <img src={Mocktwo} alt="" />
                </div>
              </div>
              <div className="col-one">
                <div className="slider-img-one">
                  <img src={Mockfour} alt="" />
                </div>
              </div>
              <div className="col-one">
                <div className="slider-img-one">
                  <img src={Mockthree} alt="" />
                </div>
              </div>
              <div className="col-one">
                <div className="slider-img-one">
                  <img src={Mockone} alt="" />
                </div>
              </div>
              <div className="col-one">
                <div className="slider-img-one">
                  <img src={Mockthree} alt="" />
                </div>
              </div>
              <div className="col-one">
                <div className="slider-img-one">
                  <img src={Mocktwo} alt="" />
                </div>
              </div>
              <div className="col-one">
                <div className="slider-img-one">
                  <img src={Mockfour} alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="roadmap" id="roadmap">
            <div className="container">
              <div className="road-map-contain">
                <h5>roadmap</h5>
              </div>
              <div className="road-map-bord road-bef">
                <div className="columns">
                  <div className="road-cont">
                    <h6>The Pregame</h6>
                    <p>
                      Public sale sells out leading to major community giveaways! The 9 lucky Mafia Ape minters each receive $10,000 in ETH! Apes After Party acquires land & begins development in the metaverse via The Sandbox.
                    </p>
                  </div>
                </div>
                <div className="columns">
                  <div className="main-counts">
                    <div className="road-img">
                      <img src={Prospect} alt="" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="road-map-bord road-bef road-bef-one">
                <div className="columns">
                  <div className="main-counts">
                    <div className="road-img">
                      <img src={percent} alt="" />
                    </div>
                  </div>
                </div>
                <div className="columns">
                  <div className="road-cont">
                    <h6>Drop The Addy</h6>
                    <p>
                      Staking AAP NFTs for $PARTY goes live! AAP holders are now able to burn $PARTY for opportunities such as giving their AAP a unique name and changing its biography!
                    </p>
                  </div>
                </div>
              </div>
              <div className="road-map-bord road-bef">
                <div className="columns">
                  <div className="road-cont">
                    <h6>This Is Pretty Lit</h6>
                    <p>
                      First Apes After Party celebration in the Hollywood Hills! Bust down Cartier + Rolex watch giveaway! Exclusive to holders only! It’s also time for a surprise! (We airdrop some bad ass watch NFTs that are actually moving)
                    </p>
                  </div>
                </div>
                <div className="columns">
                  <div className="main-counts">
                    <div className="road-img">
                      <img src={numberpercent} alt="" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="road-map-bord road-bef road-bef-one">
                <div className="columns">
                  <div className="main-counts">
                    <div className="road-img">
                      <img src={numberstyle} alt="" />
                    </div>
                  </div>
                </div>
                <div className="columns">
                  <div className="road-cont">
                    <h6>BEST PARTY EVER!</h6>
                    <p>
                      Mint your very own AAP 3D VX Avatar exclusively for sandbox gameplay utilizing your $PARTY, it’s time to show the metaverse who the real degenerates are.
                    </p>
                  </div>
                </div>
              </div>
              <div className="road-map-bord">
                <div className="columns">
                  <div className="road-cont">
                    <h6>Til The Sun Comes Up </h6>
                    <p>
                      Holders are invited to a private yacht party in Miami from sunset to sunrise. Exclusive to holders only…can you hang? The AAP metaverse development is now complete! It’s time to play your classic party games in the AAP metaverse and earn real cash prizes through competitive and interactive gaming!
                    </p>
                  </div>
                </div>
                <div className="columns">
                  <div className="main-counts">
                    <div className="road-img">
                      <img src={fulfit} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* FEATURED AAPS section End */}
      {/* MORE TO COME  */}
      {/* <section>
        <div className="more">
          <div className="container">
            <div className="more-contain">
              <h3>MORE TO COME</h3>
            </div>
            <div className="row">
              <div className="columne">
                <div className="detail">
                  <img src={AppImage} alt="" />
                  <h3>Metaverse Expansion</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Quisque varius sollicitudin lacus. Nulla pharetra feugiat
                    dignissim.
                  </p>
                </div>
              </div>
              <div className="columne">
                <div className="detail">
                  <img src={Game} alt="" />
                  <h3>Play to Earn</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Quisque varius sollicitudin lacus. Nulla pharetra feugiat
                    dignissim.
                  </p>
                </div>
              </div>
              <div className="columne">
                <div className="detail">
                  <img src={Heart} alt="" />
                  <h3>Community Charity Events</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Quisque varius sollicitudin lacus. Nulla pharetra feugiat
                    dignissim.
                  </p>
                </div>
              </div>
            </div>
            <div className="btn-col">
              <a href="#"> check out the whitepaper</a>
            </div>
          </div>
        </div>
      </section> */}
      <section>
        <div className="pt-5 more" id="story">
          <div className="container">
            <div className="main-story">
              <h4>Project Overview</h4>
              <p>
                Apes After Party is a very exclusive NFT project and community that provides it’s holders with the opportunity to attend some of the greatest private parties and celebrations the world has ever seen not only in person but in the metaverse!

                AAP is the very first NFT collection to hit the Ethereum blockchain that will host competitive party game tournaments in person and in the metaverse for REAL prizes including iced out watches, tons of Ethereum, and even other Blue Chip NFTs.

              </p>
              <p>
                Not the best at party games or blockchain gaming? No problem! Lucky for AAP holders ANYBODY can be a winner by staking their AAP NFT and earning $PARTY tokens.

                $PARTY is the deflationary utility token that governs the AAP ecosystem and provides AAP holders the experience of a lifetime!

              </p>
              <span>
                Each AAP when staked will yield a total of 5 $PARTY tokens a day. AAP holders can burn $PARTY for opportunities such as giving your AAP a unique name, changing its biography, and even minting a 3D VX avatar exclusively for your gameplay experiences in the metaverse via The Sandbox Game. Of course not to mention, $PARTY will have it’s own DEX/Liquidity Pool and can be converted into ETH at any time.

                The real question is, will you be lucky enough?



              </span>
              <span>
                Only 9 out of the 9,999 AAP collection will be considered “The Mafia Apes” and will yield a total of 20 $PARTY a day. The lucky minters of these 9 Mafia Apes will each be sent 10,000 in ETH on mint day once all AAP NFTs have been minted!




              </span>
            </div>

          </div>
        </div>
      </section>
      {/* MORE TO COME End  */}
      {/* Team Section */}
      <section>
        <div className="team" id="team">
          <div className="container">
            <div className="team-head">
              <h3>TEAM</h3>
            </div>
            <div className="slider-section-two">
              <div className="second-slider">
                <div className="col-one">
                  <div className="main-sl">
                    <div className="slide-col">
                      <div className="slid-img">
                        <img src={Mockone} alt="" />
                      </div>
                    </div>
                    <div className="slid-conter">
                      <div className="slid-main-cont">
                        <h3>Lorem Ipsum Is</h3>
                        <span>Founder</span>
                      </div>
                      <div className="slider-icon">
                        <img src={Instagreen} alt="" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-one">
                  <div className="main-sl">
                    <div className="slide-col">
                      <div className="slid-img">
                        <img src={Mocktwo} alt="" />
                      </div>
                    </div>
                    <div className="slid-conter">
                      <div className="slid-main-cont">
                        <h3>Lorem Ipsum Is</h3>
                        <span>Founder</span>
                      </div>
                      <div className="slider-icon">
                        <a href="https://www.instagram.com/">
                          {" "}
                          <img src={Instagreen} alt="" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-one">
                  <div className="main-sl">
                    <div className="slide-col">
                      <div className="slid-img">
                        <img src={Mockthree} alt="" />
                      </div>
                    </div>
                    <div className="slid-conter">
                      <div className="slid-main-cont">
                        <h3>Lorem Ipsum Is</h3>
                        <span>Founder</span>
                      </div>
                      <div className="slider-icon">
                        <a href="https://www.instagram.com/">
                          {" "}
                          <img src={Instagreen} alt="" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-one">
                  <div className="main-sl">
                    <div className="slide-col">
                      <div className="slid-img">
                        <img src={Mockfour} alt="" />
                      </div>
                    </div>
                    <div className="slid-conter">
                      <div className="slid-main-cont">
                        <h3>Lorem Ipsum Is</h3>
                        <span>Founder</span>
                      </div>
                      <div className="slider-icon">
                        <a href="https://www.instagram.com/">
                          {" "}
                          <img src={Instagreen} alt="" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-one">
                  <div className="main-sl">
                    <div className="slide-col">
                      <div className="slid-img">
                        <img src={Mockone} alt="" />
                      </div>
                    </div>
                    <div className="slid-conter">
                      <div className="slid-main-cont">
                        <h3>Lorem Ipsum Is</h3>
                        <span>Founder</span>
                      </div>
                      <div className="slider-icon">
                        <img src={Instagreen} alt="" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-one">
                  <div className="main-sl">
                    <div className="slide-col">
                      <div className="slid-img">
                        <img src={Mocktwo} alt="" />
                      </div>
                    </div>
                    <div className="slid-conter">
                      <div className="slid-main-cont">
                        <h3>Lorem Ipsum Is</h3>
                        <span>Founder</span>
                      </div>
                      <div className="slider-icon">
                        <a href="https://www.instagram.com/">
                          {" "}
                          <img src={Instagreen} alt="" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-one">
                  <div className="main-sl">
                    <div className="slide-col">
                      <div className="slid-img">
                        <img src={Mockthree} alt="" />
                      </div>
                    </div>
                    <div className="slid-conter">
                      <div className="slid-main-cont">
                        <h3>Lorem Ipsum Is</h3>
                        <span>Founder</span>
                      </div>
                      <div className="slider-icon">
                        <a href="https://www.instagram.com/">
                          {" "}
                          <img src={Instagreen} alt="" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-one">
                  <div className="main-sl">
                    <div className="slide-col">
                      <div className="slid-img">
                        <img src={Mockfour} alt="" />
                      </div>
                    </div>
                    <div className="slid-conter">
                      <div className="slid-main-cont">
                        <h3>Lorem Ipsum Is</h3>
                        <span>Founder</span>
                      </div>
                      <div className="slider-icon">
                        <a href="https://www.instagram.com/">
                          {" "}
                          <img src={Instagreen} alt="" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-one">
                  <div className="main-sl">
                    <div className="slide-col">
                      <div className="slid-img">
                        <img src={Mockone} alt="" />
                      </div>
                    </div>
                    <div className="slid-conter">
                      <div className="slid-main-cont">
                        <h3>Lorem Ipsum Is</h3>
                        <span>Founder</span>
                      </div>
                      <div className="slider-icon">
                        <a href="https://www.instagram.com/">
                          {" "}
                          <img src={Instagreen} alt="" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-one">
                  <div className="main-sl">
                    <div className="slide-col">
                      <div className="slid-img">
                        <img src={Mockthree} alt="" />
                      </div>
                    </div>
                    <div className="slid-conter">
                      <div className="slid-main-cont">
                        <h3>Lorem Ipsum Is</h3>
                        <span>Founder</span>
                      </div>
                      <div className="slider-icon">
                        <a href="https://www.instagram.com/">
                          {" "}
                          <img src={Instagreen} alt="" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="faq-section" id="faq">
                <div className="team-head">
                  <h3>faq</h3>
                </div>
                <div className="faq-contain" onClick={() => {
                  setFaq1(!faq1)
                }}>
                  <div className="main-bord" style={{ marginBottom: faq1 ? '0px' : '20px', backgroundColor: faq1 ? '#0b3d22' : '#2B2B2B', borderColor: faq1 ? '#00FF54' : '#848484' }}>
                    <span>
                      What is Apes After Party?

                    </span>
                    <img src={TabsIcon} alt="" />
                  </div>
                  <div key={"something"} className="faq-para">
                    {
                      faq1 &&
                      <p>
                        Apes After Party is a very exclusive NFT project and community that provides it’s holders with the opportunity to attend some of the greatest private parties and celebrations the world has ever seen not only in person but in the metaverse! AAP is the very first NFT collection to hit the Ethereum blockchain that will host competitive party game tournaments in person and in the metaverse for REAL prizes including iced out watches, tons of Ethereum, and even other Blue Chip NFTs.
                      </p>

                    }
                  </div>
                </div>
                <div className="faq-contain" onClick={() => {
                  setFaq2(!faq2)
                }}>
                  <div className="main-bord" style={{ marginBottom: faq2 ? '0px' : '20px', backgroundColor: faq2 ? '#0b3d22' : '#2B2B2B', borderColor: faq2 ? '#00FF54' : '#848484' }} >
                    <span>
                      When can I mint an AAP?

                    </span>
                    <img src={TabsIcon} alt="" />
                  </div>
                  <div key={"something"} className="faq-para">
                    {
                      faq2 &&
                      <p>
                        Apes After Party NFTs will be officially released and available for mint on New Years Eve for presale and New Year’s Day for public sale!

                      </p>

                    }
                  </div>
                </div>
                <div className="faq-contain" onClick={() => {
                  setFaq3(!faq3)
                }}>
                  <div className="main-bord" style={{ marginBottom: faq3 ? '0px' : '20px', backgroundColor: faq3 ? '#0b3d22' : '#2B2B2B', borderColor: faq3 ? '#00FF54' : '#848484' }} >
                    <span>
                      Where can I buy AAP NFTs?

                    </span>
                    <img src={TabsIcon} alt="" />
                  </div>
                  <div key={"something"} className="faq-para">
                    {
                      faq3 &&
                      <p>
                        Minting will be available through our official website and smart contract address which is provided in our #official-links tab in our discord server ONLY. Once all AAPs well out, you can get one off the OpenSea secondary marketplace also provided in our official links tab.

                      </p>

                    }
                  </div>
                </div>

                {/* faq 4  */}
                <div className="faq-contain" onClick={() => {
                  setFaq4(!faq4)
                }}>
                  <div className="main-bord" style={{ marginBottom: faq4 ? '0px' : '20px', backgroundColor: faq4 ? '#0b3d22' : '#2B2B2B', borderColor: faq4 ? '#00FF54' : '#848484' }} >
                    <span>
                      Who can attend these private parties?


                    </span>
                    <img src={TabsIcon} alt="" />
                  </div>
                  <div key={"something"} className="faq-para">
                    {
                      faq4 &&
                      <p>
                        Only those who have staked their AAP will be able to attend!

                      </p>

                    }
                  </div>
                </div>

                {/* faq 5  */}
                <div className="faq-contain" onClick={() => {
                  setFaq5(!faq5)
                }}>
                  <div className="main-bord" style={{ marginBottom: faq5 ? '0px' : '20px', backgroundColor: faq5 ? '#0b3d22' : '#2B2B2B', borderColor: faq5 ? '#00FF54' : '#848484' }} >
                    <span>
                      What is $PARTY?




                    </span>
                    <img src={TabsIcon} alt="" />
                  </div>
                  <div key={"something"} className="faq-para">
                    {
                      faq5 &&
                      <p>
                        $PARTY is the deflationary utility token that governs the AAP ecosystem and provides AAP holders the experience of a lifetime!

                      </p>

                    }
                  </div>
                </div>

                {/* faq 6  */}
                <div className="faq-contain" onClick={() => {
                  setFaq6(!faq6)
                }}>
                  <div className="main-bord" style={{ marginBottom: faq6 ? '0px' : '20px', backgroundColor: faq6 ? '#0b3d22' : '#2B2B2B', borderColor: faq6 ? '#00FF54' : '#848484' }} >
                    <span>
                      What can $PARTY be used for?

                    </span>
                    <img src={TabsIcon} alt="" />
                  </div>
                  <div key={"something"} className="faq-para">
                    {
                      faq6 &&
                      <p>
                        $PARTY is the deflationary utility token that governs the AAP ecosystem and provides AAP holders the experience of a lifetime!$PARTY can be utilized for opportunities such as giving your AAP a unique name, changing its biography, and even minting a 3D VX avatar exclusively for your gameplay experiences in the metaverse via The Sandbox Game. Of course not to mention, $PARTY will have it’s own DEX/Liquidity Pool and can be converted into ETH at any time.

                      </p>

                    }
                  </div>
                </div>

                {/* faq 7  */}
                <div className="faq-contain" onClick={() => {
                  setFaq7(!faq7)
                }}>
                  <div className="main-bord" style={{ marginBottom: faq7 ? '0px' : '20px', backgroundColor: faq7 ? '#0b3d22' : '#2B2B2B', borderColor: faq7 ? '#00FF54' : '#848484' }} >
                    <span>
                      Where can I learn more about Apes After Party?

                    </span>
                    <img src={TabsIcon} alt="" />
                  </div>
                  <div key={"something"} className="faq-para">
                    {
                      faq7 &&
                      <p>
                        You can learn more about AAP by reading our white paper, joining our discord, and following our social media pages! Any other questions you may have please feel free to ask the discord team at any time!

                      </p>

                    }
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Team Section End */}
      <section>
        <div className="footer">
          <div className="container">
            <div className="footer-logo">
              <a href="#">
                <img src={Logo} alt="" />
              </a>
            </div>
            <div className="footer-icon">
              <a href="#">
                <img src={Greenship} alt="" />
              </a>
              <a href="#">
                <img src={FooterGreenInst} alt="" />
              </a>
              <a href="#">
                <img src={Dig} alt="" />
              </a>
              <a href="#">
                <img src={Twitter1} alt="" />
              </a>
            </div>
            <div className="footer-last-content">
              <h3>All Rights Reserved 2021</h3>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Landing;
