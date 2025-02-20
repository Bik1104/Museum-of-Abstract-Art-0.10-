// Управление бургер-меню и поиском
const burgerButton = document.getElementById('burgerButton');
const burgerMenu = document.getElementById('burgerMenu');
const overlay = document.getElementById('overlay');
const body = document.body;

const searchIcon = document.getElementById('searchIcon');
const searchField = document.getElementById('searchField');

// Открытие/закрытие бургер-меню
burgerButton.addEventListener('click', () => {
    burgerMenu.classList.toggle('open');
    overlay.classList.toggle('open');
    body.classList.toggle('no-scroll');
});

// Закрытие бургер-меню при клике на затемнение
overlay.addEventListener('click', () => {
    burgerMenu.classList.remove('open');
    overlay.classList.remove('open');
    body.classList.remove('no-scroll');
});

// Открытие/закрытие поля поиска
searchIcon.addEventListener('click', (e) => {
    e.stopPropagation();
    searchField.classList.toggle('open');
});

// Закрытие поля поиска при клике вне его области
document.addEventListener('click', (e) => {
    if (!searchField.contains(e.target) && !searchIcon.contains(e.target)) {
        searchField.classList.remove('open');
    }
});

// Управление слайдерами
const sliders = [
    document.getElementById('slider'), // Слайдер на главной странице
    document.getElementById('collectionSlider'), // Слайдер на странице "О музее"
    ...document.querySelectorAll('.afisha-slider') // Слайдеры на странице "Афиша"
];

sliders.forEach(slider => {
    if (slider) {
        let isDragging = false;
        let startX, scrollLeft;

        slider.addEventListener('mousedown', (e) => {
            isDragging = true;
            startX = e.pageX - slider.offsetLeft;
            scrollLeft = slider.scrollLeft;
            slider.style.cursor = 'grabbing';
        });

        slider.addEventListener('mouseleave', () => {
            isDragging = false;
            slider.style.cursor = 'grab';
        });

        slider.addEventListener('mouseup', () => {
            isDragging = false;
            slider.style.cursor = 'grab';
        });

        slider.addEventListener('mousemove', (e) => {
            if (!isDragging) return;
            e.preventDefault();
            const x = e.pageX - slider.offsetLeft;
            const walk = (x - startX) * 2;
            slider.scrollLeft = scrollLeft - walk;
        });
    }
});

// Управление слайдерами на странице "Афиша" (дополнительные функции)
const afishaSliders = document.querySelectorAll('.afisha-slider');

afishaSliders.forEach(slider => {
    let isDragging = false;
    let startX, scrollLeft;

    slider.addEventListener('mousedown', (e) => {
        isDragging = true;
        startX = e.pageX - slider.offsetLeft;
        scrollLeft = slider.scrollLeft;
        slider.style.cursor = 'grabbing';
    });

    slider.addEventListener('mouseleave', () => {
        isDragging = false;
        slider.style.cursor = 'grab';
    });

    slider.addEventListener('mouseup', () => {
        isDragging = false;
        slider.style.cursor = 'grab';
    });

    slider.addEventListener('mousemove', (e) => {
        if (!isDragging) return;
        e.preventDefault();
        const x = e.pageX - slider.offsetLeft;
        const walk = (x - startX) * 2;
        slider.scrollLeft = scrollLeft - walk;
    });
});

// Функционал переключения валидаторов цвета
const productCards = document.querySelectorAll(".product-card");

productCards.forEach((card) => {
    const colorValidators = card.querySelectorAll(".color-validator");
    colorValidators.forEach((validator) => {
        validator.addEventListener("click", () => {
            colorValidators.forEach((v) => v.classList.remove("selected"));
            validator.classList.add("selected");
        });
    });
});

