// Данные о товарах (должны совпадать с данными в script.js)
const products = [
    {
        id: 1,
        title: "Деревянная разделочная доска",
        description: "Экологичная разделочная доска из массива дуба с удобной ручкой. Идеально подходит для ежедневного использования на кухне. Изготовлена вручную с тщательной шлифовкой и обработкой пищевым маслом.",
        price: 500,
        image: "images/product2.jpeg",
        category: "Для кухни",
        masterPhone: "+7 999 123-45-67",
        whatsapp: true,
        telegram: false,
        details: {
            material: "Массив дуба",
            dimensions: "30×20×2 см",
            color: "Натуральное дерево",
            weight: "0.8 кг",
            features: ["Антибактериальная пропитка", "Удобная ручка", "Подходит для всех типов ножей", "Ручная работа", "Экологичный материал"]
        }
    },
    {
        id: 2,
        title: "Плетеная мочалка из капрона",
        description: "Мочалка ручной работы. Отлично подходит для очищения кожи",
        price: 200,
        image: "images/product1.jpeg",
        category: "Для ванной",
        masterPhone: "+7 918 074-41-97",
        whatsapp: true,
        telegram: false,
        details: {
            material: "Копроновый шпагат",
            dimensions: "23×9 см",
            color: "Разноцветная",
            weight: "0.1 кг",
            features: ["Экологичный материал", "Естественный пилинг", "Долговечная"]
        }
    },
    {
        id: 3,
        title: "Деревянная ложка для кухни",
        description: "Ручная работа из бука, идеально отполированная и безопасная для посуды. Не повреждает антипригарное покрытие и не впитывает запахи. Удобно лежит в руке.",
        price: 300,
        image: "images/product3.jpg",
        category: "Для кухни",
        masterPhone: "+7 916 777-88-99",
        whatsapp: true,
        telegram: false,
        details: {
            material: "Массив бука",
            dimensions: "28×5×3 см",
            color: "Светлое дерево",
            weight: "0.2 кг",
            features: ["Ручная шлифовка", "Безопасна для антипригарного покрытия", "Удобная ручка", "Не впитывает запахи", "Долговечная"]
        }
    } 
];

// Загрузка информации о товаре при загрузке страницы
document.addEventListener('DOMContentLoaded', function() {
    // Получаем ID товара из URL
    const urlParams = new URLSearchParams(window.location.search);
    const productId = parseInt(urlParams.get('id'));
    
    // Находим товар по ID
    const product = products.find(p => p.id === productId);
    
    if (product) {
        displayProductDetails(product);
        setupEventListeners(product);
    } else {
        // Если товар не найден, показываем сообщение об ошибке
        document.querySelector('main').innerHTML = `
            <div class="error-message">
                <h2>Товар не найден</h2>
                <p>Запрошенный товар не существует или был удален.</p>
                <a href="index.html" class="back-btn">Вернуться в каталог</a>
            </div>
        `;
    }
});

// Функция отображения детальной информации о товаре
function displayProductDetails(product) {
    // Обновляем заголовок страницы
    document.title = `${product.title} - Ручная работа`;
    
    // Заполняем хлебные крошки
    document.getElementById('category-link').textContent = product.category;
    document.getElementById('category-link').href = `index.html?category=${product.category}`;
    document.getElementById('product-name').textContent = product.title;
    
    // Заполняем основную информацию о товаре
    document.getElementById('product-image').src = product.image;
    document.getElementById('product-image').alt = product.title;
    document.getElementById('product-title').textContent = product.title;
    document.getElementById('product-price').textContent = `${product.price} руб.`;
    document.getElementById('product-description').textContent = product.description;
    
    // Заполняем характеристики
    document.getElementById('spec-material').textContent = product.details.material;
    document.getElementById('spec-dimensions').textContent = product.details.dimensions;
    document.getElementById('spec-color').textContent = product.details.color;
    document.getElementById('spec-weight').textContent = product.details.weight;
    
    // Заполняем особенности
    const featuresList = document.getElementById('features-list');
    featuresList.innerHTML = '';
    
    product.details.features.forEach(feature => {
        const li = document.createElement('li');
        li.textContent = feature;
        featuresList.appendChild(li);
    });
}

// Настройка обработчиков событий
function setupEventListeners(product) {
    // Настройка модального окна заказа
    const orderModal = document.getElementById('order-modal');
    const closeOrderBtn = document.querySelector('.close');
    const orderBtn = document.getElementById('order-btn');
    
    closeOrderBtn.addEventListener('click', function() {
        orderModal.style.display = 'none';
    });
    
    window.addEventListener('click', function(e) {
        if (e.target === orderModal) {
            orderModal.style.display = 'none';
        }
    });
    
    orderBtn.addEventListener('click', function() {
        openOrderModal(product);
    });
    
    // Настройка модального окна для полноэкранного изображения
    const imageModal = document.getElementById('image-modal');
    const closeImageBtn = document.querySelector('.close-image');
    const zoomBtn = document.getElementById('zoom-btn');
    const productImage = document.getElementById('product-image');
    
    // Обработчик для кнопки увеличения
    zoomBtn.addEventListener('click', function() {
        openImageModal(product.image, product.title);
    });
    
    // Обработчик для клика по изображению
    productImage.addEventListener('click', function() {
        openImageModal(product.image, product.title);
    });
    
    // Обработчик для закрытия модального окна изображения
    closeImageBtn.addEventListener('click', function() {
        imageModal.style.display = 'none';
    });
    
    window.addEventListener('click', function(e) {
        if (e.target === imageModal) {
            imageModal.style.display = 'none';
        }
    });
    
    // Закрытие по клавише Escape
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            orderModal.style.display = 'none';
            imageModal.style.display = 'none';
        }
    });
}

// Функция открытия модального окна заказа
function openOrderModal(product) {
    const modal = document.getElementById('order-modal');
    const modalProductInfo = document.getElementById('modal-product-info');
    
    modalProductInfo.innerHTML = `
        <h3>${product.title}</h3>
        <p>Цена: ${product.price} руб.</p>
    `;
    
    document.getElementById('master-phone').textContent = product.masterPhone;
    
    const whatsappOption = document.getElementById('whatsapp-available');
    const telegramOption = document.getElementById('telegram-available');
    
    if (product.whatsapp) {
        whatsappOption.classList.add('available');
    } else {
        whatsappOption.classList.remove('available');
    }
    
    if (product.telegram) {
        telegramOption.classList.add('available');
    } else {
        telegramOption.classList.remove('available');
    }
    
    modal.style.display = 'block';
}

// Функция открытия модального окна с изображением
function openImageModal(imageSrc, imageAlt) {
    const modal = document.getElementById('image-modal');
    const fullscreenImage = document.getElementById('fullscreen-image');
    
    fullscreenImage.src = imageSrc;
    fullscreenImage.alt = imageAlt;
    
    modal.style.display = 'block';
}