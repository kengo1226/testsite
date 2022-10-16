// mobile hamburger menu
const menuIcon = document.querySelector(".mobile-icon");
const menu = document.querySelector("header .nav-content ul");
menuIcon.addEventListener('click', function() {
    menu.classList.toggle('active');
    menuIcon.classList.toggle('close');
})


//   Scroll animation
  ScrollReveal().reveal('.reveal-h3', { 
    duration: 800, // アニメーションの完了にかかる時間
    viewFactor: 0.2, // 0~1,どれくらい見えたら実行するか
    reset: false   // 何回もアニメーション表示するか
  });

  ScrollReveal().reveal('.reveal-para', { 
    duration: 1200, // アニメーションの完了にかかる時間
    viewFactor: 0.2, // 0~1,どれくらい見えたら実行するか
    reset: false   // 何回もアニメーション表示するか
  });

  ScrollReveal().reveal('.main-btn', { 
    duration: 1200, // アニメーションの完了にかかる時間
    viewFactor: 0.2, // 0~1,どれくらい見えたら実行するか
    reset: false   // 何回もアニメーション表示するか
  });