import Image from "next/image"
import logoWhite from "@/assets/images/logo-white.webp"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-black mt-5 py-5 text-light">
      <div className="container d-flex justify-content-between align-items-center">
        <div>
          <Image src={logoWhite} alt="Optigon Ventures" height={30} />
          <div className="mt-4 small">
            <div>Optigon Ventures Private Limited,</div>
            <div>32 (1072), Munusamy Salai,</div>
            <div>West K K Nagar,</div>
            <div>Chennai - 600078</div>
          </div>
        </div>
        <div className="text-end">
          <div className="fw-bold mb-3">Quick Links</div>
          <div className="my-2"><Link className="text-white" href="/terms-and-conditions">Terms and Conditions</Link></div>
          <div className="my-2"><Link className="text-white" href="/privacy-policy">Privacy Policy</Link></div>
          <div className="my-2"><Link className="text-white" href="mailto:hello@optigon.in" target="_blank">Contact Us</Link></div>
        </div>
      </div>
    </footer>
  )
}