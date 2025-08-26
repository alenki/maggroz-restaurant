initMap();

async function initMap() {
    // Промис `ymaps3.ready` будет зарезолвлен, когда загрузятся все компоненты основного модуля API
    await ymaps3.ready;

    const {YMap, YMapDefaultSchemeLayer} = ymaps3;

    // Иницилиазируем карту
    const map = new YMap(
        // Передаём ссылку на HTMLElement контейнера
        document.getElementById('map'),

        // Передаём параметры инициализации карты
        {
            location: {
                // Координаты центра карты
                center: [30.2855, 60.0117],
                // Уровень масштабирования
                zoom: 18
            }
        }
    );
{/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1994.2124844948294!2d30.282927077469047!3d60.01155165622621!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x469635648f98ad67%3A0x42aa4b5cc5df328f!2sHALAL%20MAGGROZ!5e0!3m2!1sen!2snl!4v1756212993464!5m2!1sen!2snl" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
    // Добавляем слой для отображения схематической карты
    map.addChild(new YMapDefaultSchemeLayer());
}