// Данные о товарах
const products = [
   /*{
        id: 1,
        title: "Деревянная разделочная доска",
        description: "Экологичная разделочная доска из массива дуба с удобной ручкой. Идеально подходит для ежедневного использования на кухне. Изготовлена вручную с тщательной шлифовкой и обработкой пищевым маслом.",
        price: 500,
        image: "images/product2.jpeg",
        category: "Для кухни",
        masterPhone: "Товар на изготовлении",
       // whatsapp: true,
        telegram: true,
        max: true,
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
       //whatsapp: true,
        telegram: true,
        max: true,
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
       // whatsapp: true,
        telegram: true,
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
       //whatsapp: true,
        telegram: true,
        max: true,
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
      //whatsapp: true,
        telegram: true,
        max: true,
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
       //whatsapp: true,
        telegram: true,
        max: true,
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
        //whatsapp: true,
        telegram: true,
        max: true,
        details: {
           material: "Искуственный ротанг",
            dimensions: "27×37×37 см",
            color: "Светлое дерево",
            weight: "800 г",
            features: ["Ручная работа", "Красивый узор"]
        }
    },
    {
        id: 8,
        title: "Брелки",
        description: `Яркий аксессуар для твоего стиля: Коллекционный брелок (1 шт.)
                                           Добавь красок своим будням!
 Наши стильные брелки — это идеальный способ выразить свою индивидуальность, украсить рюкзак, ключи или чехол телефона. Каждый брелок выполнен с вниманием к деталям и любовью к качеству.

ВНИМАНИЕ: Брелки продаются поштучно. Выбирай именно тот дизайн, который откликается тебе, или собери всю коллекцию!
                                           Почему стоит выбрать наши брелки?
🔗 Надежное крепление: Прочное металлическое кольцо (или карабин) гарантирует, что ваш любимый герой не потеряется.
🎁 Идеальный подарок: Маленький, но приятный сюрприз для друга, коллеги или самого себя. Подходит для любого повода!`,
        price: 250,
        image: "images/брелки.jpg",
         //images: ["images/кашпо1карточка.png", "images/кашпо_1_карточка_вид2.png", "images/кашпо1_вид_3.png"], // несколько изображений
        category: "Аксессуары",
        masterPhone: "+7 918 074-41-97",
        //whatsapp: true,
        telegram: true,
        max: true,
        details: {
           material: "Ткань",
            dimensions: "небольшие",
            color: "Разные",
            weight: "легкие",
            features: ["Ручная работа", "Надежное крепление"]
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
// Обновленная функция openOrderModal для script.js:
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
    const maxOption = document.getElementById('max-available');
    
    if (whatsappOption) {
        if (product.whatsapp) {
            whatsappOption.classList.add('available');
            whatsappOption.style.display = 'inline-block';
        } else {
            whatsappOption.classList.remove('available');
            whatsappOption.style.display = 'none';
        }
    }
    
    if (telegramOption) {
        if (product.telegram) {
            telegramOption.classList.add('available');
            telegramOption.style.display = 'inline-block';
        } else {
            telegramOption.classList.remove('available');
            telegramOption.style.display = 'none';
        }
    }
    
    if (maxOption) {
        if (product.max) {
            maxOption.classList.add('available');
            maxOption.style.display = 'inline-block';
        } else {
            maxOption.classList.remove('available');
            maxOption.style.display = 'none';
        }
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