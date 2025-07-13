const messages = [
   "Nguyễn Thy An" , "Trần Lê Phương Anh ", "Đào Ngọc Ánh " , "Nguyễn Ngọc Ánh" , "Trần Thị Bảo Châu","Nguyễn Thành Công",
    "Nguyễn Đình Dũng" , "Trần Bảo Duy" ,"Ngô Ánh Dương" , "Nguyễn Tiến Đạt" ,"Phạm Bùi Tiến Đạt", "Phạm Thành Đạt" ,"Trần Tiến Đạt", "Lê Phương Đông" ,
    "Cù Huy Phú Đức" , "Phạm Ngọc Đức" ,"Đặng Trung Hiếu" , "Phạm Minh Hiếu" , "Lê Gia Huy" , "Lê Hồ Huy" , "Đặng Khánh Hưng" , "Trần Tiến Hưng" , "Đỗ Thị Khánh Linh" , " Hoàng Hải Linh" ,
   "Hoàng Phương Linh" , "Nguyễn Khánh Linh" , "Phạm Thùy Linh" , "Dương Đức Long" , "Vũ Quang Lộc" , "Dương Thị Cẩm Ly", "Nguyễn Phúc Nam" , "Nguyễn Phương Nam " ,"Nguyễn Khánh Ngọc" , "Lê Yến Nhi" ,
"Nguyễn Thanh Phong " , "Nguyễn Lâm Phụng", "Lê Đức Quân" , "Nguyễn Thị Phương Thảo" , "Hoàng Thu Thủy" ,"Mai Thị Huyền Trang" , "Nguyễn Quang Trường ", "Nguyễn Thanh Tùng" ,
"Vũ Thị Thu Uyên" , "Đào Thế Việt " , "Trần Thị Hà Vy"
];


const wishes = [
  "Cảm ơn thầy cô , mọi người vì tất cả!",
  "Biết ơn từng bài giảng, từng lời dạy, lời căn rặn!",
  "Em sẽ không quên những giờ học của thầy cô!",
  "Thầy cô – người lái đò thầm lặng!",
  "Một đời nhớ ơn, một đời khắc ghi.",
  "Tạm biệt, nhớ lắmmmm 12C3!",
  "Mái trường còn đó, tụi em đã lớn rùiiii!",
  "Chia xa – nhưng tình cảm còn mãiiii!",
  "Thanh xuân gói gọn trong ba chữ: thầy – cô – lớp!",
  "Sẽ nhớ nhiều lắm…mọi người",
  "Yêu 12C3.....rất nhiềuuuuuu!",
  "Thầy ơi, lần sau cho đề dễ hơn nhóooo!",
  "Cảm ơn cô đã 'gồng mình' vì tụi emmmmm!",
  "Lớp quậy… nhưng thương thầy cô thiệttttt mòaaa!",
  "We miss cô sươnggg của chúng em", 
  "we love My teacher Sươnggggg" ,
  "We love 12C3",
  "Nhớ Họp Lớp đấy 12C3333",
  "Yêu cô Sương nhiều lắmmmmm"
  
];

const icons = [
  "❤️", "⭐", "🌟", "✨", "🎉", "🎈", "💖", "🪐", "🚀", "🌠", "💫", "🧡", "💙", "💚", "💛", "💜",
  "🎵", "🎶", "🎓", "📚", "📝", "🌸", "🌻", "🌼", "🍀", "🍎", "🍉", "🦋", "🕊️", "🧸", "🎂", "🥇", "🏆"
];

const colors = [
  "#ffb3ba", "#bae1ff", "#baffc9", "#ffffba", "#ffdfba", "#e2baff", "#ffbaed"
];

const colorBase = ["#ff69b4", "#fff", "#2196f3"]; 
let currentColorIndex = 0;


setInterval(() => {
  currentColorIndex = (currentColorIndex + 1) % colorBase.length;
}, 3000); 

function getCurrentColorVariant() {
  
  return [
    colorBase[currentColorIndex],
    colorBase[(currentColorIndex + 1) % colorBase.length],
    colorBase[(currentColorIndex + 2) % colorBase.length]
  ];
}

function randomZ() {
  // Phân bố chữ ở nhiều lớp sâu, từ gần (0) đến xa (-1000px)
  return Math.floor(Math.random() * 1000) * (Math.random() > 0.5 ? 1 : -1);
}

function depthCue(z) {
  // Chữ càng xa thì càng nhỏ và càng mờ
  const scale = 1 - Math.abs(z) / 1600;
  const opacity = 0.95 - Math.abs(z) / 1800;
  return { scale: Math.max(0.4, scale), opacity: Math.max(0.3, opacity) };
}

function createFallingMessage(text) {
  const msg = document.createElement('div');
  msg.className = 'falling-message';
  msg.textContent = text;
  msg.style.fontSize = (2 + Math.random() * 1.5) + 'em';
  // Tăng khoảng cách ngang: chỉ xuất hiện từ 10vw đến 80vw
  msg.style.left = (10 + Math.random() * 70) + 'vw';
  const z = randomZ();
  const { scale, opacity } = depthCue(z);
  msg.style.setProperty('--z', `${z}px`);
  msg.style.setProperty('--scale', scale);
  msg.style.opacity = opacity;

  const colors = getCurrentColorVariant();
  msg.style.setProperty('--color1', colors[0]);
  msg.style.setProperty('--color2', colors[1]);
  msg.style.setProperty('--color3', colors[2]);

  document.getElementById('messages-container').appendChild(msg);
  setTimeout(() => msg.remove(), 4000);
}

function createFallingIcon() {
  const icon = document.createElement('div');
  icon.className = 'falling-icon';
  icon.textContent = icons[Math.floor(Math.random() * icons.length)];
  icon.style.left = Math.random() * 95 + 'vw';
  icon.style.fontSize = (1.2 + Math.random() * 2.2) + 'em';
  icon.style.animationDuration = (2 + Math.random() * 3) + 's';
  const z = randomZ();
  const { scale, opacity } = depthCue(z);
  icon.style.transform = `translateZ(${z}px) scale(${scale})`;
  icon.style.opacity = opacity;
  document.getElementById('icons-container').appendChild(icon);
  setTimeout(() => icon.remove(), 4000);
}

// Tăng số lượng chữ rơi
setInterval(() => {
  for (let i = 0; i < 3; i++) { // giảm số lượng mỗi lần để thưa hơn nữa
    const rand = Math.random();
    if (rand < 0.15) { // giảm tần suất icon
      createFallingIcon();
    } else if (rand < 0.7) {
      createFallingMessage(messages[Math.floor(Math.random() * messages.length)]);
    } else {
      createFallingMessage(wishes[Math.floor(Math.random() * wishes.length)]);
    }
  }
}, 120); // giảm interval xuống 120ms

// Background star effect
const canvas = document.getElementById('star-bg');
const ctx = canvas.getContext('2d');
let stars = [];

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener('resize', resizeCanvas);

function createStars() {
  stars = [];
  for (let i = 0; i < 100; i++) { // giảm còn 100 sao
    stars.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      z: Math.random() * 800 + 200,
      o: Math.random() * 0.7 + 0.3,
      r: Math.random() * 1.2 + 0.3
    });
  }
}
createStars();

function drawStars() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let star of stars) {
    ctx.save();
    ctx.globalAlpha = star.o;
    ctx.beginPath();
    ctx.arc(star.x, star.y, star.r, 0, 2 * Math.PI);
    ctx.fillStyle = "#fff";
    ctx.shadowColor = "#fff";
    ctx.shadowBlur = 8;
    ctx.fill();
    ctx.restore();

    // Move stars to create a flying effect
    star.y += (2.5 - star.z / 500);
    star.x += (0.2 - star.z / 2000);

    if (star.y > canvas.height || star.x > canvas.width || star.x < 0) {
      star.x = Math.random() * canvas.width;
      star.y = 0;
      star.z = Math.random() * 800 + 200;
    }
  }
  requestAnimationFrame(drawStars);
}
drawStars();