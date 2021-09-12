function createUser(form) {
  form.preventDefault()
  const local = JSON.parse(localStorage.getItem(USER_KEY)) ?? [];
  let data = document.forms["create-user"];
  let name = data["name"].value;
  let email = data["email"].value;
  let password = data["password"].value;
  let role = data["role"].value;
  let id = 0;
  let arr = local.map(u => u?.id > id ? id = u?.id : id = id)
  id++
  let newUser = {
    id ,
    name,
    email,
    password,
    phone: '',
    address: '',
    role,
  }
  users = local.concat(newUser); 
  localStorage.setItem(USER_KEY, JSON.stringify(users))

  const notiEle = document.getElementById('notification')
  const noti = ["<span>Create User Complete"]
  notiEle.innerHTML = noti.join('')
}