infoContainer.innerHTML = '';

// Mostrar la información de los Pacientes
const pacientes = JSON.parse(localStorage.getItem('pacientes')) || [];
if (pacientes.length > 0) {
  const pacientesTitle = document.createElement('h2');
  pacientesTitle.textContent = 'Pacientes:';
  infoContainer.appendChild(pacientesTitle);

  const pacientesList = document.createElement('ul');
  pacientes.forEach(function(paciente) {
    const pacienteItem = document.createElement('li');
    pacienteItem.textContent = `${paciente.nombre} ${paciente.apellido},C.C:${paciente.cedula}, Edad:${paciente.edad}, Telefono:${paciente.telefono}`;
    pacientesList.appendChild(pacienteItem);
  });

  infoContainer.appendChild(pacientesList);
}