import type { NextPage } from "next";
import Head from "next/head";
import { useEffect, useRef } from "react";
import styles from "../styles/Home.module.scss";

const Home: NextPage = () => {
  useEffect(() => {
    let lastScrollTop = 0;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const st = window.pageYOffset || document.documentElement.scrollTop;
          if (entry.isIntersecting) {
            if (st > lastScrollTop) {
              entry.target.classList.remove('animate-out');
              entry.target.classList.add('animate-in');
            }
          } else {
            if (st < lastScrollTop) {
              entry.target.classList.remove('animate-in');
              entry.target.classList.add('animate-out');
            }
          }
          lastScrollTop = st <= 0 ? 0 : st;
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.animate');
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>PULVERIZE</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" />
        <style>
          {` body {
        margin: 0;
        padding: 0;
    }

    .fw-800 {
        font-weight: 800;
    }

    .secti {
        height: 100vh;
    }

    .overlay-content {
        position: relative;
        z-index: 1;
        width: 100%;
    }

    .container {
        padding: 20px;
        box-sizing: border-box;
    }

    .header {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .btn-primary.on-lorem {
        color: #ffffff;
        background-color: #252525;
        border-color: #252525;
        border-radius: 43px;
        font-weight: 900;
        line-height: 40px;
        text-transform: uppercase;
        font-size: 12px;
        padding-left: 20px;
        padding-right: 10px;
        margin-right: 20px;
    }

    .btn-primary.on-lorem:hover {
        background-color: #9C7443;
    }

    .btn-primary.on-lorem:focus {
        box-shadow: none;
    }

.btn-primary.on-lorem:hover .vector-icon {
  background: #252525;
  border-radius: 50%;
}


    .custom-btn {
        background: transparent;
        border: 0;
        cursor: pointer;
    }

    .layout-left {
        text-align: left;
    }

    .layout-center {
        text-align: center;
        color: #ffffff;
    }

    .layout-right {
        text-align: right;
    }

    .pt {
        background: none;
        color: white;
        padding: 15px;
        font-weight: 900;
        line-height: 21px;
        text-transform: uppercase;
        font-size: 21px;
        border-radius: 60px;
        background: black;
        border: 1px solid black;
    }

    .topsection .right {
        float: right;
    }

    .topsection .left {
        float: left;
    }

    .right-menu {
        float: right;
    }

    .lorem-ipsum {
        margin-right: 20px;
        font-size: 14px;
        color: #666;
    }

    .content {
        text-align: center;
        position: relative;
    }

    .title {
        color: #ffffff;
        font-size: 175px;
        font-style: normal;
        font-weight: 700;
        text-transform: uppercase;
        text-align: center;
        position: relative;
        top: -14rem;
    }

    .sub-text-left,
    .sub-text-right {
        position: relative;
        top: 50%;
        transform: translateY(-50%);
        font-size: 12px;
        color: #666;
    }

    .sub-text-left {
        width: 30%;
    }

    .sub-text-left p {
        color: #494239;
        font-weight: 800;
        font-size: 14px;
    }

    .sub-text-right {
        width: 20%;
    }

    .sub-text-right p {
        color: #494239;
        font-weight: 800;
        font-size: 14px;
    }

    .sub-text-right span {
        font-weight: 400;
    }

    .sec-text-right {
        text-align: left;
    }

    .sec-text-right h2 {
        text-transform: uppercase;
        font-size: 44px;
        font-weight: 900;
        color: #ffffff;
    }

    .sec-text-right p {
        font-size: 16px;
        font-weight: 400;
        color: #ffffff;
        width: 80%;
    }

    .sec-text-left {
        text-align: left;
    }

    .sec-text-left h2 {
        text-transform: uppercase;
        font-size: 44px;
        font-weight: 900;
        color: #ffffff;
    }

    .sec-text-left p {
        font-size: 16px;
        font-weight: 400;
        color: #ffffff;
        width: 80%;
    }

    .footer {
        position: fixed;
        bottom: 0;
        width: 100%;
        padding: 10px 20px;
        box-sizing: border-box;
        z-index: 2;
    }

    .footer-right {
        display: flex;
        align-items: center;
    }

    .loremipsum {
        color: #9C7443;
        font-family: Arial;
        font-size: 13px;
        font-style: normal;
        font-weight: 900;
        line-height: 21px;
        text-transform: uppercase;
    }

    .c-black {
        color: black;
    }

    .p-abs {
        position: absolute;
        left: 6rem;
        top: -1rem;
        width: 13rem;
    }

    .press {
        margin-left: 10px;
        font-size: 14px;
    }

    .highlight {
        color: #f39c12;
    }

    .menu-toggle {
        border-radius: 50%;
        opacity: 1;
        width: 40px;
        height: 40px;
        background: #000000;
        color: #9C7443;
        cursor: pointer;
    }

    button.menu-toggle:hover {
        background: #9C7443;
        color: #ffffff;
        cursor: pointer;
    }

    #background-video {
        position: fixed;
        right: 0;
        bottom: 0;
        min-width: 100%;
        min-height: 100%;
        z-index: -1;
    }

    .overlay-content {
        position: relative;
        z-index: 2;
    }

    .secti {
        height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
    }

.animate-in {
    animation: fadeInFlip 2s forwards;
  }

  .animate-out {
    animation: fadeOutFlip 2s forwards;
  }

  @keyframes fadeInFlip {
    0% {
      opacity: 0;
      transform: rotateX(-90deg);
    }
    100% {
      opacity: 1;
      transform: rotateX(0deg);
    }
  }

  @keyframes fadeOutFlip {
    0% {
      opacity: 1;
      transform: rotateX(0deg);
    }
    100% {
      opacity: 0;
      transform: rotateX(90deg);
    }
  }

    #loading-indicator {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 3;
        color: white;
    }
                    p.roadmaps.fw-800.webbtn {
    display: block;
    display: block;
    font-weight: 900;
    font-size: 20px;
}

                    p.roadmaps.fw-800.mobbtn {
    display: none;
}

    @media screen and (min-width: 320px) and (max-width: 520px) {
        .title {
            font-size: 44px;
        }
        .topbar.left-menu{
            display:none;
        }
        .topbar.right-menu{
            float: none;
            text-align: center;
        }
        .btn-primary.on-lorem {
            font-size: 10px;
        }
        .layout-left {
            display: none;
        }
        .layout-right {
            display: none;
        }
        p.roadmaps.fw-800.webbtn {
            display: none;
        }
        .layout-center {
            margin-right: 40px;
        }
        p.roadmaps.fw-800.mobbtn {
            display: block;
        }
        .sec-text-left h2 {
            font-size: 24px;
        }
        .sec-text-left p {
            font-size: 14px;
        }
        .sec-text-right h2 {
            font-size: 24px;
        }
        .sec-text-right p {
            font-size: 14px;
        }
      }
    
    `}
        </style>
      </Head>

      <div className="header">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="topbar left-menu">
                <button type="button" className="btn btn-primary on-lorem">
                  Play Trailer <img className="vector-icon" alt="" src="assets/img/play.png" />
                </button>
              </div>
            </div>
            <div className="col-md-6">
              <div className="topbar right-menu">
                <button type="button" className="btn btn-primary on-lorem">
                  on an Lorem here now <img className="vector-icon" alt="" src="assets/img/play.png" />
                </button>
                <button className="menu-toggle">☰</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="overlay-content">
        <section id="sec1" className="secti">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                {/* <h1 className="title">PULVERIZE</h1> */}
              </div>
            </div>
          </div>
        </section>

        <section id="sec2" className="secti animate">
          <div className="container">
            <div className="row">
              <div className="col-md-6"></div>
              <div className="col-md-6">
                <div className="sec-text-left">
                  <h2>Lorem ipsuems in, your themis</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="sec3" className="secti animate">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="sec-text-right">
                  <h2>Different heading for section 3</h2>
                  <p>Different content for section 3. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.</p>
                </div>
              </div>
              <div className="col-md-6"></div>
            </div>
          </div>
        </section>

        <section id="sec4" className="secti animate">
          <div className="container">
            <div className="row">
              <div className="col-md-6"></div>
              <div className="col-md-6">
                <div className="sec-text-left">
                  <h2>Another heading for section 4</h2>
                  <p>Another content for section 4. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="sec5" className="secti animate">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="sec-text-right">
                  <h2>Final heading for section 5</h2>
                  <p>Final content for section 5. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.</p>
                </div>
              </div>
              <div className="col-md-6"></div>

            </div>
          </div>
        </section>
      </div>

      <div className="footer">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div className="layout-left">
                <button className="btn btn-primary on-lorem" style={{ marginRight: 0, paddingRight: "20px" }}>
                  OUR ROADMAPS <img className="vector-icon" alt="" src="assets/img/3d/roadmaps.png" />
                </button>
              </div>
            </div>
            <div className="col-md-6">
              <div className="layout-center">
                <p className="roadmaps fw-800 webbtn">
                  PRESS <button className="custom-btn"><img src="assets/img/btn1.png" /></button> TO SWITCH
                </p>
                <p className="roadmaps fw-800 mobbtn"><button className="custom-btn"><img src="assets/img/btn1.png" /></button></p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="layout-right">
                <button type="button" className="btn btn-primary on-lorem" style={{ marginRight: 0, paddingRight: "20px" }}>
                  LOREM IPSUM <img src="assets/img/arrow.png" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <audio src="/audio/music.mp3" id="music" loop>
        Your browser does not support the
        <code>audio</code> element.
      </audio> */}
    </div>
  );
};

export default Home;
