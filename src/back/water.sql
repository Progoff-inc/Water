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
    Document varchar(255) NOT NULL,
    Description text NULL
);

CREATE TABLE IF NOT EXISTS props (
	Id int(20) PRIMARY KEY AUTO_INCREMENT,
    Name varchar(255) UNIQUE NOT NULL,
    Value varchar(255) NOT NULL
);

CREATE TABLE IF NOT EXISTS questions (
	Id int(20) PRIMARY KEY AUTO_INCREMENT,
    Name varchar(255) UNIQUE NOT NULL,
    Description text NOT NULL
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
(16,'address', 'г. Наро-Фоминск, ул. Московская, 11-205","г. Наро-Фоминск, ул. Московская, 11-101');


INSERT INTO `docs` (`Id`, `Name`, `Image`, `Type`, `Document`, `IsImportant`, `Description`) VALUES
(7, 'Бланк квитанции', '../../assets/images/doc.png', 'single', 'http://vdknf.ru/water/Docs/info-clients/ticket.pdf', b'1', NULL),
(8, 'Список домов', '../../assets/images/doc.png', 'single', 'http://vdknf.ru/water/Docs/info-clients/MKD.xlsx', b'1', NULL),
(9, 'СПРАВОЧНИК АБОНЕНТА (с бланками абонентов ФИЗЛИЦ)', 'http://vdknf.ru/water/Docs/ref-book/FL.png', 'ref-book', 'http://vdknf.ru/water/Docs/ref-book/FL.rar', b'0', NULL),
(10, 'ИНСТРУКЦИИ ПО РАБОТЕ С ПОРТАЛОМ  ГОСУСЛУГ Московской области', 'http://vdknf.ru/water/Docs/ref-book/portal.png', 'ref-book', 'http://vdknf.ru/water/Docs/ref-book/PORTAL.zip', b'0', NULL),
(11, 'БЛАНК КВИТАНЦИИ ДЛЯ ОПЛАТЫ УСЛУГ ВиВ (домовладения с приборами учета)', 'http://vdknf.ru/water/Docs/ref-book/ticket.png', 'ref-book', 'http://vdknf.ru/water/Docs/ref-book/ticket.pdf', b'0', NULL),
(12, 'ТИПОВЫЕ ДОГОВОРЫ НА УСЛУГИ ВиВ', 'http://vdknf.ru/water/Docs/ref-book/viv.png', 'ref-book', 'http://vdknf.ru/water/Docs/ref-book/ViV.zip', b'0', NULL),
(13, 'ШАБЛОНЫ ДОГОВОРОВ НА ПОДКЛЮЧЕНИЕ (ТЕХ ПРИСОЕДИНЕНИЕ)', 'http://vdknf.ru/water/Docs/ref-book/podkl.png', 'ref-book', 'http://vdknf.ru/water/Docs/ref-book/na_podkl.zip', b'0', NULL),
(14, 'ПРИКАЗ №157 ОБ УТВЕРЖДЕНИИ СБРОСА ПО СОСТАВУ СТОЧНЫХ ВОД', 'http://vdknf.ru/water/Docs/ref-book/prikaz.png', 'ref-book', 'http://vdknf.ru/water/Docs/ref-book/PRIKAZ_157.pdf', b'0', NULL),
(15, 'Распоряжение № 344-Р от 14.12.2018 года Комитета по ценам и тарифам МО', 'http://vdknf.ru/water/Docs/tarifs/344.png', 'rates-connect', 'http://vdknf.ru/water/Docs/tarifs/344voda.pdf', b'0', 'об установлении тарифов на подключение (тех присоединение) к системе водоснабжения на 2019 год'),
(16, 'Распоряжение № 345-Р от 14.12.2018 года Комитета по ценам и тарифам МО', 'http://vdknf.ru/water/Docs/tarifs/345.png', 'rates-connect', 'http://vdknf.ru/water/Docs/tarifs/345stoki.pdf', b'0', 'об установлении тарифов на подключение (тех присоединение) к системе водоотведения на 2019 год'),
(17, 'Распоряжение № 370-Р от 19.12.2018г. Комитета по ценам и тарифам МО', 'http://vdknf.ru/water/Docs/tarifs/370.png', 'rates-pay', 'http://vdknf.ru/water/Docs/tarifs/370R.pdf', b'0', 'о внесении изменений в некоторые распоряжения Комитета по ценам и тарифам Московской области'),
(18, 'Приложение 3 к распоряжению\r\nКомитета по ценам и тарифам\r\nМосковской области от 19.12.2018 №\r\n370-Р', 'http://vdknf.ru/water/Docs/tarifs/p3.png', 'rates-pay', 'http://vdknf.ru/water/Docs/tarifs/P3.pdf', b'0', 'Тарифы в сфере холодного водоснабжения и водоотведения для организаций водопроводно-канализационного хозяйства на 2018-2020 годы'),
(19, ' Распоряжение № 315-Р от 20.12.2017 года Комитета по ценам и тарифам МО', 'http://vdknf.ru/water/Docs/tarifs/315.png', 'rates-connect', 'http://vdknf.ru/water/Docs/tarifs/315voda.pdf', b'0', 'об установлении тарифов на подключение (тех присоединение) к системе водоснабжения на 2018 год'),
(20, 'Распоряжение № 316-Р от 20.12.2017 года Комитета по ценам и тарифам МО', 'http://vdknf.ru/water/Docs/tarifs/316.png', 'rates-connect', 'http://vdknf.ru/water/Docs/tarifs/316stoki.pdf', b'0', 'об установлении тарифов на подключение (тех присоединение) к системе водоотведения на 2018 год'),
(21, 'Распоряжением № 311-Р от 19.12.2017 года Комитета по ценам и тарифам МО', 'http://vdknf.ru/water/Docs/tarifs/311.png', 'rates-pay', 'http://vdknf.ru/water/Docs/tarifs/311R.pdf', b'0', NULL),
(22, 'КАЛЬКУЛЯЦИЯ', '../../assets/images/doc_345.jpg', 'single', 'http://vdknf.ru/water/Docs/services/kalkulaziya_22.pdf', b'0', NULL),
(23, 'Стоимость проектных работ', '../../assets/images/doc_345.jpg', 'single', 'http://vdknf.ru/water/Docs/services/21_project_doc.pdf', b'0', NULL),
(24, 'Заявление', '../../assets/images/doc_345.jpg', 'single', 'http://vdknf.ru/water/Docs/services/SOGLASOVANO.rar', b'0', NULL),
(25, 'КАЛЬКУЛЯЦИЯ', '../../assets/images/doc_345.jpg', 'single', 'http://vdknf.ru/water/Docs/services/kalkulaziya_19.pdf', b'0', NULL),
(26, 'АЛГОРИТМ И ЗАЯВЛЕНИЕ на СОГЛАСОВАНИЕ', '../../assets/images/doc_345.jpg', 'single', 'http://vdknf.ru/water/Docs/services/SOGLASOVANO.rar', b'0', NULL),
(27, 'Аттестат', '../../assets/images/doc_345.jpg', 'single', 'http://vdknf.ru/water/Docs/services/akkreditatsii.pdf', b'0', NULL),
(28, 'Прайс-лист', '../../assets/images/doc_345.jpg', 'single', 'http://vdknf.ru/water/Docs/services/24_analizy.pdf', b'0', NULL),
(29, 'Бланк 1', '../../assets/images/doc_345.jpg', 'single', 'http://vdknf.ru/water/Docs/services/dlya_kliyentov_s_otborom_prob.doc', b'0', NULL),
(30, 'Правила отбора проб', '../../assets/images/doc_345.jpg', 'single', 'http://vdknf.ru/water/Docs/services/otbora_prob_Zakazchikom.docx', b'0', NULL),
(31, 'Договор', '../../assets/images/doc_345.jpg', 'single', 'http://vdknf.ru/water/Docs/services/VODA.zip', b'0', NULL),
(32, 'Карточка МУП «ВОДОКАНАЛ»', 'http://vdknf.ru/water/Docs/info-scr/vdk.png', 'props', 'http://vdknf.ru/water/Docs/information/VDK.docx', b'0', NULL),
(33, 'Устав', 'http://vdknf.ru/water/Docs/info-scr/ustav.png', 'constituent', 'http://vdknf.ru/water/Docs/information/ustav.pdf', b'0', NULL),
(34, 'Изменения к Уставу', 'http://vdknf.ru/water/Docs/info-scr/izm.jpg', 'constituent', 'http://vdknf.ru/water/Docs/information/izmeneniya.zip', b'0', NULL),
(35, 'Изменения к Уставу от 22.02.2018', 'http://vdknf.ru/water/Docs/info-scr/izm18.jpg', 'constituent', 'http://vdknf.ru/water/Docs/information/izmeneniya_220218.zip', b'0', NULL),
(36, 'ИНН', 'http://vdknf.ru/water/Docs/info-scr/inn.png', 'constitutent', 'http://vdknf.ru/water/Docs/information/inn.pdf', b'0', NULL),
(37, 'ОГРН', 'http://vdknf.ru/water/Docs/info-scr/ogrn.png', 'constitutent', 'http://vdknf.ru/water/Docs/information/ogrn.pdf', b'0', NULL),
(38, 'Бухгалтерский баланс 2014 г.', 'http://vdknf.ru/water/Docs/info-scr/bb_2014.png', 'bookkeping', 'http://vdknf.ru/water/Docs/information/buh_balance_2014.pdf', b'0', NULL),
(39, 'Финансовый результат 2014 г.', 'http://vdknf.ru/water/Docs/info-scr/fr_2014.png', 'bookkeping', 'http://vdknf.ru/water/Docs/information/fin_result_2014.pdf', b'0', NULL),
(40, 'Формы №1-6 Бухгалтерская отчетность 2015 г.', 'http://vdknf.ru/water/Docs/info-scr/f1-6_2015.png', 'bookkeping', 'http://vdknf.ru/water/Docs/information/F1-6_buh_2015.pdf', b'0', NULL),
(41, 'Формы №1-6 Бухгалтерская отчетность 2016 г.', 'http://vdknf.ru/water/Docs/info-scr/f1-6_2016.png', 'bookkeping', 'http://vdknf.ru/water/Docs/information/F1-6_buh_2016.pdf', b'0', NULL),
(42, 'Формы №1-6 Бухгалтерская отчетность 2017 г.', 'http://vdknf.ru/water/Docs/info-scr/bb_2017.png', 'bookkeping', 'http://vdknf.ru/water/Docs/information/F1-6_buh_2017.pdf', b'0', NULL),
(43, 'Решения на сброс', 'http://vdknf.ru/water/Docs/info-scr/na_sbros.png', 'allowing', 'http://vdknf.ru/water/Docs/information/na_sbros.zip', b'0', NULL),
(44, 'Разрешение на выбросы в атмосферу', 'http://vdknf.ru/water/Docs/info-scr/na_vybros.png', 'allowing', 'http://vdknf.ru/water/Docs/information/na_vybrosy_v_atmosferu.pdf', b'0', NULL),
(45, 'Санитарно-эпидемиологические заключения (ВЗУ)', 'http://vdknf.ru/water/Docs/info-scr/zakl.png', 'allowing', 'http://vdknf.ru/water/Docs/information/epid-zakl.zip', b'0', NULL),
(46, 'Выписка из реестра СРО (строителей)', 'http://vdknf.ru/water/Docs/info-scr/build.png', 'allowing', 'http://vdknf.ru/water/Docs/information/reestr_stroit.pdf', b'0', NULL),
(47, 'Выписка из реестра СРО (проектировщиков)', 'http://vdknf.ru/water/Docs/info-scr/project.png', 'allowing', 'http://vdknf.ru/water/Docs/information/reestr_project.pdf', b'0', NULL),
(48, 'Аттестат аккредитации Испытательной лаборатории', 'http://vdknf.ru/water/Docs/info-scr/akkred.png', 'allowing', 'http://vdknf.ru/water/Docs/information/akkreditatsii.pdf', b'0', NULL),
(49, 'Сводная ведомость за 2016 год', 'http://vdknf.ru/water/Docs/info-scr/ved16.png', 'evaluation', 'http://vdknf.ru/water/Docs/information/vedomost_2016.docx', b'0', NULL),
(50, 'Сводная ведомость за 2017 год', 'http://vdknf.ru/water/Docs/info-scr/ved17.png', 'evaluation', 'http://vdknf.ru/water/Docs/information/vedomost_2017.pdf', b'0', NULL),
(51, 'Сводная ведомость за 2018 год', 'http://vdknf.ru/water/Docs/info-scr/ved18.png', 'evaluation', 'http://vdknf.ru/water/Docs/information/vedomost_2018.pdf', b'0', NULL);

INSERT INTO `pricetypes` (`Id`, `Name`, `Type`, `Search`, `SearchLink`) VALUES
(1, 'get-water', 'client', 'Водоснабжение частных лиц', '/clients/clients-rates'),
(2, 'give-water', 'client', 'Водоотведение для частных лиц', '/clients/clients-rates'),
(3, 'drink-water', 'client', 'Питьевая вода для частных лиц', '/clients/clients-rates'),
(4, 'get-water', 'business', 'Водоснабжение организаций', '/business/business-rates'),
(5, 'give-water', 'business', 'Водоотведение организаций', '/business/business-rates'),
(6, 'drink-water', 'business', 'Питьевая вода для организаций', '/business/business-rates');


INSERT INTO `pricevalues` (`Id`, `PriceTypeId`, `DateStart`, `DateFinish`, `Price`) VALUES
(16, 3, '2018-01-01 00:00:00', '2018-06-30 00:00:00', 31.22),
(17, 3, '2018-07-01 00:00:00', '2018-12-31 00:00:00', 32.26),
(18, 3, '2019-01-01 00:00:00', '2019-06-30 00:00:00', 32.81),
(19, 3, '2019-07-01 00:00:00', '2019-12-31 00:00:00', 34.52),
(20, 3, '2020-01-01 00:00:00', '2020-06-30 00:00:00', 33.05),
(21, 3, '2020-07-01 00:00:00', '2020-12-31 00:00:00', 34.17),
(22, 2, '2018-01-01 00:00:00', '2018-06-30 00:00:00', 26.41),
(23, 2, '2018-07-01 00:00:00', '2018-12-31 00:00:00', 27.48),
(24, 2, '2019-01-01 00:00:00', '2019-06-30 00:00:00', 27.95),
(25, 2, '2019-07-01 00:00:00', '2019-12-31 00:00:00', 29.11),
(26, 2, '2020-01-01 00:00:00', '2020-06-30 00:00:00', 28.40),
(27, 2, '2020-07-01 00:00:00', '2020-12-31 00:00:00', 29.35),
(28, 6, '2018-01-01 00:00:00', '2018-06-30 00:00:00', 26.46),
(29, 6, '2018-07-01 00:00:00', '2018-12-31 00:00:00', 27.34),
(30, 6, '2019-01-01 00:00:00', '2019-06-30 00:00:00', 27.34),
(31, 6, '2019-07-01 00:00:00', '2019-12-31 00:00:00', 28.77),
(32, 6, '2020-01-01 00:00:00', '2020-06-30 00:00:00', 28.01),
(33, 6, '2020-07-01 00:00:00', '2020-12-31 00:00:00', 28.96),
(34, 5, '2018-01-01 00:00:00', '2018-06-30 00:00:00', 22.38),
(35, 5, '2018-07-01 00:00:00', '2018-12-31 00:00:00', 23.29),
(36, 5, '2019-01-01 00:00:00', '2019-06-30 00:00:00', 23.29),
(37, 5, '2019-07-01 00:00:00', '2019-12-31 00:00:00', 24.26),
(38, 5, '2020-01-01 00:00:00', '2020-06-30 00:00:00', 24.07),
(39, 5, '2020-07-01 00:00:00', '2020-12-31 00:00:00', 24.87);