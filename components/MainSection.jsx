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
        <h3>Do you feel like stress has taken over your life? </h3>
        <p>
          Together we will work through the feelings of overwhelm to help you
          gain insight, cultivate strength, and develop coping skills to provide
          you with the tools to manage difficult emotions, interpersonal
          relationships, and life transitions.{" "}
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
            loading="lazy"
          />
        </div>

        <div className="mainSection-content">
          <h4>Meet Alena Poznyakovskaya</h4>
          <p>
            I’m Alena, The Self Care Coach, specialising in helping women to
            balance professional success with their personal health and
            happiness. It starts with embracing your uniqueness, respecting your
            body and creating a sense of balance so you can thrive. I can help
            you enjoy the success you’ve strived so hard to achieve without
            having to sacrifice your soul to find it.
          </p>
        </div>
      </div>
    </section>
  );
};
