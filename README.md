# Digital School ("Электронная-школа")

## Описание:

Система "Электронная школа",

- 1.1.при переходе на страницу проекта в браузере откроется форма аутентификации (форма Регистрации/Авторизации(проверка логина и пароля));
- 1.2. после авторизации открывается форма со списком учеников с кнопками "Добавить" и "Удалить";
- 1.3. при нажатии на кнопку "Добавить" откроется форма добавления ученика, при сохранении ученик будет добавлен в список;
- 1.4. при нажатии на кнопку "Удалить", ученик будет удален из списка.

## Technologies Used:

- ReactJS
- NodeJS
- ExpressJs
- MySQL
- JavaScript
- HTML
- CSS

## Database:

2 tables:

- Users: Хранит данные преподавателей (users), {username, password}.
- Students: Хранит данные студентов (students), {name, surname, midterm, endterm, final, gpa}.

---

## 1.Download:

`git clone https://github.com/alibekbirlikbai/Digital-School-React-MySql-NodeJs.git`

## 2.Launch Client:

### 2.1.Open Terminal:

`cd client`

### 2.2.Install NPM Dependencies:

`npm install`

`npm install react-couter-dom`
`npm install axios`


### 2.3.Start React:

`npm start`

## 3.Launch Server:

### 3.1.Open Terminal

`cd server`

### 3.2.Install NPM Dependencies:
`npm install mysql express`

`npm install cors`

### 3.3.Run Server:

`node .\index.js`

<br>

---

### 1.Ждём, когда запуститься сервер. После запуска сервера, заходим в браузере по адресу:

`http://localhost:3000/`

### 2.Видим форму Аутентификации. Далее заходим в 'Registration' по адресу:

`http://localhost:3000/registration-page`

### 3.Регистрируемся, нажимаем на 'Registration' и попадаем на страницу списка студентов ('List of Students') по адресу:

`http://localhost:3000/student-list`

### 4.Далее если мы хотим `"Добавить"` нового студента мы должны нажать на кнопку 'Add new Student', тогда нас перенаправит на страницу 'Add new Student' по адресу:

`http://localhost:3000/add-student`

### 5.Заполняем анкету, нажимаем на кнопку 'Add', после чего нас снова перенаправит на страницу 'List of Students' с обновленной таблицей студентов.

### 6.Также на странице 'List of Students', можно выйти из аккаунта нажав на кнопку 'logout', после чего нас переноправит обратно на главную страницу Аутентификации.
---
## Demo
![project-demo](https://user-images.githubusercontent.com/87764579/138043067-ff8d4c52-1586-455a-8c98-1646ab5e53cc.png)
