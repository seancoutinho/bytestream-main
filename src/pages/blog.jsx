import PageBanner from "@/src/components/PageBanner";
import Layouts from "@/src/layouts/Layouts";
import Link from "next/link";
import blogs from '../lib/blogs'

const Blog = () => {
  return (
    <Layouts footer={2}>
      <PageBanner pageName={"Blog"} pageTitle={"Our Blog"} />
      {/* blog */}
      <section className="mil-blog mil-p-120-0">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-8 col-xl-8 mil-mb-120">
              {blogs.map(blog => (
                <Link href={`publication/${blog.slug}`} className="mil-card mil-mb-60">
                  <div className="mil-cover-frame">
                    <img src={`img/blog/${blog.img}`} alt="project" />
                  </div>
                  <div className="mil-description">
                    <div className="mil-card-title">
                      <ul className="mil-dot-list mil-text-sm mil-mb-15">
                        <li>{blog.authorTitle}</li>
                        <li>{blog.create_at}</li>
                      </ul>
                      <h4>{blog.title}</h4>
                    </div>
                    <div className="mil-card-text">
                      <p>
                        {blog.description.slice(0, 200)}...
                      </p>
                    </div>
                  </div>
                </Link>
              ))}

              <div className="mil-divider mil-mb-60" />
              <div className="mil-pagination mil-hidden-arrows">
                <div className="mil-slider-nav">
                  <div className="mil-slider-btn-prev mil-blog-prev">
                    <i className="fas fa-arrow-left" />
                    <span className="mil-h6">Prev</span>
                  </div>
                </div>
                <ul className="mil-pagination-numbers">
                  <li className="mil-active">
                    <a href="#.">1</a>
                  </li>
                  <li>
                    <a href="#.">2</a>
                  </li>
                  <li>
                    <a href="#.">3</a>
                  </li>
                </ul>
                <div className="mil-slider-nav">
                  <div className="mil-slider-btn-next mil-blog-next">
                    <span className="mil-h6">Next</span>
                    <i className="fas fa-arrow-right" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-xl-3 mil-mb-120">
              <div className="mil-mb-60">
                <h5 className="mil-list-title mil-mb-30">About ByteStream Technologies</h5>
                <p className="mil-mb-30">
                  ByteStream Technologies is a technology company based in Zimbabwe that is dedicated to providing quality software and hardware solutions to its clients.
                </p>
                <Link href="team-single" className="mil-post-sm mil-mb-15">
                  <div className="mil-cover-frame">
                    <img src="img/faces/1.jpg" alt="cover" />
                  </div>
                  <div className="mil-description">
                    <h4 className="mil-font-3 mil-accent">Sean Coutinho</h4>
                    <p className="mil-text-sm">CEO &amp; Co-Founder</p>
                  </div>
                </Link>
              </div>
              <div className="mil-divider mil-mb-60" />
              <div className="mil-mb-60">
                <h5 className="mil-list-title mil-mb-30">Recent Posts</h5>
                {blogs.map(blog => (
                  <Link href={`/publication/${blog.slug}`} className="mil-post-sm mil-mb-15">
                    <div className="mil-cover-frame">
                      <img src={`/img/blog/${blog.img}`} alt="cover" />
                    </div>
                    <div className="mil-description">
                      <h6>{blog.title}</h6>
                    </div>
                  </Link>
                ))}
              </div>
              <div className="mil-divider mil-mb-60" />
              <div className="mil-mb-60">
                <h5 className="mil-list-title mil-mb-30">Newsletter</h5>
                <form className="mil-sidebar-input-frame">
                  <input
                    type="text"
                    className="mil-sidebar-input"
                    placeholder="Your email address"
                  />
                  <button type="submit">
                    <i className="fas fa-arrow-right" />
                  </button>
                </form>
              </div>
              <div className="mil-divider mil-mb-60" />
              <h5 className="mil-list-title mil-mb-30">Contact us</h5>
              <p className="mil-mb-30">
                Looking into getting a website or an app for your business? Contact us today and we will get back to you as soon as possible.
              </p>
              <Link href="contact" className="mil-link">
                <span>Send Us A Message</span>
                <i className="fas fa-arrow-right" />
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* blog end */}
    </Layouts>
  );
};
export default Blog;
