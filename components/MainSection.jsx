import Image from "next/image";

export const MainSection = () => {
  return (
    <section className="mainSection" id="mainSection">
      <div
        style={{
          textAlign: "center",
          maxWidth: "1024px",
          margin: "0 auto",
          marginBottom: "80px",
        }}
      >
        <h3>Вы чувствуете, что стресс завладел вашей жизнью? </h3>
        <p>
          Вместе мы будем работать с чувством подавленности, чтобы помочь вам обрести понимание, развить силу и развить навыки совладания, чтобы предоставить вам инструменты для управления сложными эмоциями, межличностными отношениями и жизненными переменами.{" "}
        </p>
      </div>

      <div className="mainSection-content-wrapper">
        <div className="mainSection-image">
          {" "}
          <Image
            src={"/alena_portret.webp"}
            alt={"Alena's portret"}
            width={450}
            height={562}
            placeholder="blur"
            priority={true}
            blurDataURL="/alena_portret.webp"
          />
        </div>

        <div className="mainSection-content">
          <h4>ЗНАКОМЬТЕСЬ, АЛЕНА ПОЗНЯКОВСКАЯ</h4>
          <p>
            Я Алена, коуч по уходу за собой, специализируюсь на том, чтобы помочь женщинам совместить профессиональный успех с личным здоровьем и счастьем. Все начинается с того, что вы принимаете свою уникальность, уважаете свое тело и создаете ощущение баланса, чтобы вы могли процветать. Я могу помочь вам насладиться успехом, к которому вы так стремились, без необходимости жертвовать своей душой, чтобы обрести его.
          </p>
        </div>
      </div>
    </section>
  );
};
