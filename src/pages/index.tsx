import Head from "next/head";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Inter } from "next/font/google";
import logo from "@/assets/images/logo.webp";
import radiusImage from "@/assets/images/radius-homepage.webp";
import vidquestImage from "@/assets/images/vidquest-homepage.webp";
import appStoreImage from "@/assets/images/app_store.webp";
import googlePlayImage from "@/assets/images/play_store.webp";
import Layout from "@/components/Layout";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Home({ radiusContent, vidquestContent }: any) {
  const [tab, setTab] = useState<string>("consumers");
  const [radiusNotificationEmail, setRadiusNotificationEmail] =
    useState<string>("");

  const productContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window) {
      if (
        productContainerRef.current &&
        productContainerRef.current.offsetTop > window.pageYOffset
      ) {
        if (window.location.hash === "#enterprises") {
          setTab("enterprises");
          window.scrollTo({
            top: productContainerRef.current.offsetTop,
            behavior: "smooth",
          });
        } else if (window.location.hash === "#consumers") {
          setTab("consumers");
          window.scrollTo({
            top: productContainerRef.current.offsetTop,
            behavior: "smooth",
          });
        }
      }
    }
  });

  const radiusMailingListSubscribe = () => {
    const API_URI =
      "https://script.google.com/macros/s/AKfycbxF4Agi8gizkjo1ZWiXzIkjs9cZVaLv9gB_Xnt58D7hw18LIzNf3Me1bZVqG0emqIgbXQ/exec";
    const headers = {
      "Content-Type": "application/json",
    };
    if (
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
        radiusNotificationEmail
      )
    ) {
      fetch(API_URI, {
        redirect: "follow",
        method: "POST",
        headers,
        mode: "no-cors",
        body: JSON.stringify({
          emailAddress: radiusNotificationEmail,
          deviceType: navigator.userAgent,
        }),
      })
        .then((res) => {
          alert(
            "Thank you for subscribing to our mailing list. We will notify you when the app is available."
          );
          setRadiusNotificationEmail("");
        })
        .catch(() => {
          alert("Something went wrong. Please try again later.");
        });
    }
  };

  const radius = (
    <div
      className="row w-100 red-gradient m-0 extra-rounded text-white"
      id="consumers"
    >
      <div className="col-md col-12-6 px-5 mb-5">
        <div className="px-md-5 py-5">
          <div className="my-3">
            <div className="display-4 fw-bold text-center text-md-start">
              Meet
            </div>
            <div className="display-2 fw-bold text-center text-md-start">
              Radius
            </div>
          </div>
          <div
            className="h5 fw-bold text-center text-md-start"
            style={{ lineHeight: "2rem" }}
          >
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
        {radiusContent.map((item: any) => (
          <div className="row w-100 extra-rounded my-5" key={item.title}>
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 1,
                delay: 0,
                ease: [0, 0.71, 0.2, 1.01],
              }}
              className="col-12 col-md-4 d-flex justify-content-center align-items-center pb-3 pb-md-0"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-50 w-md-100"
              />
            </motion.div>
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
            <Image
              src={googlePlayImage}
              alt="Available on Google Play"
              style={{ width: "100%", height: "auto" }}
            />
          </div>
          <div className="col-4">
            <Image
              src={appStoreImage}
              alt="Available on App Store"
              style={{ width: "100%", height: "auto" }}
            />
          </div>
        </div>
        <div className="row align-items-center justify-content-center mt-4">
          <div className="col-7 col-md-8 ps-0">
            <input
              type="text"
              className="w-100 rounded text-center h-100 p-1"
              placeholder="enter your email address"
              onChange={(e) => setRadiusNotificationEmail(e.target.value)}
              value={radiusNotificationEmail}
            />
          </div>
          <div className="col-5 col-md-4 px-0">
            <button
              className="btn bg-black w-100 text-white text-small"
              onClick={radiusMailingListSubscribe}
            >
              Notify Me
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const vidquest = (
    <div
      className="row w-100 blue-gradient m-0 extra-rounded text-white"
      id="enterprises"
    >
      <div className="col-12 col-md-6 px-5 mb-5 container-lg">
        <div className="px-md-5 py-5">
          <div className="my-3">
            <div className="display-4 fw-bold text-center text-md-start">
              Meet
            </div>
            <div className="display-2 fw-bold text-center text-md-start">
              Vidquest
            </div>
          </div>
          <div
            className="h5 fw-bold text-center text-md-start"
            style={{ lineHeight: "2rem" }}
          >
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
        {vidquestContent.map((item: any) => (
          <div className="row w-100 mx-0 my-5" key={item.title}>
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 1,
                delay: 0,
                ease: [0, 0.71, 0.2, 1.01],
              }}
              className="col-12 col-md-4 d-flex justify-content-center align-items-center pb-3 pb-md-0"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-50 w-md-100"
              />
            </motion.div>
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
        <div className="h5 fw-bold text-center">
          Does this sound interesting? Come talk to us
        </div>
        <div className="d-flex justify-content-center mt-4">
          <Link
            href="https://calendly.com/optigon/vidquest-customerinterview?back=1"
            rel="noopener noreferrer"
            target="_blank"
          >
            <button className="btn btn-dark bg-black text-small me-4">
              Schedule a demo
            </button>
          </Link>
          <Link href="mailto:hello@optigon.in">
            <button className="btn btn-dark bg-black text-small ms-4">
              Contact Us
            </button>
          </Link>
        </div>
      </div>
    </div>
  );

  return (
    <Layout title="Optigon Ventures">
      <div className="container">
        <div className="my-md-5 mb-5 py-3 py-md-5">
          <div className="display-5 text-center fw-bold mb-2 d-none d-md-block">
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
                    tab === "consumers"
                      ? "red-gradient text-white"
                      : "bg-light"
                  }`}
                >
                  For Consumers
                </div>
              </Link>
              <Link href="#enterprises">
                <div
                  className={`m-1 p-4 border border-dark rounded ms-0 btn ${
                    tab === "enterprises"
                      ? "blue-gradient text-white"
                      : "bg-light"
                  }`}
                >
                  For Enterprises
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div ref={productContainerRef}>
        {tab === "consumers" ? radius : vidquest}
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const resp = await fetch(
    `${process.env.STRAPI_API_URI}/api/website?populate[radius][populate][0]=image&populate[vidquest][populate][1]=image`,
    { headers: { Authorization: `Bearer ${process.env.STRAPI_API_KEY}` } }
  );
  const respData = await resp.json();
  let data = {
    radiusContent: respData.data.attributes.radius.map(
      (i: any) =>
        new Object({
          title: i.title,
          description: i.description,
          image: i.image.data.attributes.url,
        })
    ),
    vidquestContent: respData.data.attributes.vidquest.map(
      (i: any) =>
        new Object({
          title: i.title,
          description: i.description,
          image: i.image.data.attributes.url,
        })
    ),
  };
  return { props: data };
}
