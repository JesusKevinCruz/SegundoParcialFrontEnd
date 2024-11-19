import React from "react";

const Contacto = () => {
  return (
    <>
      {/* Mapa debajo de la barra de navegación */}
      <div className="mapa">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3160.937477751975!2d-65.7569346843471!3d-19.584100594837036!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x93f94e7684a6bd81%3A0xf43fb87c62d9cb18!2sUniversidad%20Aut%C3%B3noma%20Tom%C3%A1s%20Fr%C3%ADas%20Central!5e0!3m2!1ses!2sbo!4v1732024647743!5m2!1ses!2sbo"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Google Maps"
        ></iframe>
      </div>

      <footer>
        <div className="numero">
          <h6>¿Llamarnos?</h6>
          <p>+591 62 445344</p>
        </div>

        <div className="redes-pie">
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

        <div className="correo">
          <h6>¿Contactarnos ahora?</h6>
          <p>informatica@uatf.edu.bo</p>
        </div>
      </footer>
    </>
  );
};

export default Contacto;
