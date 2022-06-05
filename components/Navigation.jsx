import Link from "next/link";

const menuLinks = [
  { name: "Услуги", link: "/#mainSection" },
  { name: "Обо мне", link: "/#aboutMe" },
];

export const Navigation = () => {
  return (
    <header
      style={{
        backgroundColor: "#D3B7AB",
        width: "100%",
      }}
    >
      <div
        style={{
          width: "100%",
          padding: "2vw 3vw",
        }}
      >
        <nav
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div>
            {menuLinks.map(({ name, link }) => {
              return (
                <Link
                  href={link}
                  key={link}
                  scroll={false}
                  replace
                  passHref={true}
                >
                  <a className="nav-link">{name}</a>
                </Link>
              );
            })}
          </div>

          <button
            className="btn"
            style={{
              backgroundColor: "black",
              color: "white",
              border: "1px solid black",
            }}
            onClick={() => {
              return (location.href =
                "mailto:olenapozniakovska@gmail.com?subject=Запись на консультацию");
            }}
          >
            связаться
          </button>
        </nav>
      </div>
    </header>
  );
};
