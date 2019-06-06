CREATE TABLE IF NOT EXISTS apps (
	Id int(20) PRIMARY KEY AUTO_INCREMENT,
    Name varchar(255) NOT NULL,
    Phone varchar(255) NOT NULL,
    Email varchar(255) NOT NULL,
    Topic varchar(255) NOT NULL,
    Description text NOT NULL,
    CreateDate datetime DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS contacts (
	Id int(20) PRIMARY KEY AUTO_INCREMENT,
    Head varchar(255) NOT NULL,
    Time varchar(255) NULL,
    Boss varchar(255) NULL
);

CREATE TABLE IF NOT EXISTS contactvalues (
	Id int(20) PRIMARY KEY AUTO_INCREMENT,
    ContactId int(20),
    Type varchar(50) NOT NULL,
    Value varchar(255) NOT NULL,
    CONSTRAINT cvc_fk FOREIGN KEY(ContactId) REFERENCES contacts(Id) ON DELETE CASCADE
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

CREATE TABLE IF NOT EXISTS pricetypes (
	Id int(20) PRIMARY KEY AUTO_INCREMENT,
    Name varchar(255) NOT NULL,
    Type varchar(255) NOT NULL,
    Search varchar(200) NOT NULL,
    SearchLink varchar(200) NOT NULL
);

CREATE TABLE IF NOT EXISTS pricevalues (
	Id int(20) PRIMARY KEY AUTO_INCREMENT,
    PriceTypeId int(20),
    DateStart datetime NOT NULL,
    DateFinish datetime NOT NULL,
    Price float(18,2) NOT NULL,

    CONSTRAINT pvp_fk FOREIGN KEY(PriceTypeId) REFERENCES pricetypes(Id) ON DELETE CASCADE
);

INSERT into contacts VALUES
(null, 'Диспетчерская служба', 'круглосуточно', ''),
(null, 'Касса', 'пн-чт с 8:00 до 17:00, пт с 8:00 до 15:45, БЕЗ ОБЕДА', ''),
(null, 'Абонентский отдел (АО)', 'пн-чт с 8:00 до 17:00, пт с 8:00 до 15:45, БЕЗ ОБЕДА', 'Начальник отдела - Ковригина Марина Владимировна'),
(null, 'Гараж (диспетчер)', 'пн-чт с 8:00 до 17:00, пт с 8:00 до 15:45, обед 12:00-12:45', ''),
(null, 'Приемная', 'пн-чт с 8:00 до 17:00, пт с 8:00 до 15:45, обед 12:00-12:45', 'Директор - Якин Александр Петрович'),
(null, 'Заместитель директора по безопасности', 'пн-чт с 8:00 до 17:00, пт с 8:00 до 15:45, обед 12:00-12:45', 'Предрук Дмитрий Михайлович'),
(null, 'Производственно-технический отдел (ПТО)', 'пн-чт с 8:00 до 17:00, пт с 8:00 до 15:45, обед 12:00-12:45', 'Начальник отдела - Лагутина Наталья Васильевна'),
(null, 'Отдел кадров', 'пн-чт с 8:00 до 17:00, пт с 8:00 до 15:45, обед 12:00-12:45', 'Начальник отдела кадров - Лутфуллина Фарида Фаритовна'),
(null, 'Водопроводно-канализационный участок г. Наро-Фоминск', 'пн-чт с 8:00 до 17:00, пт с 8:00 до 15:45, обед 12:00-12:45', 'Начальник участка - Фролов Роман Семёнович'),
(null, 'Водопроводно-канализационный участок г. Верея', 'пн-чт с 8:00 до 17:00, пт с 8:00 до 15:45, обед 12:00-12:45', 'Начальник участка - Цыганов Евгений Владимирович'),
(null, 'Водопроводно-канализационный участок г. Апрелевка', 'пн-чт с 8:00 до 17:00, пт с 8:00 до 15:45, обед 12:00-12:45', 'Начальник участка - Цыганов Евгений Владимирович'),
(null, 'Водопроводно-канализационный участок Алабино', 'пн-чт с 8:00 до 17:00, пт с 8:00 до 15:45, обед 12:00-12:45', 'Начальник участка - Семенов Сергей Владимирович'),
(null, 'Водопроводно-канализационный участок Таширово и Головково', 'пн-чт с 8:00 до 17:00, пт с 8:00 до 15:45, обед 12:00-12:45', 'Начальник участка - Демидов Павел Владимирович'),
(null, 'Водопроводно-канализационный участок Атепцево', 'пн-чт с 8:00 до 17:00, пт с 8:00 до 15:45, обед 12:00-12:45', 'Начальник участка - Борисов Александр Геннадьевич'),
(null, 'Испытательная лаборатория (вода, стоки)', 'пн-чт с 8:00 до 17:00, пт с 8:00 до 15:45, обед 12:00-12:45', 'Начальник лаборатории - Богомягков Александр Викторович'),
(null, 'Передача показаний приборов учета', 'пн-чт с 8:00 до 17:00, пт с 8:00 до 15:45, БЕЗ ОБЕДА', '');

INSERT INTO contactvalues (ContactId, Type, Value) VALUES
(1,'phone', '+7(916)374-71-66'),
(1,'email', 'сds@vdknf.ru'),
(2,'phone', '+7(496)343-77-59'),
(2,'address', 'г. Наро-Фоминск, ул. Московская, 11-202'),
(3,'phone', '+7(496)343-34-74'),
(3,'email', 'abonent.boss@vdknf.ru'),
(3,'address', 'г. Наро-Фоминск, ул. Московская, 11-205'),
(4,'phone', '+7(496)343-66-68'),
(4,'phone', '+7(929)512-29-86'),
(4,'email', 'garag@vdknf.ru'),
(4,'address', 'г. Наро-Фоминск, ул. Московская, 11'),
(5,'phone', '+7(496)343-06-51'),
(5,'email', 'reception@vdknf.ru'),
(5,'address', 'г. Наро-Фоминск, ул. Московская, 11-2066'),
(6,'phone', '+7(926)208-81-77'),
(6,'email', 's.zam@vdknf.ru'),
(6,'address', 'г. Наро-Фоминск, ул. Московская, 11-207'),
(7,'phone', '+7(496)343-96-20'),
(7,'email', 'pto.boss@vdknf.ru'),
(7,'address', 'г. Наро-Фоминск, ул. Московская, 11-201'),
(8,'phone', '+7(496)343-87-82'),
(8,'phone', '+7(929)900-25-03'),
(8,'email', 'personal.zam@vdknf.ru'),
(8,'address', 'г. Наро-Фоминск, ул. Московская, 11-209'),
(9,'phone', '+7(929)512-23-51'),
(9,'email', 'voda@vdknf.ru'),
(9,'address', 'г. Наро-Фоминск, ул. Московская, 11'),
(10,'phone', '+7(496)346-86-90'),
(10,'phone', '+7(929)512-24-28'),
(10,'email', 'vereya@vdknf.ru'),
(10,'address', 'г. Верея, ул. Солнечная, 11'),
(11,'phone', '+7(496)345-18-82'),
(11,'phone', '+7(916)374-71-64'),
(11,'email', 'aprelevka@vdknf.ru'),
(11,'address', 'г. Апрелевка, ул. Маяковского, 29'),
(12,'phone', '+7(929)508-65-03'),
(12,'email', 'alabino@vdknf.ru'),
(13,'phone', '+7(929)512-26-59'),
(13,'email', 'golovkovo@vdknf.ru'),
(14,'phone', '+7(916)374-71-63'),
(14,'email', 'ateptsevo@vdknf.ru'),
(15,'phone', '+7(929)512-24-96'),
(15,'email', 'laboratory@vdknf.ru'),
(15,'address', 'г. Наро-Фоминск, улица Профсоюзная (АБК очистных сооружений)'),
(16,'phone', '+7(496)343-34-73'),
(16,'phone', '+7(496)343-71-50'),
(16,'email', 'abonent.boss@vdknf.ru'),
(16,'email', 'inspection.boss@vdknf.ru'),
(16,'address', 'г. Наро-Фоминск, ул. Московская, 11-205","г. Наро-Фоминск, ул. Московская, 11-101')
