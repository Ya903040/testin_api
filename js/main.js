fetch("http://localhost:8965/api/product/3")
    .then(response => response.json())
    .then(data => {

        let dataContainer = document.getElementById('dataContainer');

        // Создание HTML-разметки для отображения данных
        let html = '<ol>' +
            '<li><strong>ID: ' + data[2] + '</li>' +
            '<li><strong>Имя: ' + data.name + '</li>' +
            '<li><strong>Приз: ' + data.prize + '</li>' +
            '</ol>';

        // Вставка HTML-разметки в контейнер
        dataContainer.innerHTML = html;
        console.log(data)
    })
    .catch(() => console.log('ERROR'));







