export default function BLM({ ...props }) {
  const divStyle = {
    backgroundColor: "black",
    color: "white",

    position: "absolute",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    fontWeight: "600",
    letterSpacing: "0.5px",
    whiteSpace: "pre",

    height: "40px",
    width: "100%",
  };

  const linkStyle = {
    color: "#F7CA18",
  };
  return (
    <div style={divStyle}>
      <span>Black Lives Matter. </span>
      <a
        href="https://blacklivesmatters.carrd.co/"
        target="_blank"
        style={linkStyle}
      >
        Here's how you can help.
      </a>
    </div>
  );
}
