import Link from "next/link";

const menuLinks = [
  { name: "Services", link: "/#mainSection" },
  { name: "About", link: "/#aboutMe" },
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
                "mailto:name@rapidtables.com?subject=The%20subject%20of%20the%20mail");
            }}
          >
            Contact
          </button>
        </nav>
      </div>
    </header>
  );
};
