import { StyledNavbar2 } from "./styles";
// import gsap from "gsap";
// import { FC, useEffect } from "react";

const Navbar2 = () => {
  // useEffect(() => {
  //   console.log("entro");

  //   const scrollEL = document.getElementById("#main-container")!;
  //   console.log(scrollEL);

  //   gsap.to(".logo", {
  //     x: 300,
  //     y: 200,
  //     duration: 2,
  //     scrollTrigger: {
  //       scroller: scrollEL,
  //       trigger: "#prueba",
  //       start: "top bottom",
  //       // end: "top top",
  //       scrub: true,
  //       markers: true,
  //     },
  //   });
  // }, []);
  return (
    <StyledNavbar2>
      <div>
        <h2 className="logo">
          <span>SM</span>
        </h2>
      </div>
      <nav>
        <div className="menu">Menu</div>
        <ul>
          <li>
            <a href="#">Proyectos</a>
          </li>
          <li>
            <a href="#">Habilidades</a>
          </li>
          <li>
            <a href="#">Contacto</a>
          </li>
        </ul>
      </nav>
    </StyledNavbar2>
  );
};

export default Navbar2;
