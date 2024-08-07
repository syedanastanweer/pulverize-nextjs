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
        <link href="assets/css/style.css" rel="stylesheet" />
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
