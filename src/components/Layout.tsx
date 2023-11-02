import Head from "next/head";
import Footer from "./Footer";
import Nav from "./Nav";

export default function Layout({ title, children }: { title: string, children: React.ReactNode }) {
  return (
    <main>
      <Head>
        <title>{title}</title>
        <meta
          name="description"
          content="We are currently running some product experiments on the market."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content={title} />
        <meta
          property="og:description"
          content="We are currently running some product experiments on the market."
        />
        <meta
          property="og:image"
          content="https://optigon.in/assets/og_banner.webp"
        />
        <meta property="og:url" content="https://optigon.in" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={title} />
        <meta
          name="theme-color"
          content="#000"
          media="(prefers-color-scheme: light)"
        />
      </Head>
      <Nav />
      {children}
      <Footer />
    </main>
  );
}
