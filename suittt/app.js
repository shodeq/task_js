const container = document.querySelector('section');
const userElement = document.getElementById('kiri');
const compElement = document.getElementById('kanan');
const buttons = document.getElementsByClassName('user');

function computer(random) {
    let comp = random;
    if (comp <= 3) {
        return "batu";
    } else if (comp >= 4 && comp <= 6) {
        return "kertas";
    } else {
        return "gunting";
    }
}

function playGame(userChoice) {
    const compChoice = computer(Math.floor(Math.random() * 9) + 1);
    const result = game(compChoice, userChoice);

    resetHands();
    animateHands(() => {
        updateUI(compChoice, userChoice, result);
    });
}

function game(comp, user) {
    if (comp === user) {
        return "seri";
    } else if (comp === "batu" && user === "gunting") {
        return "Anda Kalah!";
    } else if (comp === "batu" && user === "kertas") {
        return "Anda Menang!";
    } else if (comp === "kertas" && user === "batu") {
        return "Anda Kalah!";
    } else if (comp === "kertas" && user === "gunting") {
        return "Anda Menang!";
    } else if (comp === "gunting" && user === "kertas") {
        return "Anda Kalah!";
    } else if (comp === "gunting" && user === "batu") {
        return "Anda Menang!";
    } else {
        return "Pilihan tidak valid!";
    }
}

function updateUI(compChoice, userChoice, result) {
    const compChoiceIcon = compElement.querySelector('i');
    const userChoiceIcon = userElement.querySelector('i');
    const resultText = document.getElementById('result');

    const iconMap = {
        batu: 'fa-hand-back-fist',
        kertas: 'fa-hand',
        gunting: 'fa-hand-scissors'
    };

    compChoiceIcon.className = `fa-regular ${iconMap[compChoice]}`;
    userChoiceIcon.className = `fa-regular ${iconMap[userChoice]}`;
    resultText.textContent = result === "seri" ? "Seri!" : result === "Anda Menang!" ? "Anda Menang!" : "Anda Kalah!";
}

function resetHands() {
    const compChoiceIcon = compElement.querySelector('i');
    const userChoiceIcon = userElement.querySelector('i');

    compChoiceIcon.className = 'fa-regular fa-hand-back-fist';
    userChoiceIcon.className = 'fa-regular fa-hand-back-fist';
}

function animateHands(callback) {
    const compChoiceIcon = compElement.querySelector('i');
    const userChoiceIcon = userElement.querySelector('i');

    compChoiceIcon.classList.add('animate');
    userChoiceIcon.classList.add('animate');

    setTimeout(() => {
        compChoiceIcon.classList.remove('animate');
        userChoiceIcon.classList.remove('animate');
        callback();
    }, 1000); // Animasi selama 1 detik sebelum menampilkan hasil
}

// Tambahkan event listener ke semua tombol
Array.from(buttons).forEach(button => {
    button.addEventListener('click', () => {
        const userChoice = button.classList.contains('batu') ? 'batu' : button.classList.contains('kertas') ? 'kertas' : 'gunting';
        playGame(userChoice);
    });
});
