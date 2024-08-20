import Layouts from "@/src/layouts/Layouts";
import Link from "next/link";
import blogs from '../../lib/blogs'
import { useRouter } from "next/router";
const Publication = () => {

    const router = useRouter()

    const blog = blogs.find(item => item.slug === router.query.slug)

    if (!blog) {
        return (
            <>
                {/* 404 */}
                < div className="mil-dark-bg mil-add-page" >
                    <div
                        className="mil-deco mil-deco-accent"
                        style={{ top: "40vh", right: "10%", transform: "rotate(90deg)" }}
                    />
                    <img src="img/deco/map.png" alt="background" className="mil-map-bg" />
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-xl-4">
                                <div className="mil-text-center mil-mb-30">
                                    <h5 className="mil-light">Error</h5>
                                    <h1 className="mil-light mil-404-number">404</h1>
                                    <h5 className="mil-light">
                                        Page <span className="mil-accent">not</span> found
                                    </h5>
                                </div>
                            </div>
                            <div className="col-xl-4">
                                <div className="mil-404-text">
                                    <p className="mil-light-soft mil-mb-30">
                                        The page you are looking for does not exist; it may have been
                                        moved or removed altogether.
                                    </p>
                                    <Link href="home-2" className="mil-button mil-border mil-light">
                                        <span>Back to homepage</span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div >
                {/* 404 end */}
                < div className="mil-addition-bottom" >
                    <div className="container-fluid">
                        <p className="mil-text-sm mil-light-soft">© ByteStream 2023.</p>
                        <p className="mil-text-sm mil-light-soft">All Rights Reserved.</p>
                    </div>
                </div >
            </>
        )
    }

    return (
        <Layouts>
            {/* banner */}
            <div className="mil-banner-sm-2 mil-deep-bg">
                <img
                    src={`/img/blog/${blog.img}`}
                    className="mil-background-image"
                    style={{ objectPosition: "center" }}
                    alt="Publication cover"
                />
                <div className="mil-overlay" />
            </div>
            {/* banner end */}
            {/* blog */}
            <section className="mil-blog mil-p-120-0">
                <div className="container">
                    <div className="row justify-content-between">
                        <div className="col-lg-8 col-xl-8 mil-mb-120">
                            <span className="mil-suptitle mil-accent mil-mb-30">
                                {blog?.tag}
                            </span>
                            <h3 className="mil-up-font mil-mb-30">
                                {blog.title}
                            </h3>
                            <ul className="mil-dot-list mil-post-info mil-text-sm mil-mb-60">
                                <li className="mil-post-author">
                                    <img src={`/img/blog/author/${blog?.authorImage}`} alt="Author" />
                                    <span>{blog.author}</span>
                                </li>
                                <li>{blog.create_at}</li>
                                <li>{blog.readTime}</li>
                            </ul>
                            <div className="mil-divider mil-mb-60" />
                            <p className="mil-mb-30">
                                {blog?.description}
                            </p>
                            <p className="mil-mb-60">
                               {blog?.description2}
                            </p>
                            <h3 className="mil-mb-50">Let's dive deeper...</h3>
                            <p className="mil-mb-30">
                               {blog.description3}
                            </p>
                            <p className="mil-mb-60">
                                {blog.description4}
                            </p>
                            {/* <blockquote cite="google.com" className="mil-mb-60">
                                <p className="mil-text-lg mil-mb-20">
                                   {blog?.qoute}
                                </p>
                                <span className="mil-h4 mil-font-3 mil-accent">
                                    - &nbsp;John Doe
                                </span>
                            </blockquote> */}
                            <p className="mil-mb-60">
                                {blog.description5}
                            </p>
                            <div className="row mil-mb-30">
                                <div className="col-xl-6 mil-mb-30">
                                    <img
                                        src={`/img/blog/1-${blog.img}`}
                                        alt="blog"
                                        className="mil-post-image"
                                    />
                                </div>
                                <div className="col-xl-6 mil-mb-30">
                                    <img
                                        src={`/img/blog/2-${blog.img}`}
                                        alt="blog"
                                        className="mil-post-image"
                                    />
                                </div>
                            </div>
                            <h3 className="mil-mb-50">Conclusion</h3>
                            <p className="mil-mb-60">
                                {blog.conclusion}
                            </p>
                           
                            <div className="mil-divider mil-mb-60" />
                            <h5 className="mil-mb-30">Was this article helpful?</h5>
                            <a
                                href="#."
                                className="mil-button mil-border mil-button-sm mil-gray-border mil-mb-15"
                            >
                                <span>Yes, it was fine!</span>
                            </a>
                            <a
                                href="#."
                                className="mil-button mil-border mil-button-sm mil-gray-border mil-mb-60"
                            >
                                <span>No, or there was something off</span>
                            </a>
                            <div className="mil-divider mil-mb-60" />

                        </div>
                        <div className="col-lg-4 col-xl-3 mil-mb-120">
                            <div className="mil-mb-60">
                                <h5 className="mil-list-title mil-mb-30">About ByteStream</h5>
                                <p className="mil-mb-30">
                                    ByteStream Technologies is a technology company based in Zimbabwe that is dedicated to providing quality software and hardware solutions to its clients.
                                </p>
                                <Link href="team-single" className="mil-post-sm mil-mb-15">
                                    <div className="mil-cover-frame">
                                        <img src="/img/faces/1.jpg" alt="cover" />
                                    </div>
                                    <div className="mil-description">
                                        <h4 className="mil-font-3 mil-accent">Sean Coutinho</h4>
                                        <p className="mil-text-sm">CEO &amp; Founder</p>
                                    </div>
                                </Link>
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
                                Are you interested in our services and would like to speak to us?
                            </p>
                            <Link href="contact" className="mil-link mil-link-sm">
                                <span>Send Us A Message</span>
                                <i className="fas fa-arrow-right" />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </Layouts>
    );
};
export default Publication;
