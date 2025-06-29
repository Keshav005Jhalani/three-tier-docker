-- Create the database (optional if already exists)
CREATE DATABASE IF NOT EXISTS testdb;
USE testdb;

-- Create the 'users' table
CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL
);

-- Insert sample data
INSERT INTO users (name) VALUES 
('Random1'),
('Random2'),
('Random3'),
('Random4');
