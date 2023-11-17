function agrandarImagen(imagen) {
    imagen.style.transform = "scale(1.5)";
  }
  
  function reducirImagen(imagen) {
    imagen.style.transform = "scale(0.75)";
  }
  
  document.querySelectorAll(".imagen").forEach(function(imagen) {
    imagen.addEventListener("click", function() {
      const accion = this.dataset.accion;
      if (accion === "agrandar") {
        agrandarImagen(this);
      } else {
        reducirImagen(this);
      }
    });
  });
  