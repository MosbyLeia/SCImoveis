document.getElementById("buscador-form").addEventListener("submit", async (event) => {
  event.preventDefault();

  // Obtener los valores del formulario
  const tipo = document.getElementById("tipo").value;
  const ubicacion = document.getElementById("ubicacion").value;
  const precioMin = document.getElementById("precio-min").value;
  const precioMax = document.getElementById("precio-max").value;

  // Crear un objeto con los parámetros de búsqueda
  const params = {
    tipo,
    ubicacion,
    precioMin: precioMin || 0,
    precioMax: precioMax || Infinity,
  };

  // Enviar la solicitud al backend
  try {
    const response = await fetch("http://localhost:3000/api/buscar", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(params),
    });

    const data = await response.json();

    // Mostrar los resultados
    const listaInmuebles = document.getElementById("lista-inmuebles");
    listaInmuebles.innerHTML = "";
    data.forEach((inmueble) => {
      const div = document.createElement("div");
      div.innerHTML = `
        <h3>${inmueble.titulo}</h3>
        <p>Ubicación: ${inmueble.ubicacion}</p>
        <p>Precio: $${inmueble.precio}</p>
      `;
      listaInmuebles.appendChild(div);
    });
  } catch (error) {
    console.error("Error al buscar inmuebles:", error);
  }
});

