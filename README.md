# fullstack_assignment_car
This is a project built on the stack of Angular, 
Spring boot and PostgreSQL, which gives user an opportunity
to register their car on the database, as well as manipulate
the items in there(future functions)



![Alt text](./cars.assignment.diagram.svg)

This project consists of two parts:
    1. angular - front-end part of the application
    2. spring_boot - back-end part of the application







To run, follow these steps after downloading and unpacking the zip file: 


1. Create table cars in postgresql
2. Open the spring_boot folder with any code editor, navigate to src/main/application.properties.txt.

You will see the following: 
spring.datasource.url=jdbc:postgresql://*\insert database local address here*\
spring.datasource.username=*\insert username*\
spring.datasource.password=*\insert password*\
server.port=8081

Replace values marked with '*\' with actual values for local address (for example localhost:5432/cardatabase) 

3. navigate to src/main/java/com/assignments/car_assignment/CarController.java

Make sure that the port for angular's live development server (default 4200) is the same as line 14 @CrossOrigin(origins="http://localhost:4200") 

4. run the      mvn spring-boot:run     command to run the backend server.


5. Work with spring is now complete. Now open the angular folder with your code editor. run the 'ng serve -o' command with your terminal.


The development now looks as it should. You are free to add cars and see results. Make sure to fill all text input options so the submit button is enabled

Car models load on-click of selectBox. Wait a few moments for all car models to upload from the API.