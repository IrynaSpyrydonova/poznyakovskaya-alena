import Head from "next/head";

import { Navigation } from "../components/Navigation.jsx";
import { Header } from "../components/Header.jsx";
import { MainSection } from "../components/MainSection.jsx";
import { Quote } from "../components/Quote.jsx";

import { Footer } from "../components/Footer.jsx";
import { Achievements } from "../components/Achievements.jsx";
import { AboutMe } from "../components/AboutMe.jsx";

export default function Home() {
  return (
    <div>
      <Head>
        <title>
          Alena Poznyakovskaya | Motivational Trainer of Rational Thinking
        </title>
        <meta
          name="description"
          content="An extraordinary life starts with self care. Discover three simple actions you can take right now to positively impact your body, mind and life."
        />
        <link rel="canonical" href="https://alena-poznyakovskaya.vercel.app/" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation />

      <main>
        <Header />
        <MainSection />
        <Quote />
        <AboutMe />
        <Achievements />
      </main>
      <Footer />
    </div>
  );
}
