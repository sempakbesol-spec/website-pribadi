

// Menampilkan pesan selamat datang
window.addEventListener("load", function() {
    console.log("Website berhasil dimuat!");

    alert("Selamat datang di website pribadi saya!");
});

// Efek tombol navigasi
document.querySelectorAll('a[href^="#"]').forEach(function(link) {
    link.addEventListener("click", function(event) {
        const target = document.querySelector(
            this.getAttribute("href")
        );

        if (target) {
            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});
