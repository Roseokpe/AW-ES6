const displayBooks = (list) => {
  let tr = '';
  let sn = 1;
  list.forEach((item) => {
    const tr1 = `<tr>
      <td>${sn}</td>
      <td>${item.title}</td>
      <td>${item.author}</td>
      <td> <button type ="button" class = "remove-book" data-bookId="${(sn - 1)}">Remove</button></td>
      </tr>`;
    tr += tr1;
    sn += 1;
  });
  document.getElementById('tbody').innerHTML = tr;
};

export default displayBooks;