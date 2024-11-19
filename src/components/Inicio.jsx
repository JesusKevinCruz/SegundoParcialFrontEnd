import React from "react";

const Inicio = () => {
  return (
    <header>
      <div className="examen1">
        <p>Examén.2</p>
      </div>
      <div className="examen">
        <h1>Diseño, Segundo Parcial.</h1>
        <p>UI/UX Designer & Frontend Developer, Potosi</p>
        <div className="margen">
          <a href="#examen" className="boton">
            VER MÁS...
          </a>
        </div>
        <div className="redes">
          {[
            "https://x.com/?lang=es",
            "https://www.facebook.com/",
            "https://www.instagram.com/",
            "",
            "https://wordpress.com/es/",
          ].map((link, index) => (
            <a href={link} key={index}>
              <img
                src={`imagenes/redes${index + 1}.jpg`}
                width="15"
                height="15"
                alt={`Red social ${index + 1}`}
              />
            </a>
          ))}
        </div>
      </div>
      <img className="pc1" src="imagenes/henry_hero2.jpg" alt="Hero" />
      <button id="abrir" className="abrir">
        <i className="fas fa-bars"></i>
      </button>
      
      <img className="pc" src="imagenes/henry_hero2.jpg" alt="Hero" />
    </header>
  );
};

export default Inicio;
