import Image from "next/image";

export const Header = () => {
  return (
    <div
      style={{
        marginBottom: "30px",
        height: "80vh",
        position: "relative",
        paddingRight: "3vw",
        paddingLeft: "3vw",
      }}
    >
      <Image
        src={"/alena_poznyakovskaya5.webp"}
        alt={"Alena's portret"}
        layout="fill"
        objectFit="cover"
        objectPosition="65% 36%"
        priority={true}
        placeholder="blur"
        blurDataURL="/alena_poznyakovskaya5.webp"

      />
      <div
        style={{
          width: "50%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          zIndex: 2,
        }}
      >
        <h1
          style={{
            lineHeight: "1.308",
            fontSize: "calc((3.4 - 1) * 1.2vw + 1rem)",
            fontWeight: 400,
          }}
        >
          Ваше безопасное пространство для значимых изменений жизни
        </h1>
        <p>
          Терапия для женщин, которые чувствуют себя непонятыми и несостоявшимися в своей жизни.{" "}
        </p>
        <button
          className="btn"
          style={{
            backgroundColor: "#f2e2dc",
            color: "black",
            border: "1px solid #ead5cd",
            maxWidth:"300px"
          }}
          onClick={() => {
            return (location.href =
              "mailto:olenapozniakovska@gmail.com?subject=Запись на консультацию");
          }}
        >
          Записаться на консультацию
        </button>
      </div>
    </div>
  );
};
