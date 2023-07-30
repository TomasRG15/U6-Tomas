const citaForm = document.getElementById('citaForm');
citaForm.addEventListener('submit', function(event) {
  event.preventDefault(); // Evitar que el formulario se envíe    
  // Obtener los valores de los campos de entrada
  const documento = document.getElementById('txtDocumento').value;
  const especialidad = document.getElementById('txtEspecialidad').value;


  const paciente = {
    Documento: documento,
    especialidad: especialidad,
  };


      
  

  let objetosGuardados = JSON.parse(localStorage.getItem('cita')) || [];
  objetosGuardados.push(cita);
  localStorage.setItem('cita', JSON.stringify(objetosGuardados));
    // Limpiar el formulario
    citaForm.reset();
  });  