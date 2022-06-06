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
            placeholder="blur"
          />
        </div>
        <div className="myApproach-content">
          <h5 style={{textTransform:'uppercase'}}> Привет, Я АЛЕНА ПОЗНЯКОВСКАЯ</h5>
          <p>
            Уже на протяжении 8 лет я практикующий психолог, нейропсихолог, HЛП и Karmalogic тренер, мотивационный спикер и сертифицированный диетолог.  
          </p>
          <p>Я также являюсь владелицей танцевальной школы «Fiesta». </p>
          <p>Замужем за прекрасным человеком, вместе воспитываем дочь Аврору. </p>
        </div>

        <div className="myApproach-img-2">
          {" "}
          <Image
            src={"/alena_with_family.webp"}
            alt={"Alena with family"}
            width={373}
            height={373}
            placeholder="blur"
          />
        </div>
      </div>
    </section>
  );
};
