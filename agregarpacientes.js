
  
  const pacienteForm = document.getElementById('pacienteForm');
  pacienteForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar que el formulario se envíe    
    // Obtener los valores de los campos de entrada
    const nombre = document.getElementById('txtNombre').value;
    const apellido = document.getElementById('txtApellido').value;
    const cedula = document.getElementById('txtCC').value;
    const edad = document.getElementById('txtEdad').value;
    const telefono = document.getElementById('txtTelefono').value;


    const paciente = {
      nombre: nombre,
      apellido: apellido,
      cedula: cedula,
      edad: edad,
      telefono: telefono,
    };

   
        
    

    let objetosGuardados = JSON.parse(localStorage.getItem('pacientes')) || [];
    objetosGuardados.push(paciente);
    localStorage.setItem('pacientes', JSON.stringify(objetosGuardados));
      // Limpiar el formulario
      pacienteForm.reset();
    });  
