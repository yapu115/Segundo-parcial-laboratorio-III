document.addEventListener("DOMContentLoaded", () => {
  const accessKey = "d3Z9u5isaIdqkRh7HLgwvBwXjsLQ6e-mPTPDicvfby0";

  // Imagenes de papas
  async function obtenerImagenesPapas() {
    try {
      // Realizamos una solicitud a la API de Unsplash utilizando la Fetch API
      const response = await fetch(
        `https://api.unsplash.com/search/photos?query=french+fries&client_id=${accessKey}`
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();

      mostrarImagenesPapas(data.results);
    } catch (error) {
      console.error("Error al obtener las imágenes:", error);
    }
  }

  // Mostramos las imágenes en el index
  function mostrarImagenesPapas(imagenes) {
    const imagenPapasFritas = imagenes[1];
    const divPapasFritas = document.querySelector(".papas-fritas");

    const img = document.createElement("img");
    img.src = imagenPapasFritas.urls.small;
    img.alt = imagenPapasFritas.alt_description;

    divPapasFritas.appendChild(img);

    const h2PapasFritas = document.createElement("H2");
    const textPapasFritas = document.createTextNode("PAPAS FRTIAS");
    h2PapasFritas.appendChild(textPapasFritas);
    divPapasFritas.appendChild(h2PapasFritas);

    const imagenPapasCheddar = imagenes[4];
    const divPapasCheddar = document.querySelector(".papas-cheddar");

    const img2 = document.createElement("img");
    img2.src = imagenPapasCheddar.urls.small;
    img2.alt = imagenPapasCheddar.alt_description;

    divPapasCheddar.appendChild(img2);

    const h2PapasCheddar = document.createElement("H2");
    const textPapasCheddar = document.createTextNode("PAPAS CON CHEDDAR");
    h2PapasCheddar.appendChild(textPapasCheddar);
    divPapasCheddar.appendChild(h2PapasCheddar);
  }

  obtenerImagenesPapas();

  // Imagenes de Coca cola
  async function obtenerImagenCocaCola() {
    try {
      // Realizamos una solicitud a la API de Unsplash utilizando la Fetch API
      const response = await fetch(
        `https://api.unsplash.com/search/photos?query=Coke+can&client_id=${accessKey}`
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();

      mostrarImagenCocaCola(data.results);
    } catch (error) {
      console.error("Error al obtener las imágenes:", error);
    }
  }

  // Mostramos las imágenes en el index
  function mostrarImagenCocaCola(imagenes) {
    const imagenCocaCola = imagenes[0];
    const divCocaCola = document.querySelector(".coca-cola");

    const img = document.createElement("img");
    img.src = imagenCocaCola.urls.small;
    img.alt = imagenCocaCola.alt_description;

    divCocaCola.appendChild(img);

    const h2CocaCola = document.createElement("H2");
    const textCocaCola = document.createTextNode("COCA COLA");
    h2CocaCola.appendChild(textCocaCola);
    divCocaCola.appendChild(h2CocaCola);
  }

  obtenerImagenCocaCola();

  // Imagenes de Sprite
  async function obtenerImagenSprite() {
    try {
      // Realizamos una solicitud a la API de Unsplash utilizando la Fetch API
      const response = await fetch(
        `https://api.unsplash.com/search/photos?query=Sprite+can&client_id=${accessKey}`
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();

      mostrarImagenSprite(data.results);
    } catch (error) {
      console.error("Error al obtener las imágenes:", error);
    }
  }

  // Mostramos las imágenes en el index
  function mostrarImagenSprite(imagenes) {
    const imagenSprite = imagenes[1];
    const divSprite = document.querySelector(".sprite");

    const img2 = document.createElement("img");
    img2.src = imagenSprite.urls.small;
    img2.alt = imagenSprite.alt_description;

    divSprite.appendChild(img2);

    const h2Sprite = document.createElement("H2");
    const textSprite = document.createTextNode("Sprite");
    h2Sprite.appendChild(textSprite);
    divSprite.appendChild(h2Sprite);
  }

  obtenerImagenSprite();
});
