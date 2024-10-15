"Ваш код повинен зробити DELETE-запит до вказаного URL, де {userId} – це ID користувача, якого потрібно видалити."
"Поверніть статус відповіді сервера після видалення."

"https://jsonplaceholder.typicode.com/users - адреса куди робити запит"


function deleteUser(id) {
  fetch("https://jsonplaceholder.typicode.com/users",{
    method: "DELETE",
    headers:{
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      id: id
    })
  })
    .then(response=>response.json())
    return Response.json(status)
}

console.log(deleteUser(1));

module.exports = deleteUser;
