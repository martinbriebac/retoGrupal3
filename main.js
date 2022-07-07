let infolibros = [];

const addbook = (titulo, autor) => {
  let libros = {
    titulo: titulo,
    autor: autor
  };
  infolibros.push(libros)
}

const imprBook = () => {
  console.log(infolibros)
}
