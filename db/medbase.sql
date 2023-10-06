CREATE DATABASE IF NOT EXISTS medbasedb;
use medbasedb;

CREATE TABLE admin(
    id_admin INT(10) NOT NULL AUTO_INCREMENT,
    admin_key VARCHAR(45),
    password_admin VARCHAR(30),
    PRIMARY KEY(id_admin)
);

CREATE TABLE doctor(
    id_doctor INT(10) NOT NULL AUTO_INCREMENT,
    id_admin INT(10) NOT NULL,
    fullname VARCHAR(60),
    email VARCHAR(60),
    user VARCHAR(45),
    password VARCHAR(30),
    suscription DATE,
    expiration DATE,
    doctor_key VARCHAR(15),
    PRIMARY KEY(id_doctor),
    FOREIGN KEY(id_admin) REFERENCES admin(id_admin)
);


CREATE TABLE assistant(
    id_assistant INT(10) NOT NULL AUTO_INCREMENT,
    id_admin INT(10) NOT NULL,
    fullname_assistant VARCHAR(60),
    email_assistant VARCHAR(60),
    user_assistant VARCHAR(45),
    password_assistant VARCHAR(30),
    suscription_assistant DATE,
    expiration_assistant DATE,
    assistant_key VARCHAR(15),
    PRIMARY KEY(id_assistant),
    FOREIGN KEY(id_admin) REFERENCES admin(id_admin)
);



CREATE TABLE profile(
    id_profile INT(10) NOT NULL AUTO_INCREMENT,
    id_doctor INT(10) NOT NULL,
    user VARCHAR(45),
    photo VARCHAR(45),
    fullname VARCHAR(60),
    email VARCHAR(60),
    cellphone INT(10),
    social_media TEXT,
    suscription DATE,
    expiration DATE,
    specialty VARCHAR(30),
    PRIMARY KEY(id_profile),
    FOREIGN KEY(id_doctor) REFERENCES doctor(id_doctor)
);

CREATE TABLE agenda(
    id_agenda INT(10) NOT NULL AUTO_INCREMENT,
    doctor_key VARCHAR(15),
    fullname_patient VARCHAR(60),
    checkup_type VARCHAR(25),
    date_agenda DATE,
    hour_agenda TIME,
    PRIMARY KEY(id_agenda)
);


CREATE TABLE patient(
    id_patient INT(10) NOT NULL AUTO_INCREMENT,
    id_doctor INT(10) NOT NULL,
    fullname_patient VARCHAR(60),
    cellphone_patient INT(10),
    email_patient VARCHAR(60),
    address VARCHAR(50),
    age INT(3),
    weight FLOAT(4),
    height FLOAT(4),
    civil_status VARCHAR(15),
    occupation VARCHAR(25),
    blood_type VARCHAR(4),
    record_date DATE,
    checkup_reason TEXT,
    menarche DATE,
    last_period DATE,
    birthday DATE,
    ctive_methods TEXT,
    abortions VARCHAR(30),
    note TEXT,
    PRIMARY KEY(id_patient),
    FOREIGN KEY(id_doctor) REFERENCES doctor(id_doctor)
);

CREATE TABLE checkup(
    id_checkup INT(10) NOT NULL AUTO_INCREMENT,
    id_patient INT(10) NOT NULL,
    fullname_patient VARCHAR(60),
    checkup_date DATE,
    checkup_reason TEXT,
    diagnosis TEXT,
    indications TEXT,
    comments TEXT,
    images TEXT,
    checkup_gain VARCHAR(20),
    PRIMARY KEY(id_checkup),
    FOREIGN KEY(id_patient) REFERENCES patient(id_patient)
);

CREATE TABLE supplier(
    id_supplier INT(10) NOT NULL AUTO_INCREMENT,
    name VARCHAR(60),
    description_supplier TEXT,
    order_date DATE,
    delivery_date DATE,
    to_pay FLOAT(10),
    delivered BOOLEAN,
    PRIMARY KEY(id_supplier)
);

CREATE TABLE news(
    id_new INT(10) NOT NULL AUTO_INCREMENT,
    description_news TEXT,
    image_new TEXT,
    PRIMARY KEY(id_new)
);