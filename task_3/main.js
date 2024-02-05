const product = {
    name: "Клавиатура",
    price: 3000,
    inStock: true,
    brand: Bloddy,
    specifications: {
        ServiceLife: "100 миллионов нажатий",
        Interface: "USB",
        Whitespace: "Усиленный",
    },
    Discount: {
        percentage: 15,
        expirationDate: "2025-02.05"
    }
};

// Объект "customer"
const Buyer = {
    name: "Артём",
    Budget: 3500
    
};

// Проверка бюджета покупателя
    (client.budget < product.price) {
    console.log("У вас недостаточно средств для совершения покупки."); {
    
    // Вывод информации о покупке
    console.log(`Buyer ${customer.name} приобрел ${product.name} ${product.brand}.`); 

    // Вывод технических характеристик товара
    (product.price) 
        console.log("Скидка:", product.Discount.percentage + "Сколько процентов до" + product.Discount.expirationDate);
        
        // Расчёт и вывод цены со скидкой
        product.price - (product.price) * (product.percentage / 100);
        console.log("Цена со скидкой:", product.price);
        // Вывод обычной цены без скидки
        console.log("Цена:", product.price); }
    } 