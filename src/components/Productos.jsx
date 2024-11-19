import React from "react";

const Productos = () => {
  return (
    <section className="bloque1">
      {[
        { src: "imagenes/034.jpg", title: "The Vegan" },
        { src: "imagenes/011.jpg", title: "Cinco de Mayo" },
        { src: "imagenes/030.jpg", title: "Project Spartans" },
        { src: "imagenes/035.jpg", title: "True Hipsters" },
      ].map((item, index) => (
        <div className="cont1" key={index}>
          <img src={item.src} alt={item.title} />
          <h3>{item.title}</h3>
        </div>
      ))}
    </section>
  );
};

export default Productos;
