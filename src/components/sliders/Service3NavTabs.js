import { sliderProps } from "@/src/common/sliderProps";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { useState } from "react";

const Service3NavTabs = () => {
  const [activeSlide, setActiveSlide] = useState('slide1');

  const handleSlideChange = (slide) => {
    setActiveSlide(slide);
  };

  return (
    <section className="mil-p-120-60">
      <div className="mil-deco" style={{ top: 0, right: "15%" }} />
      <div className="container">
        <span className="mil-suptitle mil-suptitle-2 mil-mb-30">
          All Devices
        </span>
        <h2 className="mil-mb-90">
          <span className="mil-accent">End-to-End</span> Mobile Development
          Services
        </h2>
        <div className="row justify-content-between align-items-center">
          <div className="col-lg-5">
            <ul className="mil-tabs-left-nav mil-mb-60">
              <li className={activeSlide === "slide1" ? "mil-active" : ""}>
                <a href="#slide1" className={activeSlide === "slide1" ? "mil-active" : ""} onClick={() => handleSlideChange('slide1')}>
                  Discovery &amp; R&amp;D
                </a>
              </li>
              <li className={activeSlide === "slide2" ? "mil-active" : ""}>
                <a href="#slide2" className={activeSlide === "slide2" ? "mil-active" : ""} onClick={() => handleSlideChange('slide2')}>
                  UX/UI Design
                </a>
              </li>
              <li className={activeSlide === "slide3" ? "mil-active" : ""}>
                <a href="#slide3" className={activeSlide === "slide3" ? "mil-active" : ""} onClick={() => handleSlideChange('slide3')}>
                  Development
                </a>
              </li>
              <li className={activeSlide === "slide4" ? "mil-active" : ""}>
                <a href="#slide4" className={activeSlide === "slide4" ? "mil-active" : ""} onClick={() => handleSlideChange('slide4')}>
                  QA
                </a>
              </li>
              <li className={activeSlide === 'slide5' ? "mil-active" : ""}>
                <a href="#slide5" className={activeSlide === "slide5" ? "mil-active" : ""} onClick={() => handleSlideChange('slide5')}>
                  Launch
                </a>
              </li>
              <li className={activeSlide === 'slide6' ? "mil-active" : ""}>
                <a href="#slide6" className={activeSlide === "slide6" ? "mil-active" : ""} onClick={() => handleSlideChange('slide6')}>
                  Maintenance &amp; Support
                </a>
              </li>
            </ul>
          </div>
          <div className="col-lg-6">
            <Swiper
              {...sliderProps.milTabsSlider}
              className="swiper-container mil-tabs-slider mil-mb-60"
              onSlideChange={handleSlideChange}
            >
              <SwiperSlide className={activeSlide === 'slide1' ? "swiper-slide mil-highlight" : "swiper-slide"} data-hash="slide1">
                <div data-swiper-parallax={-100} data-swiper-parallax-opacity={0}>
                  <div className="mil-icon-frame mil-icon-bg mil-icon-frame-md mil-mb-30">
                    <img src="img/icons/md/22.svg" alt="Discovery & R&D" />
                  </div>
                  <div className="mil-mb-30">
                    <p>
                      In the Discovery and R&D phase, we work closely with you to understand your project goals, conduct in-depth market research, and lay the foundation for a successful mobile application.
                    </p>
                  </div>
                  <Link href="about" className="mil-link">
                    <span>Learn More</span>
                    <i className="fas fa-arrow-right" />
                  </Link>
                </div>
              </SwiperSlide>

              <SwiperSlide className={activeSlide === 'slide2' ? "swiper-slide mil-highlight" : "swiper-slide"} data-hash="slide2">
                <div data-swiper-parallax={-100} data-swiper-parallax-opacity={0}>
                  <div className="mil-icon-frame mil-icon-bg mil-icon-frame-md mil-mb-30">
                    <img src="img/icons/md/22.svg" alt="UX/UI Design" />
                  </div>
                  <div className="mil-mb-30">
                    <p>
                      Our UX/UI Design team creates user-centered designs that ensure your app is intuitive, engaging, and visually appealing, making the user experience seamless and enjoyable.
                    </p>
                  </div>
                  <Link href="about" className="mil-link">
                    <span>Learn More</span>
                    <i className="fas fa-arrow-right" />
                  </Link>
                </div>
              </SwiperSlide>

              <SwiperSlide className={activeSlide === 'slide3' ? "swiper-slide mil-highlight" : "swiper-slide"} data-hash="slide3">
                <div data-swiper-parallax={-100} data-swiper-parallax-opacity={0}>
                  <div className="mil-icon-frame mil-icon-bg mil-icon-frame-md mil-mb-30">
                    <img src="img/icons/md/22.svg" alt="Development" />
                  </div>
                  <div className="mil-mb-30">
                    <p>
                      Our developers use the latest technologies and best practices to build high-quality mobile applications that meet your business needs and exceed user expectations.
                    </p>
                  </div>
                  <Link href="about" className="mil-link">
                    <span>Learn More</span>
                    <i className="fas fa-arrow-right" />
                  </Link>
                </div>
              </SwiperSlide>

              <SwiperSlide className={activeSlide === 'slide4' ? "swiper-slide mil-highlight" : "swiper-slide"} data-hash="slide4">
                <div data-swiper-parallax={-100} data-swiper-parallax-opacity={0}>
                  <div className="mil-icon-frame mil-icon-bg mil-icon-frame-md mil-mb-30">
                    <img src="img/icons/md/22.svg" alt="QA" />
                  </div>
                  <div className="mil-mb-30">
                    <p>
                      Our QA team rigorously tests your app to ensure it is free of bugs, performs well across devices, and provides a flawless user experience.
                    </p>
                  </div>
                  <Link href="about" className="mil-link">
                    <span>Learn More</span>
                    <i className="fas fa-arrow-right" />
                  </Link>
                </div>
              </SwiperSlide>

              <SwiperSlide className={activeSlide === 'slide5' ? "swiper-slide mil-highlight" : "swiper-slide"} data-hash="slide5">
                <div data-swiper-parallax={-100} data-swiper-parallax-opacity={0}>
                  <div className="mil-icon-frame mil-icon-bg mil-icon-frame-md mil-mb-30">
                    <img src="img/icons/md/22.svg" alt="Launch" />
                  </div>
                  <div className="mil-mb-30">
                    <p>
                      We assist you in launching your app on the App Store and Google Play, ensuring that it meets all necessary guidelines and is optimized for visibility.
                    </p>
                  </div>
                  <Link href="about" className="mil-link">
                    <span>Learn More</span>
                    <i className="fas fa-arrow-right" />
                  </Link>
                </div>
              </SwiperSlide>

              <SwiperSlide className={activeSlide === 'slide6' ? "swiper-slide mil-highlight" : "swiper-slide"} data-hash="slide6">
                <div data-swiper-parallax={-100} data-swiper-parallax-opacity={0}>
                  <div className="mil-icon-frame mil-icon-bg mil-icon-frame-md mil-mb-30">
                    <img src="img/icons/md/22.svg" alt="Maintenance & Support" />
                  </div>
                  <div className="mil-mb-30">
                    <p>
                      Our ongoing maintenance and support services ensure your app remains up-to-date, secure, and fully functional, providing a consistent user experience.
                    </p>
                  </div>
                  <Link href="about" className="mil-link">
                    <span>Learn More</span>
                    <i className="fas fa-arrow-right" />
                  </Link>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service3NavTabs;
