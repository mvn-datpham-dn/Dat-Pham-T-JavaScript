$(document).ready(function () {
  // Cấu hình các nhãn phân trang
  $('#user-table').dataTable({
    "language": {
      "sProcessing": "Đang xử lý...",
      "sLengthMenu": " _MENU_ ",
      "sZeroRecords": "Không tìm thấy user nào",
      "sInfo": "Đang xem _START_ đến _END_ trong tổng số _TOTAL_ mục",
      "sInfoEmpty": "Đang xem 0 đến 0 trong tổng số 0 mục",
      "sInfoFiltered": "(được lọc từ _MAX_ mục)",
      "sInfoPostFix": "",
      "sSearch": "Search: ",
      "sUrl": "",
      "oPaginate": {
        "sFirst": "Đầu",
        "sPrevious": "Trước",
        "sNext": "Tiếp",
        "sLast": "Cuối"
      }
    }
  });

});

const usersElement = document.getElementById("user-list");
const renderUser = () => {
  const users = JSON.parse(localStorage.getItem(USER_KEY)) ?? [{ id: 1, name: "", email: "Do not have user", password: "", phone: "", address: "", role: "1" }]
  const userItems = users.map(u => `
    <tr>
      <td>${u.id}</td>
      <td>${u.name}</td>
      <td>${u.email}</td>
      <td>${u.role == 1 ? "Admin" : "User"}</td>
      <td>
        <a href="./detailUser.html?id=${u.id}">
          <i class="fas fa-info-circle"></i>
        </a>
        <a href="./editUser.html?id=${u.id}">
          <i class="fas fa-user-edit"></i>
        </a>
        <a href=""  onclick="deleteUser(${u.id}, event)">
          <i class="far fa-trash-alt"></i>
        </a>
      </td>
    </tr>
  `)
  usersElement.innerHTML = userItems.join('')
}
renderUser()


function deleteUser(id, event) {
  event.preventDefault()
  const users = JSON.parse(localStorage.getItem(USER_KEY)) ?? []
  if (confirm('User sẽ bị xóa ? ')) {
    const deleteUser = users.filter(user => user.id != id )
    localStorage.setItem(USER_KEY, JSON.stringify(deleteUser));
  }
  renderUser()
  const notiEle = document.getElementById('notification')
  const noti = ["<span>Delete User Complete"]
  notiEle.innerHTML = noti.join('')
}
