// Данные о товарах
const products = [
    {
        id: 1,
        title: "Деревянная разделочная доска",
        description: "Экологичная разделочная доска из массива дуба с удобной ручкой.",
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
            features: ["Антибактериальная пропитка", "Удобная ручка", "Подходит для всех типов ножей"]
        }
    },
    {
        id: 2,
        title: "Разноцветная плетеная мочалка из капрона",
        description: "Мочалка ручной работы. Отлично подходит для очищения и пилинга кожи",
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
    },
    {
        id: 3,
        title: "Деревянная ложка для кухни",
        description: "Ручная работа из бука, идеально отполированная и безопасная для посуды.",
        price: 300,
        image: "images/product3.jpg",
        category: "Для кухни",
        masterPhone: "Товар на изготовлении",
        whatsapp: true,
        telegram: false,
        details: {
            material: "Массив бука",
            dimensions: "28×5×3 см",
            color: "Светлое дерево",
            weight: "0.2 кг",
            features: ["Ручная шлифовка", "Безопасна для антипригарного покрытия", "Удобная ручка"]
        }
    },
    {
        id: 4,
        title: "Сине-красная плетеная мочалка из капрона",
        description: "Мочалка Сине-красная с желтыми ручками ручной работы. Отлично подходит для очищения и пилинга кожи",
        price: 200,
        image: "images/mohalka2.jpeg",
        category: "Для ванной",
        masterPhone: "+7 918 074-41-97",
        whatsapp: true,
        telegram: false,
        details: {
           // material: "Натуральная люфа",
            dimensions: "23×7 см",
            color: "Сине-красная с желтыми ручками",
            weight: "0.1 кг",
            features: ["Хороший пилинг","Отшелушивание омертвевших клеток"]
        }
    }
];

// Загрузка товаров при загрузке страницы
document.addEventListener('DOMContentLoaded', function() {
    displayProducts(products);
    
    // Настройка сортировки
    document.getElementById('sort').addEventListener('change', function() {
        sortProducts(this.value);
    });
    
    // Настройка поиска
    document.getElementById('search-btn').addEventListener('click', searchProducts);
    document.getElementById('search-input').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            searchProducts();
        }
    });
    
    // Настройка модального окна
    const modal = document.getElementById('order-modal');
    const closeBtn = document.querySelector('.close');
    
    closeBtn.addEventListener('click', function() {
        modal.style.display = 'none';
    });
    
    window.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
    
    // Настройка фильтрации по категориям
    document.querySelectorAll('nav ul li a').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Удаляем активный класс у всех ссылок
            document.querySelectorAll('nav ul li a').forEach(item => {
                item.classList.remove('active');
            });
            
            // Добавляем активный класс к текущей ссылке
            this.classList.add('active');
            
            const category = this.textContent;
            filterProductsByCategory(category);
        });
    });
});

// Функция отображения товаров
function displayProducts(productsArray) {
    const productsGrid = document.getElementById('products-grid');
    productsGrid.innerHTML = '';
    
    if (productsArray.length === 0) {
        productsGrid.innerHTML = '<p class="no-products">Товары не найдены</p>';
        return;
    }
    
    productsArray.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        
        productCard.innerHTML = `
            <div class="product-image">
                <img src="${product.image}" alt="${product.title}">
            </div>
            <div class="product-info">
                <h3 class="product-title">${product.title}</h3>
                <p class="product-description">${product.description}</p>
                <p class="product-price">${product.price} руб.</p>
                <div class="product-buttons">
                    <a href="product.html?id=${product.id}" class="details-btn">Подробнее</a>
                    <button class="order-btn" data-id="${product.id}">Заказать</button>
                </div>
            </div>
        `;
        
        productsGrid.appendChild(productCard);
    });
    
    // Добавляем обработчики событий для кнопок заказа
    document.querySelectorAll('.order-btn').forEach(button => {
        button.addEventListener('click', function() {
            const productId = parseInt(this.getAttribute('data-id'));
            openOrderModal(productId);
        });
    });
}

// Функция открытия модального окна заказа
function openOrderModal(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
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

// Функция сортировки товаров
function sortProducts(criteria) {
    let sortedProducts = [...products];
    
    switch(criteria) {
        case 'price-asc':
            sortedProducts.sort((a, b) => a.price - b.price);
            break;
        case 'price-desc':
            sortedProducts.sort((a, b) => b.price - a.price);
            break;
        default:
            // Без сортировки (по умолчанию)
            break;
    }
    
    displayProducts(sortedProducts);
}

// Функция поиска товаров
function searchProducts() {
    const searchTerm = document.getElementById('search-input').value.toLowerCase().trim();
    
    if (searchTerm === '') {
        displayProducts(products);
        return;
    }
    
    const filteredProducts = products.filter(product => {
        return product.title.toLowerCase().includes(searchTerm) || 
               product.description.toLowerCase().includes(searchTerm) ||
               product.category.toLowerCase().includes(searchTerm);
    });
    
    displayProducts(filteredProducts);
}

// Функция фильтрации товаров по категории
function filterProductsByCategory(category) {
    if (category === 'Все товары') {
        displayProducts(products);
        return;
    }
    
    const filteredProducts = products.filter(product => {
        return product.category === category;
    });
    
    displayProducts(filteredProducts);
}