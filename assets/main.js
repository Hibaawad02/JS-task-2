async function getUsers (){
  const response=await fetch(`https://jsonplaceholder.typicode.com/users`);
  const users= await response.json();

   const result = users.map(function(user){
    return `
    <tr>
    <td>${user.id}</td>
    <td>${user.name}</td>
    <td>${user.username}</td>
    <td>${user.email}</td>
    <td>${user.phone}</td>
    <td>${user.address.street},${user.address.city}</td>
    <td>${user.website}</td>
    </tr>
    `
  }).join('');

  document.querySelector('tbody').innerHTML=result;
}

getUsers();