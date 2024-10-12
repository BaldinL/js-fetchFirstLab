"REQUEST АБО ЗАПИТИ"

"Для того, щоб виконати якусь дії з сервером, розробники з клієнтської частини відправляють HTTP-запит на серверну частину. Це називається запитом до сервера."

"Запити до серверної частини можуть оброблятися сервером, який, у свою чергу, може надсилати запити до бази даних для отримання, зміни чи видалення даних. Такий запит називається запитом до бази даних."

"Що потрібно для запиту?"

"1. URL (адреса сервера): Це шлях або адреса, до якої надсилається запит. URL може включати доменне ім'я або IP-адресу сервера та шлях до ресурсу, наприклад:"

"https://api.example.com/users (домен + шлях)"
"http://localhost:3000/students (локальний сервер)"


"2. HTTP-метод (тип запиту): HTTP-метод визначає тип дії, яку ми хочемо виконати з сервером. Найпоширеніші методи:"

"GET – отримання даних із сервера."
"POST – надсилання нових даних на сервер."
"PUT/PATCH – оновлення існуючих даних."
"DELETE – видалення даних."

fetch('https://api.example.com/users') //URL + метод GET за замовчуванням

fetch('https://api.example.com/users', {
  method: 'POST'
}) // URL + метод POST для створення користувачів, статей, подій...

"3. Заголовки (Headers): Це додаткова інформація, яка відправляється разом із запитом. Заголовки використовуються для передачі метаданих, таких як тип даних, формат запиту, авторизація тощо. Наприклад:"

"Заголовок Content-Type вказує, в якому форматі відправляються дані (наприклад, JSON)."

fetch('https://api.example.com/users', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  }
})

"4. Тіло запиту (Body): Це дані, які передаються у запиті (актуально для POST, PUT, PATCH-запитів). Тіло запиту містить інформацію, яку потрібно відправити на сервер, наприклад, новий запис або оновлені дані."

"Для GET - тіло запиту, як правило, не потрібне."
"Для POST - тіло запиту це нові дані, які створюються в базі даних"
"Для PUT/PATCH - тіло запиту це оновлені дані, які вже присутні в базі даних"

"Приклад тіла запиту (Body) при створенні юзера"
fetch('https://api.example.com/users', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    name: 'John',
    email: 'john@example.com'
  })
})

"Що таке JSON.stringify?"
"JSON.stringify — це метод в JavaScript, який перетворює об'єкти або масиви у формат JSON (JavaScript Object Notation). JSON — це текстовий формат для зберігання і передачі даних, який використовують для взаємодії між клієнтом (браузером) і сервером. JSON виглядає схоже на JavaScript-об'єкт, але це рядок (текст), який можна передавати через інтернет."
"Навіщо використовують JSON.stringify у запитах?"
"Коли ми хочемо відправити дані на сервер через запит (наприклад, у методі POST), нам потрібно передати їх у форматі JSON, оскільки сервери очікують, що дані будуть передані як текст. Всі дані, які ми надсилаємо на сервер, мають бути у вигляді рядка."

"5. Обробка відповіді (Response): Після того як сервер отримав і обробив запит, він повертає відповідь. Ця відповідь може містити запитувані дані або повідомлення про успішність чи помилку операції. Важливо вміти обробляти відповідь та перетворювати її у потрібний формат, наприклад JSON."

"Приклад обробки відповіді:"


fetch('https://api.example.com/users')
  .then(response => response.json()) // перетворюємо відповідь у JSON
  .then(data => console.log(data))   // виводимо отримані дані
  .catch(error => console.error('Error:', error)); // обробляємо помилку

"6. HTTP Статус-коди (HTTP Status Codes): HTTP статус-коди — це числові коди, які сервер відправляє клієнту у відповідь на запит. Вони допомагають зрозуміти, чи був запит успішно виконаний, чи виникла помилка. Статус-коди поділяються на кілька категорій:"

"Важливі коди - це 200, 201, 204, 400, 401, 403, 404, 500, 502, 503."
"Нижче перелік більшості кодів"

"1xx - Інформаційні коди (Informational Responses) Ця категорія означає, що запит отримано і продовжує оброблятися."

"100 Continue: Початкові частини запиту отримані і клієнт може продовжити відправляти решту даних."
"101 Switching Protocols: Сервер згоден змінити протокол зв'язку, як було запитано клієнтом."
"102 Processing: Сервер отримав запит, але його обробка ще триває."

"2xx - Успішні запити (Success Responses) Ця категорія означає, що запит був успішно прийнятий, зрозумілий і оброблений."

"200 OK: Усе добре, запит виконано успішно."
"201 Created: Новий ресурс був успішно створений."
"202 Accepted: Запит прийнято, але ще не завершено обробку."
"203 Non-Authoritative Information: Дані отримані, але вони відрізняються від даних сервера-першоджерела."
"204 No Content: Запит успішний, але немає даних для відправки у відповідь."
"205 Reset Content: Запит успішний, і клієнту потрібно скинути вигляд (наприклад, очистити форму)."
"206 Partial Content: Сервер відправляє частину даних (зазвичай використовується для завантаження великих файлів по частинах)."

"3xx - Перенаправлення (Redirection Responses) Статус-коди в цій категорії означають, що клієнт має виконати додаткові дії для завершення запиту."

"300 Multiple Choices: Є кілька можливих варіантів для відповіді, і клієнт має вибрати один."
"301 Moved Permanently: Ресурс був постійно переміщений на іншу URL-адресу."
"302 Found (Moved Temporarily): Ресурс тимчасово переміщений на іншу URL-адресу."
"303 See Other: Результат запиту можна знайти за іншою URL-адресою."
"304 Not Modified: Ресурс не був змінений з моменту останнього запиту (використовується для кешування)."
"307 Temporary Redirect: Запит потрібно повторити за іншою URL-адресою, але з тим самим методом."
"308 Permanent Redirect: Запит потрібно повторити за іншою URL-адресою з тим самим методом, і це перенаправлення є постійним."

"4xx - Помилки на стороні клієнта (Client Errors) Ці коди означають, що сталася помилка з боку клієнта, наприклад, невірно сформований запит або відсутні права доступу."

"400 Bad Request: Сервер не може обробити запит через синтаксичну помилку."
"401 Unauthorized: Необхідна автентифікація (наприклад, потрібно ввести логін і пароль)."
"403 Forbidden: Сервер зрозумів запит, але відмовляється його виконувати через недостатні права доступу."
"404 Not Found: Ресурс не знайдений."

"5xx - Помилки на стороні сервера (Server Errors) Ця категорія статус-кодів означає, що сталася помилка на сервері під час обробки запиту."

"500 Internal Server Error: Внутрішня помилка сервера."
"501 Not Implemented: Сервер не підтримує функціонал, необхідний для обробки запиту."
"502 Bad Gateway: Сервер отримав недійсну відповідь від іншого сервера."
"503 Service Unavailable: Сервер тимчасово недоступний (наприклад, через технічні роботи або перевантаження)."
"504 Gateway Timeout: Сервер не отримав відповідь від іншого сервера вчасно."
"505 HTTP Version Not Supported: Сервер не підтримує версію HTTP протоколу, зазначену в запиті."