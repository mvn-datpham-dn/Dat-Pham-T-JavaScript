const userProfile = () => {
  let url = window.location.pathname;
  let id = getParameterByname('id', url);
  console.log(id)
  // const users = JSON.parse(localStorage.getItem(USER_KEY)) ?? []
  // const userItems = users.find(user => user.id)
}
userProfile()