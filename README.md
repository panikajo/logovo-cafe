# LOGOVO — Кафе-бар

Сайт для кафе-бара **LOGOVO** с возможностью просмотра меню и бронирования столиков.

## Возможности

- Главная страница с информацией о заведении
- Полное меню с категориями (закуски, салаты, горячее, десерты, напитки, бар)
- Галерея фотографий
- Форма бронирования столика
- Контактная информация и часы работы
- Адаптивный дизайн (мобильные, планшеты, десктоп)

## Технологии

- HTML5
- CSS3 (Custom Properties, Grid, Flexbox, анимации)
- Vanilla JavaScript (ES6+)
- Google Fonts (Playfair Display, Inter)

## Запуск

Откройте `index.html` в браузере или используйте любой HTTP-сервер:

```bash
# Python
python3 -m http.server 8080

# Node.js (npx)
npx serve .
```

## Структура

```
logovo-cafe/
├── index.html    — Основная HTML-страница
├── styles.css    — Стили
├── script.js     — Скрипты (навигация, табы меню, форма)
└── README.md     — Документация
```

## Как обновить меню

Меню находится в `index.html` в секции `<section class="section menu" id="menu">`. Каждый пункт меню имеет следующую структуру:

```html
<div class="menu-item">
    <div class="menu-item-header">
        <h3 class="menu-item-name">Название блюда</h3>
        <span class="menu-item-price">000 ₽</span>
    </div>
    <p class="menu-item-desc">Описание блюда и ингредиенты</p>
    <span class="menu-item-weight">000 г</span>
</div>
```

Категории определяются в `data-category` атрибутах на кнопках-табах и `id` на `div.menu-category`.
