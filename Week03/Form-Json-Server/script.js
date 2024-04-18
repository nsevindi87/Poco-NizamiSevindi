let tbody = document.getElementById("tbody");

fetch("http://localhost:3000/user")
  .then((res) => res.json())
  .then((json) => {
    json.map((data) => {
      tbody.append(td_fun(data));
    });
  });

//create td
function td_fun({ id, name, surname, email }) {
  let td = document.createElement("tr");
  td.innerHTML = `
    <td>${id}</td>
    <td>${name}</td>
    <td>${surname}</td>
    <td>${email}</td>
   `;
  return td;
}
