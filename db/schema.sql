DROP DATABASE IF EXISTS clients_db;

CREATE DATABASE clients_db;
USE clients_db;

CREATE TABLE clients (
id int NOT NULL AUTO_INCREMENT,
client_name varchar(255) NOT NULL,
primary_contact varchar(255) NOT NULL,
primary_phone INT(11),
primary_email varchar(255) NOT NULL,
preferred_dep_airport varchar(255),
payment_type varchar(55) NOT NULL,
active BOOLEAN DEFAULT true,
PRIMARY KEY (id)
);

CREATE TABLE trips(
id int NOT NULL AUTO_INCREMENT,
client_id int not null,
dep_date DATE NOT NULL,
dep_flight varchar(255) not null,
dep_airport varchar(255) not null,
dep_time int not null,
arr_date date,
arr_flight varchar(55),
arr_airport varchar(255),
arr_time int,
num_passengers int not null,
deposit_due date not null,
cancellation_deadline date not null,
final_payment date not null,
active BOOLEAN DEFAULT true,
PRIMARY KEY (id)
);