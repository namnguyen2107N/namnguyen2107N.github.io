// Lấy modal và nút đóng
var modal = document.getElementById("myModal");
var span = document.getElementsByClassName("close")[0];

// Hiển thị modal khi trang được tải
window.onload = function() {
  modal.style.display = "block";
}

// Đóng modal khi nhấn nút "X"
span.onclick = function() {
  modal.style.display = "none";
}

// Đóng modal khi nhấn ra ngoài modal
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}