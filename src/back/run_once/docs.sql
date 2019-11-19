ALTER TABLE docs CHANGE Type TypeId varchar (255);

UPDATE docs SET TypeId = 1 WHERE TypeId = 'ref-book';
UPDATE docs SET TypeId = 2 WHERE TypeId = 'rates-pay';
UPDATE docs SET TypeId = 3 WHERE TypeId = 'rates-connect';
UPDATE docs SET TypeId = 4 WHERE TypeId = 'props';
UPDATE docs SET TypeId = 5 WHERE TypeId = 'orders';
UPDATE docs SET TypeId = 6 WHERE TypeId = 'constituent';
UPDATE docs SET TypeId = 7 WHERE TypeId = 'bookkeping';
UPDATE docs SET TypeId = 8 WHERE TypeId = 'allowing';
UPDATE docs SET TypeId = 9 WHERE TypeId = 'evaluation';
UPDATE docs SET TypeId = 10 WHERE TypeId = 'single';
UPDATE docs SET TypeId = 11 WHERE TypeId = 'vzu';

ALTER TABLE docs MODIFY TypeId int(20) NOT NULL;

CREATE TABLE IF NOT EXISTS doctypes (
	Id int(20) PRIMARY KEY AUTO_INCREMENT,
    Name varchar(255) NOT NULL,
    Info bit DEFAULT false
);

INSERT INTO doctypes (Name, Info) VALUES
("Справочник абонента", 0),
("Тарифы", 0),
("Тарифы на подключение", 0),
("Реквизиты", 1),
("Распоряжения", 1),
("Учредительные документы", 1),
("Бухгалтерская отчетность", 1),
("Разрешительная документация", 1),
("Специальная оценка условий труда", 1),
("Индивидуальный", 0),
("Свободные мощности ВЗУ", 1);

ALTER TABLE docs
ADD CONSTRAINT dt_fk
FOREIGN KEY (TypeId) REFERENCES doctypes(Id) ON DELETE CASCADE;