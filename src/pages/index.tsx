import Head from "next/head";
import { useState } from "react";
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

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [tab, setTab] = useState<number>(0);

  const radiusContent = [
    {
      title: "Create beacons",
      description:
        "Create beacons on your location when you play, show the city - you are playing",
      image: radiusImage1
    },
    {
      title: "Show-off your skill level",
      description:
        "Whether you are a beginner, a pro turned casual or a competitive gamer - the right people will find you",
      image: radiusImage2
    },
    {
      title: "Supercharge the gaming revolution",
      description:
        "Rent out your consoles, games and gear through a trusted middle-man system. You get paid while allowing someone to jump into the rabbit hole.",
      image: radiusImage3
    },
    {
      title: "Build the local community",
      description:
        "We have hid behind Reddit and Discord usernames for long enough. Bring out the real you, be bold.",
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
      <div className="col-6 px-5">
        <div className="p-5">
          <div className="my-3">
            <div className="display-4 fw-bold">Meet</div>
            <div className="display-2 fw-bold">Radius</div>
          </div>
          <div className="h5 fw-bold" style={{ lineHeight: "2rem" }}>
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
      <div className="col-6 p-5">
        {radiusContent.map(item => (
          <div className="row w-100 extra-rounded my-5" key={item.title}>
            <div className="col-4 ps-5 pe-4 d-flex justify-content-center align-items-center">
              <img src={item.image.src} alt={item.title} width="100%" />
            </div>
            <div className="col-8 d-flex justify-content-center align-items-center">
              <div>
                <div className="fw-bold">{item.title}</div>
                <div>{item.description}</div>
              </div>
            </div>
          </div>
        ))}
        <div className="row align-items-center justify-content-center">
          <div className="col-4">Available soon on</div>
          <div className="col-4">
            <Image src={googlePlayImage} alt="Available on Google Play" style={{ width: "100%", height: "auto" }} />
          </div>
          <div className="col-4">
            <Image src={appStoreImage} alt="Available on App Store" style={{ width: "100%", height: "auto" }} />
          </div>
        </div>
        <div className="row align-items-center justify-content-center mt-4">
          <div className="col-8">
            <input type="text" className="w-100 rounded text-center h-100 p-1" placeholder="enter your email address" />
          </div>
          <div className="col-4">
            <button className="btn bg-black w-100 text-white text-small">Notify Me</button>
          </div>
        </div>
      </div>
    </div>
  );

  const vidquestContent = [
    {
      title: "Maximize your applicant pool&apos;s value",
      description: "Why leave potential gains on the table? Give every candidate a chance and make the best of your reputation",
      image: vidquestImage1
    },
    {
      title: "Break away from 1:1 deals",
      description: "1 minute of your people team&apos;s time : 1 minute of an interviewers time is not scaleable. Think efficient!",
      image: vidquestImage2
    },
    {
      title: "AI-enhanced Questions",
      description: "Get question ideas generated by AI from the candidate&apos;s resume like a gap or a career pivot or pen down your own",
      image: vidquestImage3
    },
    {
      title: "Time-stamps and Highlights",
      description: "We have hid behind Reddit and Discord usernames for long enough. Bring out the real you, be bold.Get a transcript of the candidate&apos;s interview along with AI curated highlights with their timestamps.",
      image: vidquestImage4
    },
    {
      title: "Stay reassured with product excellence",
      description: "We take product seriously, the user experience is designed to",
      image: vidquestImage5
    },
  ]

  const vidquest = (
    <div className="row w-100 blue-gradient m-0 extra-rounded text-white">
      <div className="col-6 px-5">
        <div className="p-5">
          <div className="my-3">
            <div className="display-4 fw-bold">Meet</div>
            <div className="display-2 fw-bold">VidQuest</div>
          </div>
          <div className="h5 fw-bold" style={{ lineHeight: "2rem" }}>
            Enhacing asynchronous
            <br /> interviews with AI
          </div>
        </div>
        <Image
          src={vidquestImage}
          alt="Radius App"
          className="mx-5"
          style={{ width: "90%", height: "auto" }}
        />
      </div>
      <div className="col-6 p-5">
        {vidquestContent.map(item => (
          <div className="row w-100 extra-rounded my-5" key={item.title}>
            <div className="col-4 ps-5 pe-4 d-flex justify-content-center align-items-center">
              <img src={item.image.src} alt={item.title} width="100%" />
            </div>
            <div className="col-8 d-flex justify-content-center align-items-center">
              <div>
                <div className="fw-bold">{item.title}</div>
                <div>{item.description}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="col-12 mb-5">
        <div className="h5 fw-bold text-center">Does this sound interesting? Come talk to us</div>
        <div className="d-flex justify-content-center mt-4">
          <button className="btn bg-black text-white text-small me-4">Schedule a demo</button>
          <button className="btn bg-black text-white text-small ms-4">Contact Us</button>
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
      </Head>
      <main>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light justify-content-between align-items-center my-2">
            <a className="navbar-brand" href="">
              <img
                src={logo.src}
                width="auto"
                height="30"
                alt="Optigon Ventures"
              />
            </a>
            <div className="d-flex align-items-center">
              <div
                className="mx-3 fw-bold btn border-0"
                onClick={() => setTab(0)}
              >
                For Consumers
              </div>
              <div
                className="mx-3 fw-bold btn border-0"
                onClick={() => setTab(1)}
              >
                For Enterprises
              </div>
              <div className="button bg-dark text-white px-3 py-2 rounded ms-3 fw-bold btn ">
                Talk to us
              </div>
            </div>
          </nav>
          <div className="my-5 py-5">
            <div className="display-5 text-center fw-bold">
              Hello <span style={{ fontFamily: "Emoji !important" }}>👋</span>
            </div>
            <h1 className="display-1 fw-bold text-center my-4">
              We are
              <img
                src={logo.src}
                className="ms-4"
                height="100%"
                width="auto"
                alt="Optigon Ventures"
              />
            </h1>
            <div className="my-5">
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
                <div
                  className={`m-1 p-4 border border-dark rounded btn fw-bold ${
                    tab === 0 ? "red-gradient text-white" : "bg-light"
                  }`}
                  onClick={() => setTab(0)}
                >
                  For Consumers
                </div>
                <div
                  className={`m-1 p-4 border border-dark rounded ms-0 btn ${
                    tab === 1 ? "blue-gradient text-white" : "bg-light"
                  }`}
                  onClick={() => setTab(1)}
                >
                  For Enterprises
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>{tab === 0 ? radius : vidquest}</div>
        <footer className="bg-black mt-5 py-5 text-light">
          <div className="container d-flex justify-content-between align-items-center">
            <div>
              <Image src={logoWhite} alt="Optigon Ventures" height={50} />
              <div className="mt-4">
                <div>Optigon Ventures Private Limited,</div>
                <div>32 (1072), Munusamy Salai,</div>
                <div>West K K Nagar,</div>
                <div>Chennai - 600078</div>
              </div>
            </div>
            <div className="text-end">
              <div className="fw-bold mb-3">Quick Links</div>
              <div className="my-2">Terms and Conditions</div>
              <div className="my-2">Privacy Policy</div>
              <div className="my-2">Contact Us</div>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
