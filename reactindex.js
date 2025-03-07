// // // import { useState } from "react";

// // // const App = () => {
// // //   const [departamentos, setDepartamentos] = useState([]);
// // //   const [buscando, setBuscando] = useState(false);

// // //   const buscarDepartamentos = () => {
// // //     setBuscando(true);

// // //     // Reemplaza estos valores con tus datos
// // //     const SHEET_ID = "15tPjWzDhuBFmgCTgn5fkw2HJ2nZuohNI-BviD3oYY-I";
// // //     const SHEET_NAME = "Hoja"; // O el nombre de la pestaña que tengas en tu hoja de cálculo
// // //     const API_KEY = "AIzaSyBBExYjV_CFbwnnFCwY7wAIUgtHpLNHyBk"; // Reemplaza con tu clave de API de Google

// // //     const url = `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${SHEET_NAME}?key=${API_KEY}`;

// // //     fetch(url)
// // //       .then((res) => res.json())
// // //       .then((data) => {
// // //         console.log("Respuesta de la API:", data); // Ver el contenido de la respuesta
// // //         if (data.values && data.values.length > 0) {
// // //           const items = data.values.map((entry) => ({
// // //             id: entry[0], // Asumiendo que la columna de ID está en la primera columna
// // //             titulo: entry[1], // Asumiendo que la columna de título está en la segunda columna
// // //             precio: entry[2], // Asumiendo que la columna de precio está en la tercera columna
// // //             ubicacion: entry[3], // Asumiendo que la columna de ubicación está en la cuarta columna
// // //             // imagen: entry[4], // Asumiendo que la columna de imagen está en la quinta columna
// // //           }));
// // //           setDepartamentos(items);
// // //         } else {
// // //           console.error("No se encontraron datos válidos en la hoja");
// // //         }
// // //         setBuscando(false);
// // //       })
// // //       .catch((error) => {
// // //         console.error("Error al buscar departamentos:", error.message);
// // //         setBuscando(false);
// // //       });
// // //   };

// // //   return (
// // //     <div>
// // //       <h1>Buscar Departamentos</h1>
// // //       <button onClick={buscarDepartamentos} disabled={buscando}>
// // //         {buscando ? "Buscando..." : "Buscar"}
// // //       </button>

// // //       <div>
// // //         {departamentos.map((dpto) => (
// // //           <div key={dpto.id}>
// // //             <h2>{dpto.titulo}</h2>
// // //             <p>Ubicación: {dpto.ubicacion}</p>
// // //             <p>Precio: ${dpto.precio}</p>
// // //             {/* Asegúrate de que la imagen sea válida antes de renderizarla */}
// // //             {/* {dpto.imagen && (
// // //               <img src={dpto.imagen} alt={dpto.titulo} width="300" />
// // //             )} */}
// // //           </div>
// // //         ))}
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default App;

// // import { useState } from "react";

// // const App = () => {
// //   const [departamentos, setDepartamentos] = useState([]);
// //   const [buscando, setBuscando] = useState(false);
// //   const [filtros, setFiltros] = useState({ tipo: "", ubicacion: "" });

// //   const buscarDepartamentos = () => {
// //     setBuscando(true);

// //     const SHEET_ID = "15tPjWzDhuBFmgCTgn5fkw2HJ2nZuohNI-BviD3oYY-I";
// //     const SHEET_NAME = "Hoja";
// //     const API_KEY = "AIzaSyBBExYjV_CFbwnnFCwY7wAIUgtHpLNHyBk";
// //     const url = `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${SHEET_NAME}?key=${API_KEY}`;

// //     fetch(url)
// //       .then((res) => res.json())
// //       .then((data) => {
// //         if (data.values && data.values.length > 1) {
// //           // Verifica que haya más de una fila
// //           const items = data.values.slice(1).map((entry) => ({
// //             // Ignora la primera fila (encabezados)
// //             id: entry[0],
// //             titulo: entry[1],
// //             ubicacion: entry[2],
// //             precio: entry[3],
// //             tipo: entry[4],
// //           }));
// //           setDepartamentos(items);
// //         } else {
// //           console.error("No se encontraron datos válidos en la hoja");
// //         }
// //         setBuscando(false);
// //       })
// //       .catch((error) => {
// //         console.error("Error al buscar departamentos:", error.message);
// //         setBuscando(false);
// //       });
// //   };

// //   const handleFiltroChange = (e) => {
// //     setFiltros({ ...filtros, [e.target.name]: e.target.value });
// //   };

// //   const departamentosFiltrados = departamentos.filter(
// //     (dpto) =>
// //       (filtros.tipo === "" ||
// //         dpto.tipo.toLowerCase() === filtros.tipo.toLowerCase()) &&
// //       (filtros.ubicacion === "" ||
// //         dpto.ubicacion.toLowerCase().includes(filtros.ubicacion.toLowerCase()))
// //   );

// //   return (
// //     <div className="container py-5">
// //       <h2 className="text-center mb-4">Busca tu próximo hogar</h2>
// //       <form>
// //         <div className="form-group mb-3">
// //           <label htmlFor="tipo">Tipo de Propiedad:</label>
// //           <select
// //             id="tipo"
// //             name="tipo"
// //             className="form-control"
// //             onChange={handleFiltroChange}
// //           >
// //             <option value="">Todos</option>
// //             <option value="casa">Casa</option>
// //             <option value="departamento">Departamento</option>
// //             <option value="local">Local Comercial</option>
// //           </select>
// //         </div>

// //         <div className="form-group mb-3">
// //           <label htmlFor="ubicacion">Ubicación:</label>
// //           <input
// //             type="text"
// //             id="ubicacion"
// //             name="ubicacion"
// //             className="form-control"
// //             placeholder="Ciudad o barrio"
// //             onChange={handleFiltroChange}
// //           />
// //         </div>

// //         <div className="d-grid gap-2 d-md-flex justify-content-md-end">
// //           <button
// //             type="button"
// //             className="btn btn-secondary"
// //             onClick={buscarDepartamentos}
// //             disabled={buscando}
// //           >
// //             {buscando ? "Buscando..." : "Buscar"}
// //           </button>
// //         </div>
// //       </form>

// //       <section id="resultados" className="container mt-4">
// //         <div className="row">
// //           {departamentosFiltrados.map((dpto) => (
// //             <div key={dpto.id} className="col-md-4 mb-4">
// //               <div className="card">
// //                 <div className="card-body">
// //                   <h5 className="card-title">{dpto.titulo}</h5>
// //                   <p className="card-text">Ubicación: {dpto.ubicacion}</p>
// //                   <p className="card-text">Precio: ${dpto.precio}</p>
// //                 </div>
// //               </div>
// //             </div>
// //           ))}
// //         </div>
// //       </section>
// //     </div>
// //   );
// // };

// // export default App;

// import { useState } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";

// const App = () => {
//   const [departamentos, setDepartamentos] = useState([]);
//   const [buscando, setBuscando] = useState(false);
//   const [filtros, setFiltros] = useState({ tipo: "", ubicacion: "" });

//   const buscarDepartamentos = () => {
//     setBuscando(true);

//     const SHEET_ID = "15tPjWzDhuBFmgCTgn5fkw2HJ2nZuohNI-BviD3oYY-I";
//     const SHEET_NAME = "Hoja";
//     const API_KEY = "AIzaSyBBExYjV_CFbwnnFCwY7wAIUgtHpLNHyBk";
//     const url = `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${SHEET_NAME}?key=${API_KEY}`;

//     fetch(url)
//       .then((res) => res.json())
//       .then((data) => {
//         if (data.values && data.values.length > 1) {
//           const items = data.values.slice(1).map((entry, index) => ({
//             id: index,
//             titulo: entry[1],
//             ubicacion: entry[2],
//             precio: entry[3],
//             tipo: entry[4],
//           }));
//           setDepartamentos(items);
//         } else {
//           console.error("No se encontraron datos válidos en la hoja");
//         }
//         setBuscando(false);
//       })
//       .catch((error) => {
//         console.error("Error al buscar departamentos:", error.message);
//         setBuscando(false);
//       });
//   };

//   const handleFiltroChange = (e) => {
//     setFiltros({ ...filtros, [e.target.name]: e.target.value });
//   };

//   const departamentosFiltrados = departamentos.filter(
//     (dpto) =>
//       (filtros.tipo === "" ||
//         dpto.tipo.toLowerCase() === filtros.tipo.toLowerCase()) &&
//       (filtros.ubicacion === "" ||
//         dpto.ubicacion.toLowerCase().includes(filtros.ubicacion.toLowerCase()))
//   );

//   return (
//     <div>
//       <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
//         <div className="container">
//           <a className="navbar-brand" href="#">
//             <img src="Logo.jpg" alt="Logo" style={{ maxWidth: "120px" }} />
//           </a>
//         </div>
//       </nav>

//       <div className="container py-5 mt-5">
//         <h2 className="text-center mb-4">Busca tu próximo hogar</h2>
//         <form className="row g-3">
//           <div className="col-md-6">
//             <label htmlFor="tipo" className="form-label">
//               Tipo de Propiedad:
//             </label>
//             <select
//               id="tipo"
//               name="tipo"
//               className="form-control"
//               onChange={handleFiltroChange}
//             >
//               <option value="">Todos</option>
//               <option value="casa">Casa</option>
//               <option value="departamento">Departamento</option>
//               <option value="local">Local Comercial</option>
//             </select>
//           </div>

//           <div className="col-md-6">
//             <label htmlFor="ubicacion" className="form-label">
//               Ubicación:
//             </label>
//             <input
//               type="text"
//               id="ubicacion"
//               name="ubicacion"
//               className="form-control"
//               placeholder="Ciudad o barrio"
//               onChange={handleFiltroChange}
//             />
//           </div>

//           <div className="col-12 text-end">
//             <button
//               type="button"
//               className="btn btn-secondary"
//               onClick={buscarDepartamentos}
//               disabled={buscando}
//             >
//               {buscando ? "Buscando..." : "Buscar"}
//             </button>
//           </div>
//         </form>
//       </div>

//       <section id="resultados" className="container mt-4">
//         <div className="row">
//           {departamentosFiltrados.map((dpto) => (
//             <div key={dpto.id} className="col-md-4 mb-4">
//               <div className="card shadow-sm">
//                 <div className="card-body">
//                   <h5 className="card-title">{dpto.titulo}</h5>
//                   <p className="card-text">
//                     <strong>Ubicación:</strong> {dpto.ubicacion}
//                   </p>
//                   <p className="card-text">
//                     <strong>Precio:</strong> ${dpto.precio}
//                   </p>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>

//       <footer className="bg-light text-center py-3 mt-5">
//         <p>&copy; 2024 SC Imóveis. Todos los derechos reservados.</p>
//       </footer>
//     </div>
//   );
// };

// export default App;

// import { useState } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";

// const App = () => {
//   const [departamentos, setDepartamentos] = useState([]);
//   const [buscando, setBuscando] = useState(false);
//   const [filtros, setFiltros] = useState({ tipo: "", ubicacion: "" });
//   const [imagenAmpliada, setImagenAmpliada] = useState(null); // Estado para la imagen ampliada

//   const buscarDepartamentos = () => {
//     setBuscando(true);

//     const SHEET_ID = "15tPjWzDhuBFmgCTgn5fkw2HJ2nZuohNI-BviD3oYY-I";
//     const SHEET_NAME = "Hoja";
//     const API_KEY = "AIzaSyBBExYjV_CFbwnnFCwY7wAIUgtHpLNHyBk";
//     const url = `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${SHEET_NAME}?key=${API_KEY}`;

//     fetch(url)
//       .then((res) => res.json())
//       .then((data) => {
//         if (data.values && data.values.length > 1) {
//           const items = data.values.slice(1).map((entry, index) => ({
//             id: index,
//             titulo: entry[1],
//             ubicacion: entry[2],
//             precio: entry[3],
//             tipo: entry[4],
//             imagen: entry[5], // Supongo que la imagen está en la columna 5
//           }));
//           setDepartamentos(items);
//         } else {
//           console.error("No se encontraron datos válidos en la hoja");
//         }
//         setBuscando(false);
//       })
//       .catch((error) => {
//         console.error("Error al buscar departamentos:", error.message);
//         setBuscando(false);
//       });
//   };

//   const handleFiltroChange = (e) => {
//     setFiltros({ ...filtros, [e.target.name]: e.target.value });
//   };

//   const departamentosFiltrados = departamentos.filter(
//     (dpto) =>
//       (filtros.tipo === "" ||
//         dpto.tipo.toLowerCase() === filtros.tipo.toLowerCase()) &&
//       (filtros.ubicacion === "" ||
//         dpto.ubicacion.toLowerCase().includes(filtros.ubicacion.toLowerCase()))
//   );

//   // Función para abrir la imagen en tamaño completo
//   const abrirImagen = (imagenUrl) => {
//     setImagenAmpliada(imagenUrl);
//   };

//   // Función para cerrar el modal de la imagen
//   const cerrarImagen = () => {
//     setImagenAmpliada(null);
//   };

//   return (
//     <div>
//       <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
//         <div className="container">
//           <a className="navbar-brand" href="#">
//             <img src="Logo.jpg" alt="Logo" style={{ maxWidth: "120px" }} />
//           </a>
//         </div>
//       </nav>

//       <div className="container py-5 mt-5">
//         <h2 className="text-center mb-4">Busca tu próximo hogar</h2>
//         <form className="row g-3">
//           <div className="col-md-6">
//             <label htmlFor="tipo" className="form-label">
//               Tipo de Propiedad:
//             </label>
//             <select
//               id="tipo"
//               name="tipo"
//               className="form-control"
//               onChange={handleFiltroChange}
//             >
//               <option value="">Todos</option>
//               <option value="casa">Casa</option>
//               <option value="departamento">Departamento</option>
//               <option value="local">Local Comercial</option>
//             </select>
//           </div>

//           <div className="col-md-6">
//             <label htmlFor="ubicacion" className="form-label">
//               Ubicación:
//             </label>
//             <input
//               type="text"
//               id="ubicacion"
//               name="ubicacion"
//               className="form-control"
//               placeholder="Ciudad o barrio"
//               onChange={handleFiltroChange}
//             />
//           </div>

//           <div className="col-12 text-end">
//             <button
//               type="button"
//               className="btn btn-secondary"
//               onClick={buscarDepartamentos}
//               disabled={buscando}
//             >
//               {buscando ? "Buscando..." : "Buscar"}
//             </button>
//           </div>
//         </form>
//       </div>

//       <section id="resultados" className="container mt-4">
//         <div className="row">
//           {departamentosFiltrados.map((dpto) => (
//             <div key={dpto.id} className="col-md-4 mb-4">
//               <div
//                 className="card shadow-sm"
//                 onClick={() => abrirImagen(dpto.imagen)}
//               >
//                 <div className="card-body">
//                   <h5 className="card-title">{dpto.titulo}</h5>
//                   <p className="card-text">
//                     <strong>Ubicación:</strong> {dpto.ubicacion}
//                   </p>
//                   <p className="card-text">
//                     <strong>Precio:</strong> ${dpto.precio}
//                   </p>
//                   {dpto.imagen && (
//                     <img
//                       src={dpto.imagen}
//                       alt={dpto.titulo}
//                       className="img-fluid"
//                       style={{ maxHeight: "200px", objectFit: "cover" }}
//                     />
//                   )}
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Modal para mostrar la imagen ampliada */}
//       {imagenAmpliada && (
//         <div
//           className="modal show"
//           style={{
//             display: "block",
//             position: "fixed",
//             top: "0",
//             left: "0",
//             right: "0",
//             bottom: "0",
//             backgroundColor: "rgba(0, 0, 0, 0.7)",
//           }}
//           onClick={cerrarImagen}
//         >
//           <div className="modal-dialog modal-lg" style={{ maxWidth: "80%" }}>
//             <div className="modal-content">
//               <div className="modal-body text-center">
//                 <img
//                   src={imagenAmpliada}
//                   alt="Imagen ampliada"
//                   className="img-fluid"
//                   style={{ maxHeight: "80vh" }}
//                 />
//               </div>
//               <div className="modal-footer">
//                 <button className="btn btn-secondary" onClick={cerrarImagen}>
//                   Cerrar
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}

//       <footer className="bg-light text-center py-3 mt-5">
//         <p>&copy; 2024 SC Imóveis. Todos los derechos reservados.</p>
//       </footer>
//     </div>
//   );
// };

// export default App;

// import { useState } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";

// const App = () => {
//   const [departamentos, setDepartamentos] = useState([]);
//   const [buscando, setBuscando] = useState(false);
//   const [filtros, setFiltros] = useState({ tipo: "", ubicacion: "" });
//   const [imagenAmpliada, setImagenAmpliada] = useState(null); // Estado para la imagen ampliada

//   const buscarDepartamentos = () => {
//     setBuscando(true);

//     const SHEET_ID = "15tPjWzDhuBFmgCTgn5fkw2HJ2nZuohNI-BviD3oYY-I";
//     const SHEET_NAME = "Hoja";
//     const API_KEY = "AIzaSyBBExYjV_CFbwnnFCwY7wAIUgtHpLNHyBk";
//     const url = `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${SHEET_NAME}?key=${API_KEY}`;

//     fetch(url)
//       .then((res) => res.json())
//       .then((data) => {
//         if (data.values && data.values.length > 1) {
//           const items = data.values.slice(1).map((entry, index) => ({
//             id: index,
//             titulo: entry[1],
//             ubicacion: entry[2],
//             precio: entry[3],
//             tipo: entry[4],
//             imagen: entry[5], // Supongo que la imagen está en la columna 5
//           }));
//           setDepartamentos(items);
//         } else {
//           console.error("No se encontraron datos válidos en la hoja");
//         }
//         setBuscando(false);
//       })
//       .catch((error) => {
//         console.error("Error al buscar departamentos:", error.message);
//         setBuscando(false);
//       });
//   };

//   const handleFiltroChange = (e) => {
//     setFiltros({ ...filtros, [e.target.name]: e.target.value });
//   };

//   const departamentosFiltrados = departamentos.filter(
//     (dpto) =>
//       (filtros.tipo === "" ||
//         dpto.tipo.toLowerCase() === filtros.tipo.toLowerCase()) &&
//       (filtros.ubicacion === "" ||
//         dpto.ubicacion.toLowerCase().includes(filtros.ubicacion.toLowerCase()))
//   );

//   // Función para abrir la imagen en tamaño completo
//   const abrirImagen = (imagenUrl) => {
//     setImagenAmpliada(imagenUrl);
//   };

//   // Función para cerrar el modal de la imagen
//   const cerrarImagen = () => {
//     setImagenAmpliada(null);
//   };

//   return (
//     <div>
//       <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
//         <div className="container">
//           <a className="navbar-brand" href="#">
//             <img src="Logo.jpg" alt="Logo" style={{ maxWidth: "120px" }} />
//           </a>
//         </div>
//       </nav>

//       <div className="container py-5 mt-5">
//         <h2 className="text-center mb-4">Busca tu próximo hogar</h2>
//         <form className="row g-3">
//           <div className="col-md-6">
//             <label htmlFor="tipo" className="form-label">
//               Tipo de Propiedad:
//             </label>
//             <select
//               id="tipo"
//               name="tipo"
//               className="form-control"
//               onChange={handleFiltroChange}
//             >
//               <option value="">Todos</option>
//               <option value="casa">Casa</option>
//               <option value="departamento">Departamento</option>
//               <option value="local">Local Comercial</option>
//             </select>
//           </div>

//           <div className="col-md-6">
//             <label htmlFor="ubicacion" className="form-label">
//               Ubicación:
//             </label>
//             <input
//               type="text"
//               id="ubicacion"
//               name="ubicacion"
//               className="form-control"
//               placeholder="Ciudad o barrio"
//               onChange={handleFiltroChange}
//             />
//           </div>

//           <div className="col-12 text-end">
//             <button
//               type="button"
//               className="btn btn-secondary"
//               onClick={buscarDepartamentos}
//               disabled={buscando}
//             >
//               {buscando ? "Buscando..." : "Buscar"}
//             </button>
//           </div>
//         </form>
//       </div>

//       <section id="resultados" className="container mt-4">
//         <div className="row">
//           {departamentosFiltrados.map((dpto) => (
//             <div key={dpto.id} className="col-md-4 mb-4">
//               <div
//                 className="card shadow-sm"
//                 onClick={() => abrirImagen(dpto.imagen)}
//               >
//                 <div className="card-body">
//                   <h5 className="card-title">{dpto.titulo}</h5>
//                   <p className="card-text">
//                     <strong>Ubicación:</strong> {dpto.ubicacion}
//                   </p>
//                   <p className="card-text">
//                     <strong>Precio:</strong> ${dpto.precio}
//                   </p>
//                   {dpto.imagen && (
//                     <img
//                       src={dpto.imagen}
//                       alt={dpto.titulo}
//                       className="img-fluid"
//                       style={{ maxHeight: "200px", objectFit: "cover" }}
//                     />
//                   )}
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Modal para mostrar la imagen ampliada */}
//       {imagenAmpliada && (
//         <div
//           className="modal show"
//           style={{
//             display: "block",
//             position: "fixed",
//             top: "0",
//             left: "0",
//             right: "0",
//             bottom: "0",
//             backgroundColor: "rgba(0, 0, 0, 0.7)",
//           }}
//           onClick={cerrarImagen}
//         >
//           <div className="modal-dialog modal-lg" style={{ maxWidth: "80%" }}>
//             <div className="modal-content">
//               <div className="modal-body text-center">
//                 <img
//                   src={imagenAmpliada}
//                   alt="Imagen ampliada"
//                   className="img-fluid"
//                   style={{ maxHeight: "80vh" }}
//                 />
//               </div>
//               <div className="modal-footer">
//                 <button className="btn btn-secondary" onClick={cerrarImagen}>
//                   Cerrar
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}

//       <footer className="bg-light text-center py-3 mt-5">
//         <p>&copy; 2024 SC Imóveis. Todos los derechos reservados.</p>
//       </footer>
//     </div>
//   );
// };

// export default App;
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import { useState } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import { useParams, useNavigate } from "react-router-dom";

// const App = () => {
//   const [departamentos, setDepartamentos] = useState([]);
//   const [buscando, setBuscando] = useState(false);
//   const [filtros, setFiltros] = useState({ tipo: "", ubicacion: "" });

//   const buscarDepartamentos = () => {
//     setBuscando(true);

//     const SHEET_ID = "15tPjWzDhuBFmgCTgn5fkw2HJ2nZuohNI-BviD3oYY-I";
//     const SHEET_NAME = "Hoja";
//     const API_KEY = "AIzaSyBBExYjV_CFbwnnFCwY7wAIUgtHpLNHyBk";
//     const url = `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${SHEET_NAME}?key=${API_KEY}`;

//     fetch(url)
//       .then((res) => res.json())
//       .then((data) => {
//         if (data.values && data.values.length > 1) {
//           const items = data.values.slice(1).map((entry, index) => ({
//             id: index,
//             titulo: entry[1],
//             ubicacion: entry[2],
//             precio: entry[3],
//             tipo: entry[4],
//             imagen: entry[5],
//           }));
//           setDepartamentos(items);
//         } else {
//           console.error("No se encontraron datos válidos en la hoja");
//         }
//         setBuscando(false);
//       })
//       .catch((error) => {
//         console.error("Error al buscar departamentos:", error.message);
//         setBuscando(false);
//       });
//   };

//   const handleFiltroChange = (e) => {
//     setFiltros({ ...filtros, [e.target.name]: e.target.value });
//   };

//   const departamentosFiltrados = departamentos.filter(
//     (dpto) =>
//       (filtros.tipo === "" ||
//         dpto.tipo.toLowerCase() === filtros.tipo.toLowerCase()) &&
//       (filtros.ubicacion === "" ||
//         dpto.ubicacion.toLowerCase().includes(filtros.ubicacion.toLowerCase()))
//   );

//   return (
//     <Router>
//       <div>
//         <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
//           <div className="container">
//             <a className="navbar-brand" href="#">
//               <img src="Logo.jpg" alt="Logo" style={{ maxWidth: "120px" }} />
//             </a>
//           </div>
//         </nav>

//         <div className="container py-5 mt-5">
//           <h2 className="text-center mb-4">Busca tu próximo hogar</h2>
//           <form className="row g-3">
//             <div className="col-md-6">
//               <label htmlFor="tipo" className="form-label">
//                 Tipo de Propiedad:
//               </label>
//               <select
//                 id="tipo"
//                 name="tipo"
//                 className="form-control"
//                 onChange={handleFiltroChange}
//               >
//                 <option value="">Todos</option>
//                 <option value="casa">Casa</option>
//                 <option value="departamento">Departamento</option>
//                 <option value="local">Local Comercial</option>
//               </select>
//             </div>

//             <div className="col-md-6">
//               <label htmlFor="ubicacion" className="form-label">
//                 Ubicación:
//               </label>
//               <input
//                 type="text"
//                 id="ubicacion"
//                 name="ubicacion"
//                 className="form-control"
//                 placeholder="Ciudad o barrio"
//                 onChange={handleFiltroChange}
//               />
//             </div>

//             <div className="col-12 text-end">
//               <button
//                 type="button"
//                 className="btn btn-secondary"
//                 onClick={buscarDepartamentos}
//                 disabled={buscando}
//               >
//                 {buscando ? "Buscando..." : "Buscar"}
//               </button>
//             </div>
//           </form>
//         </div>

//         <section id="resultados" className="container mt-4">
//           <div className="row">
//             {departamentosFiltrados.map((dpto) => (
//               <div key={dpto.id} className="col-md-4 mb-4">
//                 <div className="card shadow-sm">
//                   <div className="card-body">
//                     <h5 className="card-title">{dpto.titulo}</h5>
//                     <p className="card-text">
//                       <strong>Ubicación:</strong> {dpto.ubicacion}
//                     </p>
//                     <p className="card-text">
//                       <strong>Precio:</strong> ${dpto.precio}
//                     </p>
//                     {dpto.imagen && (
//                       <a
//                         href={`/imagen/${dpto.id}`}
//                         className="btn btn-primary"
//                       >
//                         Ver imagen
//                       </a>
//                     )}
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </section>

//         <footer className="bg-light text-center py-3 mt-5">
//           <p>&copy; 2024 SC Imóveis. Todos los derechos reservados.</p>
//         </footer>

//         <Routes>
//           <Route
//             path="/imagen/:id"
//             element={<ImagenAmpliada departamentos={departamentos} />}
//           />
//         </Routes>
//       </div>
//     </Router>
//   );
// };

// const ImagenAmpliada = ({ departamentos }) => {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const departamento = departamentos.find((dpto) => dpto.id.toString() === id);

//   if (!departamento) return <div>Imagen no encontrada</div>;

//   return (
//     <div className="container py-5">
//       <div className="row justify-content-center">
//         <div className="col-md-8">
//           <div className="card">
//             <div className="card-body text-center">
//               <img
//                 src={departamento.imagen}
//                 alt={departamento.titulo}
//                 className="img-fluid"
//                 style={{ maxHeight: "80vh" }}
//               />
//             </div>
//             <div className="card-footer text-center">
//               <button
//                 className="btn btn-secondary"
//                 onClick={() => navigate("/")}
//               >
//                 Volver a la lista
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default App;

import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useParams, useNavigate } from "react-router-dom";

const App = () => {
  const [departamentos, setDepartamentos] = useState([]);
  const [buscando, setBuscando] = useState(false);
  const [filtros, setFiltros] = useState({ tipo: "", ubicacion: "" });

  const buscarDepartamentos = () => {
    setBuscando(true);

    const SHEET_ID = "15tPjWzDhuBFmgCTgn5fkw2HJ2nZuohNI-BviD3oYY-I";
    const SHEET_NAME = "Hoja";
    const API_KEY = "AIzaSyBBExYjV_CFbwnnFCwY7wAIUgtHpLNHyBk";
    const url = `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${SHEET_NAME}?key=${API_KEY}`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        if (data.values && data.values.length > 1) {
          console.log(data.values);
          const items = data.values.slice(1).map((entry, index) => ({
            id: index,
            titulo: entry[1],
            ubicacion: entry[2],
            precio: entry[3],
            tipo: entry[4],
            imagen: entry[5],
          }));
          setDepartamentos(items);
        } else {
          console.error("No se encontraron datos válidos en la hoja");
        }
        setBuscando(false);
      })
      .catch((error) => {
        console.error("Error al buscar departamentos:", error.message);

        setBuscando(false);
      });
  };

  const handleFiltroChange = (e) => {
    setFiltros({ ...filtros, [e.target.name]: e.target.value });
  };

  const departamentosFiltrados = departamentos.filter(
    (dpto) =>
      (filtros.tipo === "" ||
        dpto.tipo.toLowerCase() === filtros.tipo.toLowerCase()) &&
      (filtros.ubicacion === "" ||
        dpto.ubicacion.toLowerCase().includes(filtros.ubicacion.toLowerCase()))
  );

  return (
    <Router>
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
          <div className="container">
            <a className="navbar-brand" href="#">
              <img src="Logo.jpg" alt="Logo" style={{ maxWidth: "120px" }} />
            </a>
          </div>
        </nav>

        <div className="container py-5 mt-5">
          <h2 className="text-center mb-4">Busca tu próximo hogar</h2>
          <form className="row g-3">
            <div className="col-md-6">
              <label htmlFor="tipo" className="form-label">
                Tipo de Propiedad:
              </label>
              <select
                id="tipo"
                name="tipo"
                className="form-control"
                onChange={handleFiltroChange}
              >
                <option value="">Todos</option>
                <option value="casa">Casa</option>
                <option value="departamento">Departamento</option>
                <option value="local">Local Comercial</option>
              </select>
            </div>

            <div className="col-md-6">
              <label htmlFor="ubicacion" className="form-label">
                Ubicación:
              </label>
              <input
                type="text"
                id="ubicacion"
                name="ubicacion"
                className="form-control"
                placeholder="Ciudad o barrio"
                onChange={handleFiltroChange}
              />
            </div>

            <div className="col-12 text-end">
              <button
                type="button"
                className="btn btn-secondary"
                onClick={buscarDepartamentos}
                disabled={buscando}
              >
                {buscando ? "Buscando..." : "Buscar"}
              </button>
            </div>
          </form>
        </div>

        <section id="resultados" className="container mt-4">
          <div className="row">
            {departamentosFiltrados.map((dpto) => (
              <div key={dpto.id} className="col-md-4 mb-4">
                <Link
                  to={`/departamento/${dpto.id}`}
                  className="text-decoration-none"
                >
                  <div className="card shadow-sm">
                    {dpto.imagen && (
                      <img
                        src={dpto.imagen}
                        alt={dpto.titulo}
                        className="card-img-top"
                        style={{ height: "200px", objectFit: "cover" }}
                      />
                    )}
                    <div className="card-body">
                      <h5 className="card-title">{dpto.titulo}</h5>
                      <p className="card-text">
                        <strong>Ubicación:</strong> {dpto.ubicacion}
                      </p>
                      <p className="card-text">
                        <strong>Precio:</strong> ${dpto.precio}
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </section>

        <footer className="bg-light text-center py-3 mt-5">
          <p>&copy; 2024 SC Imóveis. Todos los derechos reservados.</p>
        </footer>

        <Routes>
          <Route
            path="/departamento/:id"
            element={<DepartamentoDetalle departamentos={departamentos} />}
          />
        </Routes>
      </div>
    </Router>
  );
};

const DepartamentoDetalle = ({ departamentos }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const departamento = departamentos.find((dpto) => dpto.id.toString() === id);

  if (!departamento)
    return <div className="container py-5">Departamento no encontrado</div>;

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card">
            {departamento.imagen && (
              <img
                src={departamento.imagen}
                alt={departamento.titulo}
                className="card-img-top"
                style={{ maxHeight: "500px", objectFit: "contain" }}
              />
            )}
            <div className="card-body text-center">
              <h3>{departamento.titulo}</h3>
              <p>
                <strong>Ubicación:</strong> {departamento.ubicacion}
              </p>
              <p>
                <strong>Precio:</strong> ${departamento.precio}
              </p>
            </div>
            <div className="card-footer text-center">
              <button
                className="btn btn-secondary"
                onClick={() => navigate("/")}
              >
                Volver a la lista
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
