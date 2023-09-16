import { Rotate as Hamburger } from "hamburger-react";
import logo from "@/assets/images/logo.webp";
import logoWhite from "@/assets/images/logo-white.webp";
import { useRef, useState } from "react";
import Link from "next/link";

export default function Nav() {
  const [isNavOpen, setIsNavOpen] = useState<boolean>(false);
  const navRef = useRef<HTMLDivElement>(null);
  return (
    <nav>
      <div
        className="w-100 p-3 position-absolute d-block d-md-none"
        style={{ color: isNavOpen ? "white" : "transparent", zIndex: 0 }}
      >
        <div
          className="bg-black rounded"
          style={{ height: isNavOpen ? "auto" : 0 }}
        >
          <div style={{ paddingTop: navRef.current?.offsetHeight }}></div>
          <div
            className="px-4 pt-2 pb-4"
            style={{ display: isNavOpen ? "block" : "none" }}
          >
            <Link href="#consumers">
              <div className="my-2 text-white">For Consumers</div>
            </Link>
            <Link href="#enterprises">
              <div className="my-2 text-white">For Enterprises</div>
            </Link>
            <Link href="https://calendly.com/optigon" target="_blank" rel="noopener noreferrer">
              <div className="btn btn-outline-light w-100 my-2 text-white">
                Talk to us
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div className="d-block d-md-none w-100 p-3">
        <div
          className={`${isNavOpen ? "bg-black" : "transparent"} rounded p-2`}
          ref={navRef}
        >
          <div className=" d-flex justify-content-between align-items-center">
            <Link href="/">
              <img
                src={isNavOpen ? logoWhite.src : logo.src}
                width="auto"
                height={30}
                alt="Optigon Ventures"
                className="navbar-brand ms-2"
                style={{ position: "relative", zIndex: 2 }}
              />
            </Link>
            <div>
              <Hamburger
                size={20}
                toggled={isNavOpen}
                toggle={setIsNavOpen}
                color={isNavOpen ? "white" : "black"}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="navbar my-2 d-none d-md-flex container px-3 ps-4 navbar-expand-lg navbar-light justify-content-between align-items-center">
        <Link href="/">
          <img
            src={isNavOpen ? logoWhite.src : logo.src}
            width="auto"
            height={30}
            alt="Optigon Ventures"
          />
        </Link>
        <div className="d-md-flex align-items-center d-none">
          <Link href="#consumers">
            <div className="mx-3 fw-bold btn border-0">For Consumers</div>
          </Link>
          <Link href="#enterprises">
            <div className="mx-3 fw-bold btn border-0">For Enterprises</div>
          </Link>
          <Link href="https://calendly.com/optigon" target="_blank" rel="noopener noreferrer">
            <div className="px-3 py-2 rounded ms-3 fw-bold btn btn-dark">
              Talk to us
            </div>
          </Link>
        </div>
      </div>
    </nav>
  );
}
