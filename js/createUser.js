function createUser() {
  const local = JSON.parse(localStorage.getItem(USER_KEY)) ?? [];
  let data = document.forms["create-user"];
  let name = data["name"].value;
  let email = data["email"].value;
  let password = data["password"].value;
  let role = data["role"].value;
  let id = local.length+1;
  let newUser = {
    id,
    name,
    email,
    password,
    phone: '',
    address: '',
    role,
  }
  users = local.concat(newUser); 
  localStorage.setItem(USER_KEY, JSON.stringify(users));
}