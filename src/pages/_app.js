import React from "react";
import Head from "next/head";
import './index.scss';
import "../styles/globals.css";

import { register } from "swiper/element/bundle";
// register Swiper custom elements
register();

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
          {/* seo begin */}
          <title>ByteStream </title>
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta name="description" content="ByteStream is a Zimbabwean software company specializing in web and mobile app development. We provide innovative solutions to help businesses thrive in the digital world." />
          <meta name="keywords" content="ByteStream, software company, Zimbabwe, web development, mobile app development, digital solutions" />
          <meta name="author" content="ByteStream" />
          {/* seo end */}        
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
