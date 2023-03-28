# fullstack_assignment_car
This is a project built on the stack of Angular, 
Spring boot and PostgreSQL, which gives user an opportunity
to register their car on the database, as well as manipulate
the items in there(future functions)



![Alt text](./cars_assignment_diagram.svg)

This project consists of two parts:
    1. angular - front-end part of the application
    2. spring_boot - back-end part of the application







Для того, чтобы открыть и запустить программу, необходимо запустить фронт и бэк на своих серверах, а также 
создать таблицу "cars" в любой из баз данных, которые есть, или же создать новую.

* Так как отправка данных в локальной версии зависит от порта, нужно убедиться что порты для серверов соответствуют 
друг другу. 

1. Создайте таблицу "cars", добавьте туда четыре колонки. Формат такой:
название:тип данных - 
 
name:text
color:text
date_of_manufacture:date
country_of_manufacture:text

2. Распакуйте папку car_assignment как проект мавен
Откройте src/resources/application.properties.txt и замените данные своими, включая:
локальный адрес postgresql сервера
логин
пароль от базы.

Откройте терминал в проекте и введите команду 
mvn spring-boot:run

3.Распакуйте папку angular как проект в webstorm
откройте терминал в проекте и введите команду 
ng serve -o


4. теперь вы можете вводить данные, проверять работу приложения. Модели(название) машин загружаются после клика на 
коробку input. В консоль выводятся данные которые вы отправляете на сервер.