import form from "../../public/image/formbackground.png";
export default function Layout({ children }) {
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${form.src})`,
          width: "100vw",
          height: "100vh",
          backgroundSize: "cover",
        }}
      >
        {children}
      </div>
    </>
  );
}
