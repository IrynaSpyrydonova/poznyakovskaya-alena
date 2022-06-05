import Image from "next/image";

const footerLinks = [
  {
    link: "",
    image: "/icon-facebook.svg",
    alt: "Facebook icon",
    width: 10,
    height: 16,
  },
  {
    link: "",
    image: "/icon-twitter.svg",
    alt: "Twitter icon",
    width: 17,
    height: 17,
  },
  {
    link: "",
    image: "/icon-linkedin.svg",
    alt: "LinkedIn icon",
    width: 17,
    height: 17,
  },
  {
    link: "",
    image: "/icon-youtube.svg",
    alt: "Youtube icon",
    width: 17,
    height: 17,
  },
  {
    link: "",
    image: "/icon-instagram.svg",
    alt: "Instagram icon",
    width: 17,
    height: 17,
  },
];

export const Footer = () => {
  return (
    <footer className="footer" style={{ backgroundColor: "#ead5cd" }}>
      <small
        style={{
          display: "flex",
          flexWrap: "wrap",
          fontFamily: "Raleway",
          letterSpacing: "0.04em",
          fontWeight: 600,
        }}
      >
        &copy; Copyright {new Date().getFullYear()}. All Rights Reserved
      </small>
      <div style={{ display: "flex" }}>
        {footerLinks.map(({ link, image, alt, width, height }) => {
          return (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              key={alt}
              aria-hidden="true"
            >
              <span>
                <Image
                  src={image}
                  alt={alt}
                  width={width}
                  height={height}
                />
              </span>
            </a>
          );
        })}
      </div>
    </footer>
  );
};
