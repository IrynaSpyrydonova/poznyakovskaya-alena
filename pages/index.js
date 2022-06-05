import Head from "next/head";

import { Navigation } from "../components/Navigation";
import { Header } from "../components/Header";
import { MainSection } from "../components/MainSection";
import { Quote } from "../components/Quote.jsx";

import { Footer } from "../components/Footer.jsx";
import { Achievements } from "../components/Achievements";
import { AboutMe } from "../components/AboutMe";

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
