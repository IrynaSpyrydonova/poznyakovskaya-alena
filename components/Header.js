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
        src={"/alena_poznyakovskaya3.webp"}
        alt={"Alena's portret"}
        layout="fill"
        objectFit="cover"
        objectPosition="65% 35%"
        loading="eager"
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
            fontSize: "calc((4.2 - 1) * 1.2vw + 1rem)",
            fontWeight: 400,
          }}
        >
          A Safe Space for Meaningful Change
        </h1>
        <p>
          Therapy for women who feel misunderstood and invalidated in their
          lives.{" "}
        </p>
        <button
          className="btn"
          style={{
            backgroundColor: "#ead5cd",
            color: "black",
            border: "1px solid #ead5cd",
          }}
          onClick={() => {
            return (location.href =
              "mailto:name@rapidtables.com?subject=The%20subject%20of%20the%20mail");
          }}
        >
          Lets talk
        </button>
      </div>
    </div>
  );
};
