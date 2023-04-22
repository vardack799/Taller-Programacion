function buscarTexto() {
  const ingresarTexto = document.getElementById('ingresar').value;
  const buscarTexto = document.getElementById('buscar').value;
  const resultadoTexto = document.getElementById('resultado_texto');

  if (ingresarTexto.length === 0) {
    alert('Ingrese un texto para continuar.');
    return;
  }

  if (buscarTexto.length === 0) {
    alert('Ingrese un texto a buscar para continuar.');
    return;
  }
  // Eliminamos cualquier resaltado previo
  ingresarTexto.replace(/<mark>/g, '').replace(/<\/mark>/g, '');

  // Buscamos el texto
  const regex = new RegExp(buscarTexto, 'gi');
  const matches = ingresarTexto.match(regex);

  if (matches) {
    // Resaltamos los resultados
    const markedText = ingresarTexto.replace(regex, '<mark>$&</mark>');
    resultadoTexto.innerHTML = markedText;
  } else {
    resultadoTexto.innerHTML = 'No se encontraron resultados.';
  }
}
