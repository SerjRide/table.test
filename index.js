//Link to the server with JSON data
const url = 'http://jsonplaceholder.typicode.com/posts';

const getPosts = async (url) => {
  const res = await fetch(url);
  const body = await res.json();
  $(document).ready(() => {

      // Bootstrap js
      $('#dtBasicExample').DataTable();
      $('.dataTables_length').addClass('bs-select');

  });
  return body;
};

getPosts(url)
  .then((body) => {
    for (let i = 0; i < body.length; i++) {
      $('#tr').prepend(`
        <tr class="table-el">
          <td>${body[i].userId}</td>
          <td>${body[i].id}</td>
          <td>${body[i].title}</td>
          <td>${body[i].body}</td>
        </tr>
      `);
    };
  });
