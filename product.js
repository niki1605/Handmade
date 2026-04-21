// Данные о товарах (должны совпадать с данными в script.js)
const products = [
    /*{
        id: 1,
        title: "Деревянная разделочная доска",
        description: "Экологичная разделочная доска из массива дуба с удобной ручкой. Идеально подходит для ежедневного использования на кухне. Изготовлена вручную с тщательной шлифовкой и обработкой пищевым маслом.",
        price: 500,
        image: "images/product2.jpeg",
        category: "Для кухни",
        masterPhone: "Товар на изготовлении",
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
        title: "Разноцветная плетеная мочалка из капрона",
        description: "Мочалка ручной работы. Отлично подходит для очищения кожи",
        price: 200,
        image: "images/mohalka1.jpeg",
        category: "Для ванной",
        masterPhone: "+7 918 074-41-97",
        whatsapp: true,
        telegram: false,
        details: {
            //material: "Натуральная люфа",
            dimensions: "23×9 см",
            color: "Разноцветная",
            weight: "0.1 кг",
            features: ["Хороший пилинг","Отшелушивание омертвевших клеток"]
        }
    },*/
    {
        id: 3,
        title: "Деревянная ложка для кухни",
        description: "(На фото изображен б/у товар в реальности он будет новый)Ручная работа из бука, идеально отполированная и безопасная для посуды. Не повреждает антипригарное покрытие и не впитывает запахи. Удобно лежит в руке.",
        price: 300,
        image: "images/product3.jpg",
        category: "Для кухни",
        masterPhone: "+7 918 688-42-86",
        whatsapp: true,
        telegram: false,
        details: {
            material: "Массив бука",
            dimensions: "28×5×3 см",
            color: "Светлое дерево",
            weight: "0.2 кг",
            features: ["Ручная шлифовка", "Безопасна для антипригарного покрытия", "Удобная ручка", "Не впитывает запахи", "Долговечная"]
        }
    } /*,
    {
        id: 4,
        title: "Сине-красная плетеная мочалка из капрона",
        description: "Мочалка Сине-красная с желтыми ручками ручной работы. Отлично подходит для очищения кожи",
        price: 200,
        image: "images/mohalka2.jpeg",
        category: "Для ванной",
        masterPhone: "+7 918 074-41-97",
        whatsapp: true,
        telegram: false,
        details: {
            //material: "Капрон",
            dimensions: "23×7 см",
            color: "Сине-красная с желтыми ручками",
            weight: "0.1 кг",
            features: ["Хороший пилинг","Отшелушивание омертвевших клеток"]
        }
    },
    {
        id: 5,
        title: "Зеленая плетеная мочалка из капрона",
        description: "Мочалка зеленая с желтыми ручками ручной работы. Отлично подходит для очищения и пилинга кожи",
        price: 200,
        image: "images/mohalka3.jpeg",
        category: "Для ванной",
        masterPhone: "+7 918 074-41-97",
        whatsapp: true,
        telegram: false,
        details: {
           // material: "Натуральная люфа",
            dimensions: "23×7 см",
            color: "Зеленая с желтыми ручками",
            weight: "0.1 кг",
            features: ["Хороший пилинг","Отшелушивание омертвевших клеток"]
        }
    },
    {
        id: 6,
        title: "Сине-Желто-розовая плетеная мочалка из капрона",
        description: "Мочалка Сине-Желто-розовая ручной работы. Отлично подходит для очищения и пилинга кожи",
        price: 200,
        image: "images/mohalka4.jpeg",
        category: "Для ванной",
        masterPhone: "+7 918 074-41-97",
        whatsapp: true,
        telegram: false,
        details: {
           // material: "Натуральная люфа",
            dimensions: "23×7 см",
            color: "Сине-Желто-розовая",
            weight: "0.1 кг",
            features: ["Хороший пилинг","Отшелушивание омертвевших клеток"]
        }
    }*/
   ,
    {
        id: 7,
        title: "Кашпо из ротанга",
        description: `Уют» — кашпо ручной работы, которые хочется трогать

Авторские узоры, только натуральные материалы, никакого пластика.
Каждое кашпо создаётся с душой — медленно, аккуратно, с любовью к деталям.

Сделано в России. Семейное производство.`,
        price: 2000,
        image: "images/кашпо1карточка.png",
         images: ["images/кашпо1карточка.png", "images/кашпо_1_карточка_вид2.png", "images/кашпо1_вид_3.png"], // несколько изображений
        category: "Интерьер",
        masterPhone: "+7 918 695 40 61",
        whatsapp: true,
        telegram: true,
        details: {
           material: "Искуственный ротанг",
            dimensions: "27×37×37 см",
            color: "Светлое дерево",
            weight: "800 г",
            features: ["Ручная работа", "Красивый узор"]
        }
    }
];

// Глобальная переменная для текущего товара и индекса изображения
let currentProduct = null;
let currentImageIndex = 0;

// Загрузка информации о товаре при загрузке страницы
document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = parseInt(urlParams.get('id'));
    
    const product = products.find(p => p.id === productId);
    
    if (product) {
        currentProduct = product;
        displayProductDetails(product);
        setupEventListeners(product);
        setupGallery(product);
    } else {
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
    document.title = `${product.title} - Ручная работа`;
    
    document.getElementById('category-link').textContent = product.category;
    document.getElementById('category-link').href = `index.html?category=${encodeURIComponent(product.category)}`;
    document.getElementById('product-name').textContent = product.title;
    
    // Устанавливаем первое изображение
    const images = product.images || [product.image];
    document.getElementById('product-image').src = images[0];
    document.getElementById('product-image').alt = product.title;
    
    document.getElementById('product-title').textContent = product.title;
    document.getElementById('product-price').textContent = `${product.price} руб.`;
    document.getElementById('product-description').textContent = product.description;
    
    document.getElementById('spec-material').textContent = product.details.material || '-';
    document.getElementById('spec-dimensions').textContent = product.details.dimensions || '-';
    document.getElementById('spec-color').textContent = product.details.color || '-';
    document.getElementById('spec-weight').textContent = product.details.weight || '-';
    
    const featuresList = document.getElementById('features-list');
    featuresList.innerHTML = '';
    
    if (product.details.features && product.details.features.length) {
        product.details.features.forEach(feature => {
            const li = document.createElement('li');
            li.textContent = feature;
            featuresList.appendChild(li);
        });
    } else {
        featuresList.innerHTML = '<li>Информация отсутствует</li>';
    }
}

// Настройка галереи изображений
function setupGallery(product) {
    const images = product.images || [product.image];
    if (!images.length) return;
    
    currentImageIndex = 0;
    
    // Создаем контейнер для миниатюр, если его нет
    let thumbnailsContainer = document.querySelector('.thumbnails-container');
    if (!thumbnailsContainer) {
        const galleryDiv = document.querySelector('.product-gallery');
        thumbnailsContainer = document.createElement('div');
        thumbnailsContainer.className = 'thumbnails-container';
        galleryDiv.appendChild(thumbnailsContainer);
    }
    
    // Очищаем и заполняем миниатюры
    thumbnailsContainer.innerHTML = '';
    images.forEach((imgSrc, idx) => {
        const thumb = document.createElement('div');
        thumb.className = 'thumbnail';
        if (idx === currentImageIndex) thumb.classList.add('active');
        
        const img = document.createElement('img');
        img.src = imgSrc;
        img.alt = `${product.title} - фото ${idx + 1}`;
        
        thumb.appendChild(img);
        thumb.addEventListener('click', () => {
            currentImageIndex = idx;
            updateMainImage(images[currentImageIndex]);
            updateActiveThumbnail();
        });
        
        thumbnailsContainer.appendChild(thumb);
    });
    
    // Обновляем основное изображение
    updateMainImage(images[currentImageIndex]);
    
    // Показываем/скрываем кнопки навигации
    const prevBtn = document.getElementById('prev-image');
    const nextBtn = document.getElementById('next-image');
    
    if (prevBtn && nextBtn) {
        prevBtn.style.display = images.length > 1 ? 'flex' : 'none';
        nextBtn.style.display = images.length > 1 ? 'flex' : 'none';
        
        // Удаляем старые обработчики, чтобы не навешивать лишние
        const newPrevBtn = prevBtn.cloneNode(true);
        const newNextBtn = nextBtn.cloneNode(true);
        prevBtn.parentNode.replaceChild(newPrevBtn, prevBtn);
        nextBtn.parentNode.replaceChild(newNextBtn, nextBtn);
        
        newPrevBtn.addEventListener('click', () => {
            if (images.length === 0) return;
            currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
            updateMainImage(images[currentImageIndex]);
            updateActiveThumbnail();
        });
        
        newNextBtn.addEventListener('click', () => {
            if (images.length === 0) return;
            currentImageIndex = (currentImageIndex + 1) % images.length;
            updateMainImage(images[currentImageIndex]);
            updateActiveThumbnail();
        });
    }
}

function updateMainImage(src) {
    const mainImg = document.getElementById('product-image');
    if (mainImg) {
        mainImg.src = src;
    }
    // Также обновляем изображение в модальном окне (если открыто)
    const fullscreenImg = document.getElementById('fullscreen-image');
    if (fullscreenImg && fullscreenImg.src !== src) {
        // Не обновляем автоматически, чтобы не сбивать просмотр
    }
}

function updateActiveThumbnail() {
    const thumbs = document.querySelectorAll('.thumbnail');
    thumbs.forEach((thumb, idx) => {
        if (idx === currentImageIndex) {
            thumb.classList.add('active');
        } else {
            thumb.classList.remove('active');
        }
    });
}

// Настройка обработчиков событий
function setupEventListeners(product) {
    const orderModal = document.getElementById('order-modal');
    const closeOrderBtn = document.querySelector('#order-modal .close');
    const orderBtn = document.getElementById('order-btn');
    
    if (closeOrderBtn) {
        closeOrderBtn.addEventListener('click', function() {
            orderModal.style.display = 'none';
        });
    }
    
    window.addEventListener('click', function(e) {
        if (e.target === orderModal) {
            orderModal.style.display = 'none';
        }
    });
    
    if (orderBtn) {
        orderBtn.addEventListener('click', function() {
            openOrderModal(product);
        });
    }
    
    const imageModal = document.getElementById('image-modal');
    const closeImageBtn = document.querySelector('#image-modal .close-image');
    const zoomBtn = document.getElementById('zoom-btn');
    const productImage = document.getElementById('product-image');
    
    if (zoomBtn) {
        zoomBtn.addEventListener('click', function() {
            openImageModal(productImage.src, product.title);
        });
    }
    
    if (productImage) {
        productImage.addEventListener('click', function() {
            openImageModal(productImage.src, product.title);
        });
    }
    
    if (closeImageBtn) {
        closeImageBtn.addEventListener('click', function() {
            imageModal.style.display = 'none';
        });
    }
    
    window.addEventListener('click', function(e) {
        if (e.target === imageModal) {
            imageModal.style.display = 'none';
        }
    });
    
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            orderModal.style.display = 'none';
            imageModal.style.display = 'none';
        }
        // Переключение изображений стрелками, если галерея открыта
        if (imageModal.style.display === 'block' && currentProduct) {
            const images = currentProduct.images || [currentProduct.image];
            if (e.key === 'ArrowLeft') {
                e.preventDefault();
                currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
                const newSrc = images[currentImageIndex];
                document.getElementById('fullscreen-image').src = newSrc;
                updateMainImage(newSrc);
                updateActiveThumbnail();
            } else if (e.key === 'ArrowRight') {
                e.preventDefault();
                currentImageIndex = (currentImageIndex + 1) % images.length;
                const newSrc = images[currentImageIndex];
                document.getElementById('fullscreen-image').src = newSrc;
                updateMainImage(newSrc);
                updateActiveThumbnail();
            }
        }
    });
}

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
    
    if (whatsappOption) {
        if (product.whatsapp) {
            whatsappOption.classList.add('available');
        } else {
            whatsappOption.classList.remove('available');
        }
    }
    
    if (telegramOption) {
        if (product.telegram) {
            telegramOption.classList.add('available');
        } else {
            telegramOption.classList.remove('available');
        }
    }
    
    modal.style.display = 'block';
}

function openImageModal(imageSrc, imageAlt) {
    const modal = document.getElementById('image-modal');
    const fullscreenImage = document.getElementById('fullscreen-image');
    
    fullscreenImage.src = imageSrc;
    fullscreenImage.alt = imageAlt;
    
    modal.style.display = 'block';
}