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
      <div class="row">
      <div class="col-sm-3">
        <h6 class="mb-0">Full Name</h6>
      </div>
      <div class="col-sm-9 text-secondary">
        ${userItems.name}
      </div>
    </div>
    <hr>
    <div class="row">
      <div class="col-sm-3">
        <h6 class="mb-0">Email</h6>
      </div>
      <div class="col-sm-9 text-secondary">
      ${userItems.email}
      </div>
    </div>
    <hr>
    <div class="row">
      <div class="col-sm-3">
        <h6 class="mb-0">Phone</h6>
      </div>
      <div class="col-sm-9 text-secondary">
        ${userItems.phone}
      </div>
    </div>
    <hr>
    <div class="row">
      <div class="col-sm-3">
        <h6 class="mb-0">Role</h6>
      </div>
      <div class="col-sm-9 text-secondary">
        ${userItems.role == 1 ? 'Admin' : 'User'}
      </div>
    </div>
    <hr>
    <div class="row">
      <div class="col-sm-3">
        <h6 class="mb-0">Address</h6>
      </div>
      <div class="col-sm-9 text-secondary">
        ${userItems.address}
      </div>
    </div>
    <hr>
    <div class="row">
      <div class="col-sm-12">
        <a class="btn btn-info " target="__blank" href="./editUser.html?id=${userItems.id}">Edit</a>
      </div>
    </div>  
  `]
  profileElement.innerHTML = profileItems.join('')
}
userProfile()

