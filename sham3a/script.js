// تأثيرات الشمعة المتحركة
document.addEventListener("DOMContentLoaded", function () {
    const flame = document.querySelector('.flame');
    
    setInterval(() => {
        flame.style.animationDuration = `${Math.random() * 1 + 0.5}s`; // تغيير سرعة اللهب
    }, 100);
});
