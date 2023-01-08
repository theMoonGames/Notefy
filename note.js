const nota = document.getElementById('note');
const save = document.getElementById('save');
const deleteNotes = document.getElementById('delete');
const notesZone = document.getElementById('notes-zone');

save.addEventListener('click', function() {
  if (nota.value.length > 0) {
    let listaDeNotas = [];
    let notas = JSON.parse(localStorage.getItem('notes'));
    if (notas === null) {
      listaDeNotas.push(nota.value);
      localStorage.setItem('notes', JSON.stringify(listaDeNotas));
    } else {
      notas.forEach(note => {
        listaDeNotas.push(note);
      });
      listaDeNotas.push(nota.value);
      localStorage.setItem('notes', JSON.stringify(listaDeNotas));
    }
    nota.value = '';
    load()
  }
});

deleteNotes.addEventListener('click', function() {
  localStorage.setItem('notes', '[]');
  load();
});

window.addEventListener('load', function() {
  load();
});

const removeChilds = function(){
  while (notesZone.firstChild) {
    notesZone.removeChild(notesZone.lastChild);
  }
}

const load = function(){
  removeChilds();
  let notas = JSON.parse(localStorage.getItem('notes'));
  notas.forEach(note => {
    let div = document.createElement('div');
    div.setAttribute('class', 'note');
    div.innerHTML = note;
    notesZone.appendChild(div);
  });
};