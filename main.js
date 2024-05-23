// Validación del formulario
document.addEventListener("DOMContentLoaded", function () {
  const formulario = document.getElementById("donationForm");
  const customAmountInput = document.getElementById("customAmount");
  const amountOtherRadio = document.getElementById("amountOther");
  const amountRadios = document.querySelectorAll(
    'input[name="donationAmount"]:not([value="other"])'
  );

  formulario.addEventListener("submit", function (evento) {
    evento.preventDefault(); // Previene el envío del formulario

    // Limpiar mensajes de error anteriores
    limpiarMensajesDeError();

    // Obtener los valores de los campos
    const email = document.getElementById("email").value;
    const customAmount = customAmountInput.value;
    const donationTypeSelected = document.querySelector(
      'input[name="donationType"]:checked'
    );
    const donationAmountSelected = document.querySelector(
      'input[name="donationAmount"]:checked'
    );
    const termsAccepted = document.getElementById("terms").checked;

    let formularioValido = true;

    // Validaciones
    if (!donationTypeSelected) {
      mostrarMensajeDeError(
        "donationTypeError",
        "Selecciona un tipo de donación mensual/puntual."
      );
      formularioValido = false;
    }

    if (!donationAmountSelected) {
      mostrarMensajeDeError(
        "donationAmountError",
        "Selecciona un cantidad de donación."
      );
      formularioValido = false;
    } else if (
      donationAmountSelected.value === "other" &&
      customAmount === ""
    ) {
      mostrarMensajeDeError(
        "donationAmountError",
        "Ingresa una cantidad valida para 'Otra'."
      );
      formularioValido = false;
    }

    if (email === "") {
      mostrarMensajeDeError("emailError", "El email es obligatorio.");
      formularioValido = false;
    }

    // Validar que al menos dos campos de texto no estén vacíos
    let camposTextoNoVacios = 0;
    if (email !== "") camposTextoNoVacios++;
    if (customAmount !== "") camposTextoNoVacios++;

    if (camposTextoNoVacios < 1) {
      mostrarMensajeDeError("emailError", "Email Obligatorio");
      formularioValido = false;
    }

    if (!termsAccepted) {
      mostrarMensajeDeError(
        "termsError",
        "Debes aceptar los términos y condiciones."
      );
      formularioValido = false;
    }

    // Si todas las validaciones pasan
    if (formularioValido) {
      alert("Formulario enviado con éxito.");
      formulario.submit(); // Ahora sí, enviar el formulario
    }
  });

  // Función para mostrar un mensaje de error
  function mostrarMensajeDeError(idElemento, mensaje) {
    const elementoError = document.getElementById(idElemento);
    elementoError.textContent = mensaje;
  }

  // Función para limpiar los mensajes de error
  function limpiarMensajesDeError() {
    const elementosError = document.querySelectorAll(".error");
    elementosError.forEach(function (elemento) {
      elemento.textContent = "";
    });
  }

  // Asegurarse de que solo una opción de monto esté seleccionada
  customAmountInput.addEventListener("focus", function () {
    amountRadios.forEach(function (radio) {
      radio.checked = false;
    });
    amountOtherRadio.checked = true;
  });

  amountRadios.forEach(function (radio) {
    radio.addEventListener("change", function () {
      customAmountInput.value = "";
    });
  });
});

//boton de subir (evento onclick)
window.onscroll = function () {
  mostrarBotonSubir();
};

function mostrarBotonSubir() {
  var btnSubir = document.getElementById("btnSubirArriba");
  if (
    document.body.scrollTop > 2500 ||
    document.documentElement.scrollTop > 2500
  ) {
    btnSubir.style.display = "block";
  } else {
    btnSubir.style.display = "none";
  }
}

function subirArriba() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

//boton+info
function mostrarModal(nombreDeServicio) {
  var modal = document.getElementById("miModal");
  var contenidoModal = modal.querySelector(".modal-contenido p");

  //  información detallada de cada servicio
  var informacionDetallada = {
    "Asesoramiento Legal":
      "Ofrecemos asesoramiento legal y de inmigración para refugiados que buscan establecerse en un nuevo país. Nuestro equipo de abogados especializados está aquí para guiar a los refugiados a través de los complejos procesos legales y proporcionarles el apoyo necesario para iniciar una nueva vida de manera segura y legal.",
    "Apoyo Social y Sicologico":
      "En Open Road, entendemos los desafíos emocionales y sociales que enfrentan los refugiados durante su proceso de adaptación. Por eso, ofrecemos servicios de apoyo psicológico y social, donde nuestros profesionales capacitados brindan terapia individual y grupal, así como orientación sobre cómo acceder a recursos comunitarios y establecer redes de apoyo.",
    "Programas de Formación":
      "Nuestros programas de formación y capacitación laboral están diseñados para empoderar a los refugiados y ayudarles a adquirir las habilidades necesarias para integrarse en el mercado laboral de su nuevo hogar. Ofrecemos cursos prácticos en áreas como idiomas, habilidades profesionales y emprendimiento, para que puedan construir un futuro sostenible para ellos y sus familias.",
  };

  // Verifica si el nombre del servicio está en la información detallada y mostrarla en el modal
  if (informacionDetallada.hasOwnProperty(nombreDeServicio)) {
    contenidoModal.textContent = informacionDetallada[nombreDeServicio];
    modal.style.display = "block";
  } else {
    console.error(
      "El servicio '" +
        nombreDeServicio +
        "' no tiene información detallada disponible."
    );
  }
}

// Función para cerrar el modal
function cerrarModal() {
  var modal = document.getElementById("miModal");
  modal.style.display = "none";
}

// Cerrar el modal cuando se hace clic fuera de él
window.onclick = function (event) {
  var modal = document.getElementById("miModal");
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

// usando jquery

// Usando jQuery para manejar el clic y el deslizamiento del panel y la imagen
$(document).ready(function () {
  // Mostramos la imagen primero y luego la ocultamos
  $("#imagen-estadisticas").slideDown("slow", function () {
    $("#panel").slideUp("slow");
  });

  $("#flip").click(function () {
    // Alternamos entre mostrar la tabla y ocultarla
    $("#panel").slideToggle("slow", function () {
      // Mostramos la imagen si la tabla está oculta, y viceversa
      if ($(this).is(":visible")) {
        $("#imagen-estadisticas").slideUp("slow");
      } else {
        $("#imagen-estadisticas").slideDown("slow");
      }
    });
  });
});

//datapicker
//Onload Aceptar politicas cookies
