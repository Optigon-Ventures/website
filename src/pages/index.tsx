import Head from "next/head";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Inter } from "next/font/google";
import logo from "@/assets/images/logo.webp";
import logoWhite from "@/assets/images/logo-white.webp";
import radiusImage from "@/assets/images/radius-homepage.webp";
import radiusImage1 from "@/assets/images/radius-1.webp"
import radiusImage2 from "@/assets/images/radius-2.webp"
import radiusImage3 from "@/assets/images/radius-3.webp"
import radiusImage4 from "@/assets/images/radius-4.webp"
import radiusImage5 from "@/assets/images/radius-5.webp"
import vidquestImage from '@/assets/images/vidquest-homepage.webp'
import vidquestImage1 from "@/assets/images/vidquest-1.webp"
import vidquestImage2 from "@/assets/images/vidquest-2.webp"
import vidquestImage3 from "@/assets/images/vidquest-3.webp"
import vidquestImage4 from "@/assets/images/vidquest-4.webp"
import vidquestImage5 from "@/assets/images/vidquest-5.webp"
import appStoreImage from "@/assets/images/app_store.webp"
import googlePlayImage from "@/assets/images/play_store.webp"
import Layout from "@/components/Layout";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [tab, setTab] = useState<string>("consumers");

  useEffect(() => {
    if (window) {
      if (window.location.hash === "#enterprises") {
        setTab("enterprises")
      } else if (window.location.hash === "#consumers") {
        setTab("consumers")
      }
    }
  })

  const radiusContent = [
    {
      title: "Create beacons",
      description:
        "Light up your gaming location, show the world where you're playing and make lifelong friends",
      image: radiusImage1
    },
    {
      title: "Show-off your skill level",
      description:
        "Every gamer has a skill level from newbie to pro. Flaunt yours and connect with your tribe.",
      image: radiusImage2
    },
    {
      title: "Supercharge the gaming revolution",
      description:
        "Rent out your consoles and games through us. You get paid while fuelling someone’s passion.",
      image: radiusImage3
    },
    {
      title: "Build the local community",
      description:
        "We have hid behind Reddit and Discord usernames for long enough. Be bold, bring out the real you.",
      image: radiusImage4
    },
    {
      title: "Engage with your favourite publishers",
      description:
        "Nab free game licenses, exclusive items, virtual currency, subscriptions, discounts and more.",
      image: radiusImage5
    },
  ]

  const radius = (
    <div className="row w-100 red-gradient m-0 extra-rounded text-white">
      <div className="col-md col-12-6 px-5 mb-5">
        <div className="px-md-5 py-5">
          <div className="my-3">
            <div className="display-4 fw-bold text-center text-md-start">Meet</div>
            <div className="display-2 fw-bold text-center text-md-start">Radius</div>
          </div>
          <div className="h5 fw-bold text-center text-md-start" style={{ lineHeight: "2rem" }}>
            Your squad&apos;s gaming
            <br /> companion, reimagined.
          </div>
        </div>
        <Image
          src={radiusImage}
          alt="Radius App"
          className="mx-5"
          style={{ width: "70%", height: "auto" }}
        />
      </div>
      <div className="col-12 col-md-6 p-5">
        {radiusContent.map(item => (
          <div className="row w-100 extra-rounded my-5" key={item.title}>
            <div className="col-12 col-md-4 d-flex justify-content-center align-items-center pb-3 pb-md-0">
              <img src={item.image.src} alt={item.title} className="w-50 w-md-100" />
            </div>
            <div className="col-12 col-md-8 d-flex justify-content-center align-items-center">
              <div className="text-center text-md-start">
                <div className="fw-bold mb-2">{item.title}</div>
                <div>{item.description}</div>
              </div>
            </div>
          </div>
        ))}
        <div className="row align-items-center justify-content-center">
          <div className="col-4 small">Available soon on</div>
          <div className="col-4">
            <Image src={googlePlayImage} alt="Available on Google Play" style={{ width: "100%", height: "auto" }} />
          </div>
          <div className="col-4">
            <Image src={appStoreImage} alt="Available on App Store" style={{ width: "100%", height: "auto" }} />
          </div>
        </div>
        <div className="row align-items-center justify-content-center mt-4">
          <div className="col-7 col-md-8 ps-0">
            <input type="text" className="w-100 rounded text-center h-100 p-1" placeholder="enter your email address" />
          </div>
          <div className="col-5 col-md-4 px-0">
            <button className="btn bg-black w-100 text-white text-small">Notify Me</button>
          </div>
        </div>
      </div>
    </div>
  );

  const vidquestContent = [
    {
      title: "Maximize your applicant pool’s value",
      description: "Your large applicant pool is a moat. Don’t ignore a large fraction of it - Give every candidate a chance.",
      image: vidquestImage1
    },
    {
      title: "Redefine interview efficiency",
      description: "You don’t have to match every minute from the candidate with a minute of yours. Get ready to scale.",
      image: vidquestImage2
    },
    {
      title: "AI-enhanced Questions",
      description: "Get question ideas generated by AI from the candidate’s resume or pen down your own.",
      image: vidquestImage3
    },
    {
      title: "Time-stamps and Highlights",
      description: "Get a timestamped transcript of the candidate’s interview along with AI-curated highlights.",
      image: vidquestImage4
    },
    {
      title: "Stay reassured with product excellence",
      description: "We ensure that the user experience is welcoming to candidates and take effort to eliminate undesirable dropoffs.",
      image: vidquestImage5
    },
  ]

  const vidquest = (
    <div className="row w-100 blue-gradient m-0 extra-rounded text-white">
      <div className="col-12 col-md-6 px-5 mb-5 container-lg">
        <div className="px-md-5 py-5">
          <div className="my-3">
            <div className="display-4 fw-bold text-center text-md-start">Meet</div>
            <div className="display-2 fw-bold text-center text-md-start">Vidquest</div>
          </div>
          <div className="h5 fw-bold text-center text-md-start" style={{ lineHeight: "2rem" }}>
            Enhacing asynchronous
            <br /> interviews with AI
          </div>
        </div>
        <Image
          src={vidquestImage}
          alt="Radius App"
          className="mx-md-5"
          style={{ width: "100%", height: "auto" }}
        />
      </div>
      <div className="col-12 col-md-6 px-5">
        {vidquestContent.map(item => (
          <div className="row w-100 mx-0 my-5" key={item.title}>
            <div className="col-12 col-md-4 d-flex justify-content-center align-items-center pb-3 pb-md-0">
              <img src={item.image.src} alt={item.title} className="w-50 w-md-100" />
            </div>
            <div className="col-12 col-md-8 d-flex justify-content-center align-items-center">
              <div className="text-center text-md-start">
                <div className="fw-bold mb-2">{item.title}</div>
                <div>{item.description}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="col-12 mb-5">
        <div className="h5 fw-bold text-center">Does this sound interesting? Come talk to us</div>
        <div className="d-flex justify-content-center mt-4">
          <button className="btn btn-dark bg-black text-small me-4">Schedule a demo</button>
          <button className="btn btn-dark bg-black text-small ms-4">Contact Us</button>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <Head>
        <title>Optigon Ventures</title>
        <meta
          name="description"
          content="We are currently running some product experiments on the market."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content="Optigon Ventures" />
        <meta
          property="og:description"
          content="We are currently running some product experiments on the market."
        />
        <meta
          property="og:image"
          content="https://optigon.in/assets/logo.webp"
        />
        <meta property="og:url" content="https://optigon.in" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Optigon Ventures" />
        <meta name="theme-color" content="#000" media="(prefers-color-scheme: light)" />
      </Head>
      <Layout>
        <div className="container">
          <div className="mb-5">
            <div className="display-5 text-center fw-bold mb-2">
              Hello <span style={{ fontFamily: "Emoji !important" }}>👋</span>
            </div>
            <h1 className="display-1 fw-bold text-center mb-3">
              We are
              <img
                src={logo.src}
                className="ms-md-4 mt-3 mt-md-0"
                height={60}
                width="auto"
                alt="Optigon Ventures"
              />
            </h1>
            <div className="mb-4">
              <p className="text-center mb-0 text-dark">
                We are currently running some product experiments on the market.
              </p>
              <p className="text-center mb-0 text-dark">
                Which one piques your interest?
              </p>
            </div>
            <div className="d-flex justify-content-center">
              <div
                style={{ backgroundColor: "#6A6A6A" }}
                className="d-flex rounded"
              >
                <Link href="#consumers">
                  <div
                    className={`m-1 p-4 border border-dark rounded btn fw-bold ${
                      tab === "consumers" ? "red-gradient text-white" : "bg-light"
                    }`}
                  >
                    For Consumers
                  </div>
                </Link>
                <Link href="#enterprises">
                  <div
                    className={`m-1 p-4 border border-dark rounded ms-0 btn ${
                      tab === "enterprises" ? "blue-gradient text-white" : "bg-light"
                    }`}
                  >
                    For Enterprises
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div>{tab === "consumers" ? radius : vidquest}</div>
      </Layout>
    </>
  );
}
