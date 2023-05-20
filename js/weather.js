const obtenerClimaPorCoordenadas = () => {
  const latitud = -34.6037; // Latitud de Buenos Aires
  const longitud = -58.3816; // Longitud de Buenos Aires

  fetch(`https://www.meteosource.com/api/v1/free/point?lat=${latitud}&lon=${longitud}&sections=current&timezone=UTC&language=en&units=metric&key=uhvh6bklldr3s2505a4hcyczvzz6dlpx26c988b4`)
    .then(response => response.json())
    .then(data => {
      console.log(data);
      const climaActual = data.current; // Accede al objeto de clima actual dentro de la respuesta JSON

      // Accede a la temperatura dentro del objeto climaActual
      const temperatura = climaActual.temperature;
      
      // Muestra la temperatura en el elemento de noticias
      const elementoClima = document.getElementById('elemento-clima');
      elementoClima.innerHTML = `<p><i class="fas fa-thermometer-three-quarters" style="color: #2f5bac;"></i> Temperatura: ${temperatura} °C</p>`;
    })
    .catch(error => {
      console.log('Error al obtener los datos del clima:', error);
    });
};

document.addEventListener('DOMContentLoaded', function() {
  obtenerClimaPorCoordenadas();
});

function httpGetAsync(url, callback) {
  const xmlHttp = new XMLHttpRequest();
  xmlHttp.onreadystatechange = function() {
    if (xmlHttp.readyState === 4 && xmlHttp.status === 200)
      callback(xmlHttp.responseText);
  };
  xmlHttp.open("GET", url, true); // true for asynchronous
  xmlHttp.send(null);
}

//obtener la fecha actual
function formatearFecha(fecha) {
  const opciones = { year: 'numeric', month: 'long', day: 'numeric' };
  return fecha.toLocaleDateString(undefined, opciones);
}

document.addEventListener("DOMContentLoaded", function() {
  const fechaActual = new Date();
  const fechaFormateada = formatearFecha(fechaActual);
  document.getElementById("fecha").textContent = fechaFormateada;
});




