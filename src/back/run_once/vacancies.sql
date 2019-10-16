CREATE TABLE IF NOT EXISTS vacancies (
	Id int(20) PRIMARY KEY AUTO_INCREMENT,
    Name varchar(255) NOT NULL,
    WorkTime varchar(255) NOT NULL,
    Salary varchar(255) NOT NULL
);

CREATE TABLE IF NOT EXISTS vacancyvalues (
	Id int(20) PRIMARY KEY AUTO_INCREMENT,
    VacancyId int(20),
    Type varchar(50) NOT NULL,
    Name varchar(255) NOT NULL,
    CONSTRAINT vvv_fk FOREIGN KEY(VacancyId) REFERENCES vacancies(Id) ON DELETE CASCADE
);