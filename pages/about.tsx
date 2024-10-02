import type { NextPage } from "next";
import Head from "next/head";
import { useEffect } from "react";
import styles from "../styles/Home.module.scss"; // Ensure this is the same stylesheet used in index.tsx

const About: NextPage = () => {
  useEffect(() => {
    let lastScrollTop = 0;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const st = window.pageYOffset || document.documentElement.scrollTop;
          if (entry.isIntersecting) {
            if (st > lastScrollTop) {
              entry.target.classList.remove("animate-out");
              entry.target.classList.add("animate-in");
            }
          } else {
            if (st < lastScrollTop) {
              entry.target.classList.remove("animate-in");
              entry.target.classList.add("animate-out");
            }
          }
          lastScrollTop = st <= 0 ? 0 : st;
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll(".animate");
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>About - PULVERIZE</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
          rel="stylesheet"
        />
        <link href="/assets/css/style.css" rel="stylesheet" />
        <style>
          {` 
    body {
      background: url('/assets/img/background.png') no-repeat center center fixed;
      background-size: cover;
      height: 100%;
    }
    .secti {
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      padding-top: 60px;
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
                  Play Trailer{" "}
                  <img className="vector-icon" alt="" src="/assets/img/play.png" />
                </button>
              </div>
            </div>
            <div className="col-md-6">
              <div className="topbar right-menu">
                <button type="button" className="btn btn-primary on-lorem">
                  on an Lorem here now a{" "}
                  <img className="vector-icon" alt="" src="/assets/img/play.png" />
                </button>
                <button className="menu-toggle">☰</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="overlay-content">

        <section id="sec1" className="secti animate">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="sec-text-left">
                  <div className="heading">
                    <h2>About<br />Jon Nelson</h2>
                  </div>
                  <div className="paragraph">
                    <p>My name is Jon Nelson, and I’m a lived-experience expert in mental health. Like millions of others, I’ve suffered from the debilitating effects of mental illness and major depressive disorder for the vast majority of my adult life.</p>
                    <p>After spending 20+ years in the world of biopharmaceutical communications, there is only one thing I’m hellbent on spending my time on these days: pulverizing the stigma of mental illness. I’m on a mission to save lives for the millions who needlessly suffer from it in silence.</p>
                    <p>A little about my backstory: I was born and raised in Pittsburgh, PA, so I bleed black and gold. I currently live with my wife and three  children in Newtown, PA.</p>
                    <p>I was first diagnosed with mental illness in 2010, and since then have participated in countless treatments over the years meant to stunt the harmful effects of mental illness.</p>
                    <p>Sadly, not one of them worked.</p>
                    <p>And so on went the devastating trappings of mental illness and depression, which not only affected me, but all of my family and friends who watched helplessly as I endured this crippling disease.</p>
                    <p>After exhausting every possible treatment option known in the world, in August of 2022 I said enough is enough. I decided to participate in a clinical trial – with only a small handful of other people in the U.S. - aimed at healing mental disorders and related depression. It couldn’t hurt - at least not more than the pain of my disease.</p>
                    <p>I underwent a procedure known as deep brain stimulation. It’s built on the scientific premise that electrical stimulation could reset brains that are in the grip of powerful and devastating psychiatric disorders such as depression, obsessive-compulsive disorder and post-traumatic stress disorder.</p>
                    <p>My medicine was, and is today, electricity.</p>
                    <p>The procedure was successful beyond my wildest dreams - the effects were instantaneous. It was as if someone literally turned a switch on and off in my brain. I have been in remission since the device was turned on.</p>
                    <p>So, all’s well that ends well, right? Nope - not even close.</p>
                    <p>Among the countless physiological and psychological challenges I’ve endured over the years, there’s one I’ve yet to overcome: the absurd stigma of mental illness. That’s because in today’s society, people who have diseases like cancer are often hailed as warriors and heroes – as they should be – while those who suffer from mental illness are heavily stigmatized. As if people could somehow just manage to “snap out of it”. Turns out that’s impossible. Mental illness is a brain disease - in fact, depression is the leading cause of disability worldwide; even more than cardiovascular disease.</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="sec-text-right">
                  <div className="image">
                    <img src="/assets/img/aboutus.png"></img>
                  </div>
                  {/* <div className="heading">
                    <h2>Lorem ipsuems in, your themis</h2>
                  </div> */}
                  <div className="paragraph">
                    <p>So, I’ve decided to take my collective experiences and put it into action to absolutely pulverize the stigma of mental illness and guarantee that patients are front and center along the way.</p>
                    <p>I work very closely with the bio pharma industry at large, serving as a strategic advisor. I also have a passion for advising several nonprofits, including One Mind and Mental Health Collaborative.</p>
                    <p>I frequently share my experiences with others via guest appearances in prominent media outlets including NPR, PBS and the Philadelphia Inquirer and on podcasts like Out of Patients and Stimulating Brains.</p>
                    <p>I am also honored to be a voice for mental health at national forums including the recent NIH congressional briefing on the BRAIN Initiative. This program, now in its 10th year, fosters better understanding of the human brain and its potential for revolutionizing treatments for neurological and neuropsychiatric disorders.</p>
                    <p>I’m just getting started.</p>
                    <p>I won’t stop until I’ve helped pulverize the stigma around mental illness so I can help save lives and build a more compassionate world.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="sec2" className="secti animate">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="sec-footer-heading">
                  <h2>Lorem ipsum dolo
                    r sit amet offer</h2>
                    <p className="para1">Lorem ipsum thems a</p>
                </div>
              </div>
              <div className="col-md-3">
                <div className="sec-footer-heading">
                  <h2>
                    Connect with US
                  </h2>
                </div>
              </div>
              <div className="col-md-3">
                <div className="sec-footer-heading">
                  <p className="para2">
                    Lorem ipsum<br />
                    Lorem ipsum dolors<br />
                    Lorem ipsum
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* <div className="footer">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div className="layout-left">
                <button
                  className="btn btn-primary on-lorem"
                  style={{ marginRight: 0, paddingRight: "20px" }}
                >
                  OUR ROADMAPS{" "}
                  <img
                    className="vector-icon"
                    alt=""
                    src="/assets/img/3d/roadmaps.png"
                  />
                </button>
              </div>
            </div>
            <div className="col-md-6">
              <div className="layout-center">
                <p className="roadmaps fw-800 webbtn">
                  PRESS{" "}
                  <button className="custom-btn">
                    <img src="/assets/img/btn1.png" />
                  </button>{" "}
                  TO SWITCH
                </p>
                <p className="roadmaps fw-800 mobbtn">
                  <button className="custom-btn">
                    <img src="assets/img/btn1.png" />
                  </button>
                </p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="layout-right">
                <button
                  type="button"
                  className="btn btn-primary on-lorem"
                  style={{ marginRight: 0, paddingRight: "20px" }}
                >
                  LOREM IPSUM <img src="/assets/img/arrow.png" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      <audio src="/audio/music.mp3" id="music" loop>
        Your browser does not support the
        <code>audio</code> element.
      </audio>
    </div>
  );
};

export default About;
