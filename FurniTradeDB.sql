CREATE DATABASE IF NOT EXISTS furnitradedb;
USE furnitradedb;

DROP TABLE IF EXISTS Users CASCADE;

CREATE TABLE Users (
    user_id int4 UNIQUE,
    username varchar(255),
    first_name varchar(255),
    last_name varchar(255),
    DOB date,
    email varchar(255) UNIQUE,
    password varchar(255),
  CONSTRAINT users_pk PRIMARY KEY (user_id)
);