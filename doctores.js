infoContainer.innerHTML = '';

// Mostrar la información de los Pacientes
const doctores = JSON.parse(localStorage.getItem('doctores')) || [];
if (doctores.length > 0) {
  const doctoresTitle = document.createElement('h2');
  doctoresTitle.textContent = 'Doctores:';
  infoContainer.appendChild(doctoresTitle);

  const doctoresList = document.createElement('ul');
  doctores.forEach(function(doctor) {
    const doctorItem = document.createElement('li');
    doctorItem.textContent = `${doctor.nombre} ${doctor.apellido},cc:${doctor.cedula}, Especialidad: ${doctor.especialidad}, Consultorio: ${doctor.consultorio}, Correo: ${doctor.correo}`;
    doctoresList.appendChild(doctorItem);
  });

  infoContainer.appendChild(doctoresList);
}