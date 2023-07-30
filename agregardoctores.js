
  // Obtener el formulario de doctores y agregar un evento de envío
  const doctorForm = document.getElementById('doctorForm');
  doctorForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar que el formulario se envíe    
    // Obtener los valores de los campos de entrada
    const nombre = document.getElementById('nombreDoctor').value;
    const apellido = document.getElementById('apellidoDoctor').value;
    const cedula = document.getElementById('cedulaDoctor').value;
    const especialidad = document.getElementById('especialidadDoctor').value;
    const consultorio = document.getElementById('consultorioDoctor').value;
    const correo = document.getElementById('correoDoctor').value;

    // Crear un objeto para el doctor
    const doctor = {
      nombre: nombre,
      apellido: apellido,
      cedula: cedula,
      especialidad: especialidad,
      consultorio: consultorio,
      correo: correo
    };

    // Agregar el doctor al array de doctores
        
    

    let objetosGuardados = JSON.parse(localStorage.getItem('doctores')) || [];
    objetosGuardados.push(doctor);
    localStorage.setItem('doctores', JSON.stringify(objetosGuardados));
      // Limpiar el formulario
      doctorForm.reset();
    });  

