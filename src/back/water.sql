CREATE TABLE IF NOT EXISTS apps (
	Id int(20) PRIMARY KEY AUTO_INCREMENT,
    Name varchar(255) NOT NULL,
    Phone varchar(255) NOT NULL,
    Description text NOT NULL,
    Email varchar(255) NOT NULL,
    CreateDate datetime DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS news (
	Id int(20) PRIMARY KEY AUTO_INCREMENT,
    Name varchar(255) NOT NULL,
    Image varchar(255) NULL,
    Description text NOT NULL,
    CreateDate datetime DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS docs (
	Id int(20) PRIMARY KEY AUTO_INCREMENT,
    Name varchar(255) NOT NULL,
    Image varchar(255) NOT NULL,
    Type varchar(255) NOT NULL,
    IsImportant bit DEFAULT false,
    Document varchar(255) NOT NULL
);

CREATE TABLE IF NOT EXISTS props (
	Id int(20) PRIMARY KEY AUTO_INCREMENT,
    Name varchar(255) UNIQUE NOT NULL,
    Value varchar(255) NOT NULL
);

