import ContactForm from "@/src/components/ContactForm";
import PageBanner from "@/src/components/PageBanner";
import Layouts from "@/src/layouts/Layouts";
import dynamic from "next/dynamic";
import LatestProjects from "../components/sliders/LatestProjects";
const Service2Steps = dynamic(
  () => import("@/src/components/sliders/Service2Steps"),
  {
    ssr: false,
  }
);
const Service2Reviews = dynamic(
  () => import("@/src/components/sliders/Service2Reviews"),
  {
    ssr: false,
  }
);


const Service2 = () => {
  return (
    <Layouts footer={2}>
      <PageBanner pageName={"Solution"} pageTitle={"UI/UX design"} />

      {/* call to action */}
      <section className="mil-p-120-90">
        <div
          className="mil-deco"
          style={{ bottom: 0, right: "25%", transform: "rotate(180deg)" }}
        />
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="mil-hori-box mil-mb-30">
                <div className="mil-mr-30">
                  <div className="mil-icon-frame mil-icon-frame-md mil-icon-bg">
                    <img src="img/icons/md/13.svg" alt="icon" />
                  </div>
                </div>
                <h5>
                  Hire our expert team of UI/UX designers on your project to provide your customized beautiful designs. Our team of designers are trained work with any development team and create stunning designs for any project. Even better you can have them work with our {" "}
                  <span className="mil-accent">
                     ByteStream developers
                  </span>{" "}
                  to transform those designs to code!
                </h5>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="mil-adaptive-right">
                <a href="/contact" className="mil-button mil-border mil-mb-30">
                  <span>Hire UI/UX Designers</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* call to action end */}
      <div className="container">
        <div className="mil-divider" />
      </div>
      {/* process */}
      <section className="mil-p-120-60">
        <div className="mil-deco" style={{ top: 0, right: "25%" }} />
        <div className="container">
          <span className="mil-suptitle mil-suptitle-2 mil-mb-30">
            High Experience
          </span>
          <h2 className="mil-mb-120">
            UI/UX <span className="mil-accent">Design Services</span> That Set
            Us Apart
          </h2>
          <div className="row">
            <div className="col-md-6 col-xl-4">
              <div className="mil-icon-box-2 mil-mb-60">
                <div className="mil-icon-frame mil-icon-frame-md mil-icon-bg mil-mb-30">
                  <img src="img/icons/md/1.svg" alt="icon" />
                </div>
                <div className="mil-box-text">
                  <h4 className="mil-mb-30">User Research</h4>
                  <p className="mil-box-text mil-mb-30">
                    Our designers team are trained to research and get feedback on what users might want to see in regards to your project and also what your competition is doing right or wrong .
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-xl-4">
              <div className="mil-icon-box-2 mil-mb-60">
                <div className="mil-icon-frame mil-icon-frame-md mil-icon-bg mil-mb-30">
                  <img src="img/icons/md/15.svg" alt="icon" />
                </div>
                <div className="mil-box-text">
                  <h4 className="mil-mb-30">Prototyping</h4>
                  <p className="mil-box-text mil-mb-30">
                    We transform your ideas into interactive, high-fidelity prototypes that
                    simulate the real user experience. This allows for early testing and
                    feedback, ensuring the final product meets user expectations and
                    business goals before development begins.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-xl-4">
              <div className="mil-icon-box-2 mil-mb-60">
                <div className="mil-icon-frame mil-icon-frame-md mil-icon-bg mil-mb-30">
                  <img src="img/icons/md/4.svg" alt="icon" />
                </div>
                <div className="mil-box-text">
                  <h4 className="mil-mb-30">UX Design</h4>
                  <p className="mil-box-text mil-mb-30">
                    Our UX design services focus on creating intuitive and seamless user
                    experiences that enhance customer satisfaction and loyalty. We employ
                    user-centered design principles to ensure your product is easy to use,
                    efficient, and enjoyable for your target audience.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-xl-4">
              <div className="mil-icon-box-2 mil-mb-60">
                <div className="mil-icon-frame mil-icon-frame-md mil-icon-bg mil-mb-30">
                  <img src="img/icons/md/13.svg" alt="icon" />
                </div>
                <div className="mil-box-text">
                  <h4 className="mil-mb-30">UI Design</h4>
                  <p className="mil-box-text mil-mb-30">
                    We craft visually engaging and cohesive interfaces that align with your
                    brand identity and appeal to your users. Our designs prioritize
                    aesthetics and functionality, ensuring that every interaction is both
                    beautiful and purposeful.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-xl-4">
              <div className="mil-icon-box-2 mil-mb-60">
                <div className="mil-icon-frame mil-icon-frame-md mil-icon-bg mil-mb-30">
                  <img src="img/icons/md/16.svg" alt="icon" />
                </div>
                <div className="mil-box-text">
                  <h4 className="mil-mb-30">UI/UX Audit and Consulting</h4>
                  <p className="mil-box-text mil-mb-30">
                    Our expert team conducts comprehensive audits of your existing digital
                    products to identify usability issues and areas for improvement. We
                    provide strategic recommendations and actionable insights to enhance
                    user engagement and optimize overall performance.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-xl-4">
              <div className="mil-icon-box-2 mil-mb-60">
                <div className="mil-icon-frame mil-icon-frame-md mil-icon-bg mil-mb-30">
                  <img src="img/icons/md/10.svg" alt="icon" />
                </div>
                <div className="mil-box-text">
                  <h4 className="mil-mb-30">Usability Testing</h4>
                  <p className="mil-box-text mil-mb-30">
                    We conduct thorough usability testing sessions with real users to
                    evaluate the effectiveness and efficiency of your product. This process
                    helps uncover usability challenges and informs necessary refinements to
                    deliver a seamless user experience.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
      {/* process end */}
      {/* call to action */}
      <section className="mil-call-to-action mil-p-120-90">
        <div
          className="mil-deco mil-deco-accent"
          style={{ bottom: 0, right: "35%", transform: "rotate(180deg)" }}
        />
        <img
          src="img/photo/15.jpg"
          className="mil-background-image"
          style={{ objectPosition: "center" }}
          alt="image"
        />
        <div className="mil-overlay" />
        <div className="container mil-relative">
          <div className="row">
            <div className="col-lg-6 mil-mb-30">
              <h3 className="mil-light mil-mb-15">
                Let’s Discuss <span className="mil-accent">Your</span> Digital{" "}
                <span className="mil-accent">Opportunity.</span>
              </h3>
              <p className="mil-light-soft">
                Unlock your digital transformation opportunities now!
              </p>
            </div>
            <div className="col-lg-6 mil-mb-30">
              <div className="mil-adaptive-right">
                <a href="/contact" className="mil-button mil-border mil-light">
                  <span>Get Started</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* call to action end */}
      {/* tech stack */}
      <section className="mil-p-120-90">
        <div className="mil-deco" style={{ top: 0, right: "15%" }} />
        <div className="container">
          <span className="mil-suptitle mil-suptitle-2 mil-mb-30">
            Our Tools
          </span>
          <h2 className="mil-mb-90">
            Our Design <span className="mil-accent">Technology Stack</span>
          </h2>
          <div className="row mil-grid-lines">
            <div className="col-sm-6 col-md-4 col-lg-3">
              <div className="mil-item-card">
                <h6>Figma</h6>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-3">
              <div className="mil-item-card">
                <h6>Photoshop</h6>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-3">
              <div className="mil-item-card">
                <h6>Sketch</h6>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-3">
              <div className="mil-item-card">
                <h6>Adobe XD</h6>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-3">
              <div className="mil-item-card">
                <h6>Zeplin</h6>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-3">
              <div className="mil-item-card">
                <h6>Illustrator</h6>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-3">
              <div className="mil-item-card">
                <h6>InVision</h6>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-3">
              <div className="mil-item-card">
                <h6>Axure RP</h6>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-3">
              <div className="mil-item-card">
                <h6>Balsamiq</h6>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-3">
              <div className="mil-item-card">
                <h6>ProtoPie</h6>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-3">
              <div className="mil-item-card">
                <h6>Marvel App</h6>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-3">
              <div className="mil-item-card">
                <h6>Framer</h6>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* tech stack end */}
      {/* ??? */}
      <section className="mil-gradient-bg mil-p-120-60">
        <div className="container">
          <div className="mil-mb-90">
            <span className="mil-suptitle mil-suptitle-2 mil-mb-30 mil-light">
              Our Expertise
            </span>
            <h2 className="mil-light">
              What Our <span className="mil-accent">UI/UX Design</span> <br />
              Team Excels At
            </h2>
          </div>
          <div className="row mil-mb-30-adapt">
            <div className="col-xl-4">
              <div className="mil-mb-60">
                <div className="mil-number-icon mil-light mil-circle mil-mb-30">
                  <span>01</span>
                </div>
                <h4 className="mil-light mil-mb-15">User Research</h4>
                <p className="mil-light-soft">
                  We dive deep into understanding your users' needs, behaviors, and pain points, ensuring that every design decision is data-driven and user-focused.
                </p>
              </div>
            </div>
            <div className="col-xl-4">
              <div className="mil-mb-60">
                <div className="mil-number-icon mil-light mil-lines mil-mb-30">
                  <span>02</span>
                </div>
                <h4 className="mil-light mil-mb-15">Wireframing & Prototyping</h4>
                <p className="mil-light-soft">
                  From basic wireframes to interactive prototypes, we create detailed blueprints that map out the user journey and validate design concepts early in the process.
                </p>
              </div>
            </div>
            <div className="col-xl-4">
              <div className="mil-mb-60">
                <div className="mil-number-icon mil-light mil-mb-30">
                  <span>03</span>
                </div>
                <h4 className="mil-light mil-mb-15">UI Design</h4>
                <p className="mil-light-soft">
                  Our UI design focuses on creating visually stunning, user-friendly interfaces that enhance the overall user experience, aligning aesthetics with functionality.
                </p>
              </div>
            </div>
            <div className="col-xl-4">
              <div className="mil-mb-60">
                <div className="mil-number-icon mil-light mil-mb-30">
                  <span>04</span>
                </div>
                <h4 className="mil-light mil-mb-15">Interaction Design</h4>
                <p className="mil-light-soft">
                  We design intuitive interactions that guide users seamlessly through digital products, ensuring every click, swipe, and scroll feels natural and engaging.
                </p>
              </div>
            </div>
            <div className="col-xl-4">
              <div className="mil-mb-60">
                <div className="mil-number-icon mil-light mil-circle mil-mb-30">
                  <span>05</span>
                </div>
                <h4 className="mil-light mil-mb-15">Usability Testing</h4>
                <p className="mil-light-soft">
                  Our rigorous usability testing uncovers potential issues before they become problems, allowing us to refine and perfect the user experience.
                </p>
              </div>
            </div>
            <div className="col-xl-4">
              <div className="mil-mb-60">
                <div className="mil-number-icon mil-light mil-lines mil-mb-30">
                  <span>06</span>
                </div>
                <h4 className="mil-light mil-mb-15">UI/UX Consulting</h4>
                <p className="mil-light-soft">
                  We provide expert UI/UX consulting to help businesses optimize their digital products, aligning user experience strategies with their goals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Service2Steps />
      <ContactForm />
    </Layouts>
  );
};
export default Service2;
