import Image from "next/image";

export const AboutMe = () => {
  return (
    <section style={{ padding: "6vw" }} id="aboutMe">
      <div className="myApproach">
        <div className="myApproach-img-1">
          {" "}
          <Image
            src={"/alena_with_daughter.webp"}
            alt={"Alena with daughter"}
            width={450}
            height={562}
            priority={false}
          />
        </div>
        <div className="myApproach-content">
          <h5> MY APPROACH</h5>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            non pulvinar lectus. Suspendisse id diam velit. In eleifend dui et
            sapien dignissim pretium. Proin porttitor elementum tellus, sed
            pharetra ipsum sagittis in. Cras non mollis lacus, vel porttitor
            nunc. Nunc cursus ligula nulla, vitae blandit ex sagittis in.
          </p>
        </div>

        <div className="myApproach-img-2">
          {" "}
          <Image
            src={"/alena_with_family.webp"}
            alt={"Alena with family"}
            width={373}
            height={373}
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};
