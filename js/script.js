// Đợi cho toàn bộ trang web được tải xong rồi mới chạy mã
document.addEventListener("DOMContentLoaded", function () {
  // === LOGIC CHO CỬA SỔ XEM ẢNH (MODAL) ===
  // 1. Lấy ra các phần tử cần thiết từ HTML
  const modal = document.getElementById("imageModal");
  const modalImg = document.getElementById("modalImage");
  const closeBtn = document.querySelector(".close-button");

  // 2. Lấy ra TẤT CẢ các ảnh trong gallery
  const galleryImages = document.querySelectorAll(".gallery-item img");

  // 3. Lặp qua từng ảnh trong gallery và thêm sự kiện "click"
  galleryImages.forEach((img) => {
    // Thêm style con trỏ để người dùng biết là có thể click
    img.style.cursor = "pointer";

    img.onclick = function () {
      modal.style.display = "block"; // Hiển thị cửa sổ modal
      modalImg.src = this.src; // Gán link ảnh đã click vào ảnh trong modal
    };
  });

  // 4. Định nghĩa hành động khi bấm vào nút đóng (dấu X)
  if (closeBtn) {
    // Kiểm tra xem nút đóng có tồn tại không
    closeBtn.onclick = function () {
      modal.style.display = "none"; // Ẩn cửa sổ modal đi
    };
  }

  // 5. (Tùy chọn) Đóng cửa sổ khi bấm vào vùng nền đen bên ngoài ảnh
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };

  // === LOGIC CHO HỘP NHẠC (MUSIC BOX) ===
  const audio = document.getElementById("myAudio");
  const musicBox = document.getElementById("musicBoxPlayer");
  const songTitle = document.getElementById("songTitle");

  // Kiểm tra xem các phần tử có tồn tại không để tránh lỗi
  if (audio && musicBox && songTitle) {
    // Thêm sự kiện click vào hình ảnh hộp nhạc
    musicBox.addEventListener("click", () => {
      // Nếu nhạc đang dừng thì phát nhạc
      if (audio.paused) {
        audio.play();
        musicBox.classList.add("playing"); // Thêm class 'playing' để kích hoạt animation CSS
        songTitle.classList.add("visible");
      }
      // Ngược lại, nếu nhạc đang phát thì dừng lại
      else {
        audio.pause();
        musicBox.classList.remove("playing"); // Xóa class 'playing' để dừng animation
        songTitle.classList.remove("visible");
      }
    });

    // (Tùy chọn) Tự động dừng animation khi bài hát kết thúc (nếu bạn không dùng thuộc tính 'loop' trong HTML)
    audio.addEventListener("ended", () => {
      musicBox.classList.remove("playing");
    });
  }

  // === LOGIC CHO TO-DO LIST TƯƠNG TÁC ===
  const todoItems = document.querySelectorAll(".todo-item");

  // Kiểm tra xem có to-do item nào không để tránh lỗi
  if (todoItems.length > 0) {
    // Lặp qua từng item
    todoItems.forEach((item) => {
      // Thêm sự kiện click cho mỗi item
      item.addEventListener("click", () => {
        // Tự động THÊM class 'completed' nếu chưa có,
        // hoặc XÓA class 'completed' nếu đã có.
        item.classList.toggle("completed");
      });
    });
  }

  // === LOGIC CHO NÚT THU GỌN (COLLAPSIBLE) ===
  const collapsibleBtn = document.querySelector(".collapsible-trigger");

  if (collapsibleBtn) {
    collapsibleBtn.addEventListener("click", function () {
      // Thêm/bỏ class 'active' để đổi icon mũi tên
      this.classList.toggle("active");

      // Lấy ra div nội dung ngay sau nút bấm
      const content = this.nextElementSibling;

      // Nếu div đang mở (có max-height), thì đóng nó lại
      if (content.style.maxHeight) {
        content.style.maxHeight = null;
      }
      // Nếu div đang đóng, thì mở nó ra
      else {
        // Đặt max-height bằng đúng chiều cao thực của nội dung bên trong
        content.style.maxHeight = content.scrollHeight + "px";
      }
    });
  }

  // === LOGIC CHO VIDEO CLICK-TO-PLAY ===
  const clickableVideo = document.querySelector(".sidebar-video");

  // Kiểm tra xem video có tồn tại không
  if (clickableVideo) {
    // Thêm sự kiện click vào chính video đó
    clickableVideo.addEventListener("click", () => {
      // Nếu video đang dừng (paused) hoặc đã kết thúc (ended)
      if (clickableVideo.paused || clickableVideo.ended) {
        // Thì phát video
        clickableVideo.play();
      }
      // Ngược lại, nếu video đang phát
      else {
        // Thì dừng video
        clickableVideo.pause();
      }
    });
  }
});
