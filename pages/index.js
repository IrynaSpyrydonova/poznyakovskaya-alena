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
          АЛЕНА ПОЗНЯКОВСКАЯ | практикующий психолог, нейропсихолог, HЛП и Karmalogic тренер, мотивационный спикер и сертифицированный диетолог. 
        </title>
        <meta
          name="description"
          content="Терапия для тех, кто чувствует себя непонятыми и несостоявшимися в своей жизни. Проработка таких тем, как личностный рост, улучшение материальных благ, открытие женственности/сексуальности,освобождение от детских психологических травм и др."
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
