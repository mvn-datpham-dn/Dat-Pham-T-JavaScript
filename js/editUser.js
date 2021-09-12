const userProfile = () => {
  const url = window.location.search;
  const urlParams = new URLSearchParams(url);
  const id = urlParams.get('id');
  const users = JSON.parse(localStorage.getItem(USER_KEY)) ?? []
  const userItems = users.find(user => user.id == id)

  const avtElement = document.getElementById('user-avt');
  avtItems = [`
    <h4>${userItems.name}</h4>
    <p class="text-secondary mb-1">Full Stack Developer</p>
    <p class="text-muted font-size-sm">${userItems.address}</p>
    <button class="btn btn-primary">Follow</button>
    <button class="btn btn-outline-primary">Message</button>
  `]
  avtElement.innerHTML = avtItems.join('')

  const profileElement = document.getElementById('user-profile')
  profileItems = [`
  <form onsubmit="return saveEditUser(event)" name="user-edit" method="post" >
  <div class="row mb-3">
        <div class="col-sm-3">
          <h6 class="mb-0">Full Name</h6>
        </div>
        <div class="col-sm-9 text-secondary">
          <input type="text" class="form-control" name="name" value="${userItems.name}">
        </div>
      </div>
      <div class="row mb-3">
        <div class="col-sm-3">
          <h6 class="mb-0">Email</h6>
        </div>
        <div class="col-sm-9 text-secondary">
          <input type="text" class="form-control" name="email" value="${userItems.email}">
        </div>
      </div>
      <div class="row mb-3">
        <div class="col-sm-3">
          <h6 class="mb-0">Phone</h6>
        </div>
        <div class="col-sm-9 text-secondary">
          <input type="text" class="form-control"  name="phone" value="${userItems.phone}">
        </div>
      </div>
      <div class="row mb-3">
        <div class="col-sm-3">
          <h6 class="mb-0">Role</h6>
        </div>
        <div class="col-sm-9 text-secondary">
          <select class="select" name="role">
            <option value="1" ${userItems.role == 1 ? "SELECTED" : ""}>Admin</option>
            <option value="2" ${userItems.role == 2 ? "SELECTED" : ""}>User</option>
          </select>
        </div>
      </div>
      <div class="row mb-3">
        <div class="col-sm-3">
          <h6 class="mb-0">Address</h6>
        </div>
        <div class="col-sm-9 text-secondary">
          <input type="text" class="form-control" name="address" value="${userItems.address}">
        </div>
      </div>
      <div class="row">
        <div class="col-sm-3"></div>
        <div class="col-sm-9 text-secondary">
          <input type="submit" class="btn btn-primary px-4" value="Save Changes">
        </div>
      </div>
  </form>
  `]
  profileElement.innerHTML = profileItems.join('')
}
userProfile()

function saveEditUser(form) {
  form?.preventDefault()
  const url = window.location.search;
  const urlParams = new URLSearchParams(url);
  let idUser = urlParams.get('id');
  const users = JSON.parse(localStorage.getItem(USER_KEY)) ?? []
  const userItems = users.find(user => user.id == idUser)
  let data = document.forms["user-edit"];
  let name = data["name"].value;
  let email = data["email"].value;
  let password = data["password"]?.value ? data["password"].value : userItems?.password;
  let role = data["role"].value;
  let phone = data["phone"].value;
  let address = data["address"].value;

  const editUser = users.map(user => user.id == idUser ? ({...user, name, email, password, role, phone, address}) : user);
  localStorage.setItem(USER_KEY, JSON.stringify(editUser))
  console.log(editUser)
  userProfile()
  const notiEle = document.getElementById('notification')
  const noti = ["<span>Edit User Complete"]
  notiEle.innerHTML = noti.join('')
  // return false;
}
