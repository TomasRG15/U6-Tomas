infoContainer.innerHTML = '';

// Mostrar la información de los Pacientes
const pacientes = JSON.parse(localStorage.getItem('cita')) || [];
if (pacientes.length > 0) {
  const pacientesTitle = document.createElement('h2');
  pacientesTitle.textContent = 'Cita:';
  infoContainer.appendChild(pacientesTitle);

  const citaList = document.createElement('ul');
  cita.forEach(function(cita) {
    const citaItem = document.createElement('li');
    citaItem.textContent = `${paciente.nombre} ${paciente.apellido},C.C:${paciente.cedula}, Edad:${paciente.edad}, Telefono:${paciente.telefono}`;
    citaList.appendChild(citaItem);
  });

  infoContainer.appendChild(pacientesList);
}