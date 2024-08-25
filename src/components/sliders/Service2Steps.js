'use client'

import { sliderProps } from "@/src/common/sliderProps";
import Link from "next/link";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

const Service2Steps = () => {

  const [activeTab, setActiveTab] = useState("tab1");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
  
  return (
    <section className="mil-deep-bg mil-p-120-0">
      <div className="container">
        <span className="mil-suptitle mil-suptitle-2 mil-mb-30">
          Our Process
        </span>
        <h2 className="mil-mb-120">
          How We <span className="mil-accent">Deliver Outstanding</span> <br />
          UI/UX Design Solutions
        </h2>
        <Swiper
          {...sliderProps.milTabsSlider}
          className="swiper-container mil-tabs-slider"
        >
          <SwiperSlide className="swiper-slide" data-hash="tab1">
            <div
              className="row justify-content-between align-items-center"
              data-swiper-parallax-y={-100}
              data-swiper-parallax-opacity={0}
            >
              <div className="col-lg-7">
                <div className="mil-hori-box mil-mb-60">
                  <h3>Discovery</h3>
                </div>
                <div className="row mil-mb-60">
                  <div className="col-lg-6">
                    <p>
                      We start by understanding your business goals, user needs, and market landscape. This phase involves in-depth research and analysis to gather the insights necessary for crafting user-centric designs.
                    </p>
                  </div>
                  <div className="col-lg-6">
                    <p>
                      Through workshops and user interviews, we identify key pain points and opportunities, laying the groundwork for a design strategy that aligns with your vision.
                    </p>
                  </div>
                </div>
                <Link
                  href="contact"
                  className="mil-button mil-border mil-mb-15 mil-mr-30"
                >
                  <span>Hire UI / UX Designers</span>
                </Link>
              </div>
              <div className="col-lg-4">
                <div
                  className="mil-circle-illustration mil-with-dots mil-mb-60"
                  data-swiper-parallax-scale=".8"
                >
                  <div className="mil-circle-bg" />
                  <div className="mil-image-frame">
                    <img src="img/uiux/discovery.jpg" alt="Discovery" />
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className="swiper-slide" data-hash="tab2">
            <div
              className="row justify-content-between align-items-center"
              data-swiper-parallax-y={-100}
              data-swiper-parallax-opacity={0}
            >
              <div className="col-lg-7">
                <div className="mil-hori-box mil-mb-60">
                  <h3>Validation</h3>
                </div>
                <div className="row mil-mb-60">
                  <div className="col-lg-6">
                    <p>
                      Prototyping and testing are crucial to validate our design hypotheses. We create wireframes and interactive prototypes to visualize the user journey and gather feedback from stakeholders.
                    </p>
                  </div>
                  <div className="col-lg-6">
                    <p>
                      Through iterative testing, we refine the designs to ensure they meet user expectations and business objectives, reducing the risk of costly revisions post-launch.
                    </p>
                  </div>
                </div>
                <Link
                  href="contact"
                  className="mil-button mil-border mil-mb-15 mil-mr-30"
                >
                  <span>Hire UI / UX Designers</span>
                </Link>
               
              </div>
              <div className="col-lg-4">
                <div
                  className="mil-circle-illustration mil-with-dots mil-mb-60"
                  data-swiper-parallax-scale=".8"
                >
                  <div className="mil-circle-bg" />
                  <div className="mil-image-frame">
                    <img src="img/uiux/validation.jpg" alt="Validation" />
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className="swiper-slide" data-hash="tab3">
            <div
              className="row justify-content-between align-items-center"
              data-swiper-parallax-y={-100}
              data-swiper-parallax-opacity={0}
            >
              <div className="col-lg-7">
                <div className="mil-hori-box mil-mb-60">
                  <h3>Design</h3>
                </div>
                <div className="row mil-mb-60">
                  <div className="col-lg-6">
                    <p>
                      Our design phase focuses on crafting beautiful, functional interfaces that resonate with users. We prioritize clarity, consistency, and accessibility in every element.
                    </p>
                  </div>
                  <div className="col-lg-6">
                    <p>
                      Whether it's a mobile app, web application, or complex enterprise software, our designs are built to provide an intuitive and seamless user experience.
                    </p>
                  </div>
                </div>
                <Link
                  href="contact"
                  className="mil-button mil-border mil-mb-15 mil-mr-30"
                >
                  <span>Hire UI / UX Designers</span>
                </Link>
               
              </div>
              <div className="col-lg-4">
                <div
                  className="mil-circle-illustration mil-with-dots mil-mb-60"
                  data-swiper-parallax-scale=".8"
                >
                  <div className="mil-circle-bg" />
                  <div className="mil-image-frame">
                    <img src="img/uiux/design.jpg" alt="Design" />
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className="swiper-slide" data-hash="tab4">
            <div
              className="row justify-content-between align-items-center"
              data-swiper-parallax-y={-100}
              data-swiper-parallax-opacity={0}
            >
              <div className="col-lg-7">
                <div className="mil-hori-box mil-mb-60">
                  <h3>Continuous Improvement</h3>
                </div>
                <div className="row mil-mb-60">
                  <div className="col-lg-6">
                    <p>
                      Post-launch, we continually monitor and analyze user feedback and performance metrics. This allows us to make data-driven improvements to enhance the user experience over time.
                    </p>
                  </div>
                  <div className="col-lg-6">
                    <p>
                      We believe in an iterative approach to design, ensuring your product evolves with user needs and market trends, maintaining its relevance and effectiveness.
                    </p>
                  </div>
                </div>
                <Link
                  href="contact"
                  className="mil-button mil-border mil-mb-15 mil-mr-30"
                >
                  <span>Hire UI / UX Designers</span>
                </Link>
               
              </div>
              <div className="col-lg-4">
                <div
                  className="mil-circle-illustration mil-with-dots mil-mb-60"
                  data-swiper-parallax-scale=".8"
                >
                  <div className="mil-circle-bg" />
                  <div className="mil-image-frame">
                    <img src="img/uiux/improve.jpg" alt="Improvement" />
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
        <div className="mil-tab-buttons mil-mt-60-adapt">
          <a
            className={activeTab === "tab1" ? "mil-active" : ""}
            href="#tab1"
            onClick={() => handleTabClick("tab1")}
          >
            <span>Discovery</span>
          </a>
          <a
            className={activeTab === "tab2" ? "mil-active" : ""}
            href="#tab2"
            onClick={() => handleTabClick("tab2")}
          >
            <span>Validation</span>
          </a>
          <a
            className={activeTab === "tab3" ? "mil-active" : ""}
            href="#tab3"
            onClick={() => handleTabClick("tab3")}
          >
            <span>Design</span>
          </a>
          <a
            className={activeTab === "tab4" ? "mil-active" : ""}
            href="#tab4"
            onClick={() => handleTabClick("tab4")}
          >
            <span>Improve</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Service2Steps;
