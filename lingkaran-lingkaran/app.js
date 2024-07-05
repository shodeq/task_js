document.addEventListener("DOMContentLoaded", function() {
    const container = document.getElementById('circleContainer');
    const circles = Array.from(container.getElementsByClassName('circle'));

    // Set initial positions for each circle
    circles.forEach((circle, index) => {
        const left = index * 70;
        circle.style.left = `${left}px`;
        circle.style.top = `0px`;
    });

    container.addEventListener('click', (event) => {
        const purpleCircle = document.getElementById('purpleCircle');
        const target = event.target;

        if (target.classList.contains('circle') && target !== purpleCircle) {
            // Tambahkan kelas rotate ke kedua elemen
            purpleCircle.classList.add('rotate');
            target.classList.add('rotate');

            // Hapus kelas rotate setelah animasi selesai
            setTimeout(() => {
                purpleCircle.classList.remove('rotate');
                target.classList.remove('rotate');

                // Swap positions
                const purpleLeft = purpleCircle.style.left;
                const purpleTop = purpleCircle.style.top;
                purpleCircle.style.left = target.style.left;
                purpleCircle.style.top = target.style.top;
                target.style.left = purpleLeft;
                target.style.top = purpleTop;
            }, 500); // Waktu setTimeout harus sesuai dengan durasi animasi
        }
    });
});
