-- phpMyAdmin SQL Dump
-- version 4.7.7
-- https://www.phpmyadmin.net/
--
-- Хост: localhost
-- Время создания: Июн 11 2019 г., 00:16
-- Версия сервера: 5.7.21-20-beget-5.7.21-20-1-log
-- Версия PHP: 5.6.38

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `nomokoiw_water`
--

-- --------------------------------------------------------

--
-- Структура таблицы `apps`
--
-- Создание: Июн 05 2019 г., 08:14
--

DROP TABLE IF EXISTS `apps`;
CREATE TABLE `apps` (
  `Id` int(20) NOT NULL,
  `Name` varchar(255) NOT NULL,
  `Phone` varchar(255) NOT NULL,
  `Email` varchar(255) NOT NULL,
  `Topic` varchar(255) NOT NULL,
  `Description` text NOT NULL,
  `CreateDate` datetime DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Структура таблицы `contacts`
--
-- Создание: Июн 06 2019 г., 07:59
-- Последнее обновление: Июн 06 2019 г., 11:03
--

DROP TABLE IF EXISTS `contacts`;
CREATE TABLE `contacts` (
  `Id` int(20) NOT NULL,
  `Head` varchar(255) NOT NULL,
  `Time` varchar(255) DEFAULT NULL,
  `Boss` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `contacts`
--

INSERT INTO `contacts` (`Id`, `Head`, `Time`, `Boss`) VALUES
(1, 'Диспетчерская служба', 'круглосуточно', ''),
(2, 'Касса', 'пн-чт с 8:00 до 17:00, пт с 8:00 до 15:45, БЕЗ ОБЕДА', ''),
(3, 'Абонентский отдел (АО)', 'пн-чт с 8:00 до 17:00, пт с 8:00 до 15:45, БЕЗ ОБЕДА', 'Начальник отдела - Ковригина Марина Владимировна'),
(4, 'Гараж (диспетчер)', 'пн-чт с 8:00 до 17:00, пт с 8:00 до 15:45, обед 12:00-12:45', ''),
(5, 'Приемная', 'пн-чт с 8:00 до 17:00, пт с 8:00 до 15:45, обед 12:00-12:45', 'Директор - Якин Александр Петрович'),
(6, 'Заместитель директора по безопасности', 'пн-чт с 8:00 до 17:00, пт с 8:00 до 15:45, обед 12:00-12:45', 'Предрук Дмитрий Михайлович'),
(7, 'Производственно-технический отдел (ПТО)', 'пн-чт с 8:00 до 17:00, пт с 8:00 до 15:45, обед 12:00-12:45', 'Начальник отдела - Лагутина Наталья Васильевна'),
(8, 'Отдел кадров', 'пн-чт с 8:00 до 17:00, пт с 8:00 до 15:45, обед 12:00-12:45', 'Начальник отдела кадров - Лутфуллина Фарида Фаритовна'),
(9, 'Водопроводно-канализационный участок г. Наро-Фоминск', 'пн-чт с 8:00 до 17:00, пт с 8:00 до 15:45, обед 12:00-12:45', 'Начальник участка - Фролов Роман Семёнович'),
(10, 'Водопроводно-канализационный участок г. Верея', 'пн-чт с 8:00 до 17:00, пт с 8:00 до 15:45, обед 12:00-12:45', 'Начальник участка - Цыганов Евгений Владимирович'),
(11, 'Водопроводно-канализационный участок г. Апрелевка', 'пн-чт с 8:00 до 17:00, пт с 8:00 до 15:45, обед 12:00-12:45', 'Начальник участка - Цыганов Евгений Владимирович'),
(12, 'Водопроводно-канализационный участок Алабино', 'пн-чт с 8:00 до 17:00, пт с 8:00 до 15:45, обед 12:00-12:45', 'Начальник участка - Семенов Сергей Владимирович'),
(13, 'Водопроводно-канализационный участок Таширово и Головково', 'пн-чт с 8:00 до 17:00, пт с 8:00 до 15:45, обед 12:00-12:45', 'Начальник участка - Демидов Павел Владимирович'),
(14, 'Водопроводно-канализационный участок Атепцево', 'пн-чт с 8:00 до 17:00, пт с 8:00 до 15:45, обед 12:00-12:45', 'Начальник участка - Борисов Александр Геннадьевич'),
(15, 'Испытательная лаборатория (вода, стоки)', 'пн-чт с 8:00 до 17:00, пт с 8:00 до 15:45, обед 12:00-12:45', 'Начальник лаборатории - Богомягков Александр Викторович'),
(16, 'Передача показаний приборов учета', 'пн-чт с 8:00 до 17:00, пт с 8:00 до 15:45, БЕЗ ОБЕДА', '');

-- --------------------------------------------------------

--
-- Структура таблицы `contactvalues`
--
-- Создание: Июн 06 2019 г., 07:59
-- Последнее обновление: Июн 06 2019 г., 11:03
--

DROP TABLE IF EXISTS `contactvalues`;
CREATE TABLE `contactvalues` (
  `Id` int(20) NOT NULL,
  `ContactId` int(20) DEFAULT NULL,
  `Type` varchar(50) NOT NULL,
  `Value` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `contactvalues`
--

INSERT INTO `contactvalues` (`Id`, `ContactId`, `Type`, `Value`) VALUES
(1, 1, 'phone', '+7(496)343-66-89'),
(51, 1, 'phone', '+7(916)374-71-66'),
(52, 1, 'email', 'сds@vdknf.ru'),
(53, 2, 'phone', '+7(496)343-77-59'),
(54, 2, 'address', 'г. Наро-Фоминск, ул. Московская, 11-202'),
(55, 3, 'phone', '+7(496)343-34-74'),
(56, 3, 'email', 'abonent.boss@vdknf.ru'),
(57, 3, 'address', 'г. Наро-Фоминск, ул. Московская, 11-205'),
(58, 4, 'phone', '+7(496)343-66-68'),
(59, 4, 'phone', '+7(929)512-29-86'),
(60, 4, 'email', 'garag@vdknf.ru'),
(61, 4, 'address', 'г. Наро-Фоминск, ул. Московская, 11'),
(62, 5, 'phone', '+7(496)343-06-51'),
(63, 5, 'email', 'reception@vdknf.ru'),
(64, 5, 'address', 'г. Наро-Фоминск, ул. Московская, 11-206'),
(65, 6, 'phone', '+7(926)208-81-77'),
(66, 6, 'email', 's.zam@vdknf.ru'),
(67, 6, 'address', 'г. Наро-Фоминск, ул. Московская, 11-207'),
(68, 7, 'phone', '+7(496)343-96-20'),
(69, 7, 'email', 'pto.boss@vdknf.ru'),
(70, 7, 'address', 'г. Наро-Фоминск, ул. Московская, 11-201'),
(71, 8, 'phone', '+7(496)343-87-82'),
(72, 8, 'phone', '+7(929)900-25-03'),
(73, 8, 'email', 'personal.zam@vdknf.ru'),
(74, 8, 'address', 'г. Наро-Фоминск, ул. Московская, 11-209'),
(75, 9, 'phone', '+7(929)512-23-51'),
(76, 9, 'email', 'voda@vdknf.ru'),
(77, 9, 'address', 'г. Наро-Фоминск, ул. Московская, 11'),
(78, 10, 'phone', '+7(496)346-86-90'),
(79, 10, 'phone', '+7(929)512-24-28'),
(80, 10, 'email', 'vereya@vdknf.ru'),
(81, 10, 'address', 'г. Верея, ул. Солнечная, 11'),
(82, 11, 'phone', '+7(496)345-18-82'),
(83, 11, 'phone', '+7(916)374-71-64'),
(84, 11, 'email', 'aprelevka@vdknf.ru'),
(85, 11, 'address', 'г. Апрелевка, ул. Маяковского, 29'),
(86, 12, 'phone', '+7(929)508-65-03'),
(87, 12, 'email', 'alabino@vdknf.ru'),
(88, 13, 'phone', '+7(929)512-26-59'),
(89, 13, 'email', 'golovkovo@vdknf.ru'),
(90, 14, 'phone', '+7(916)374-71-63'),
(91, 14, 'email', 'ateptsevo@vdknf.ru'),
(92, 15, 'phone', '+7(929)512-24-96'),
(93, 15, 'email', 'laboratory@vdknf.ru'),
(94, 15, 'address', 'г. Наро-Фоминск, улица Профсоюзная (АБК очистных сооружений)'),
(95, 16, 'phone', '+7(496)343-34-73'),
(96, 16, 'phone', '+7(496)343-71-50'),
(97, 16, 'email', 'abonent.boss@vdknf.ru'),
(98, 16, 'email', 'inspection.boss@vdknf.ru'),
(99, 16, 'address', 'г. Наро-Фоминск, ул. Московская, 11-205\",\"г. Наро-Фоминск, ул. Московская, 11-101');

-- --------------------------------------------------------

--
-- Структура таблицы `docs`
--
-- Создание: Май 25 2019 г., 10:35
-- Последнее обновление: Июн 10 2019 г., 14:40
--

DROP TABLE IF EXISTS `docs`;
CREATE TABLE `docs` (
  `Id` int(20) NOT NULL,
  `Name` varchar(255) NOT NULL,
  `Image` varchar(255) NOT NULL,
  `Type` varchar(255) NOT NULL,
  `Document` varchar(255) NOT NULL,
  `IsImportant` bit(1) DEFAULT b'0',
  `Description` text
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `docs`
--

INSERT INTO `docs` (`Id`, `Name`, `Image`, `Type`, `Document`, `IsImportant`, `Description`) VALUES
(7, 'Бланк квитанции', '../../assets/images/doc.png', 'single', 'http://client.nomokoiw.beget.tech/water/Docs/info-clients/ticket.pdf', b'1', NULL),
(8, 'Список домов', '../../assets/images/doc.png', 'single', 'http://client.nomokoiw.beget.tech/water/Docs/info-clients/MKD.xlsx', b'1', NULL),
(9, 'СПРАВОЧНИК АБОНЕНТА (с бланками абонентов ФИЗЛИЦ)', 'http://client.nomokoiw.beget.tech/water/Docs/ref-book/FL.png', 'ref-book', 'http://client.nomokoiw.beget.tech/water/Docs/ref-book/FL.rar', b'0', NULL),
(10, 'ИНСТРУКЦИИ ПО РАБОТЕ С ПОРТАЛОМ  ГОСУСЛУГ Московской области', 'http://client.nomokoiw.beget.tech/water/Docs/ref-book/portal.png', 'ref-book', 'http://client.nomokoiw.beget.tech/water/Docs/ref-book/PORTAL.zip', b'0', NULL),
(11, 'БЛАНК КВИТАНЦИИ ДЛЯ ОПЛАТЫ УСЛУГ ВиВ (домовладения с приборами учета)', 'http://client.nomokoiw.beget.tech/water/Docs/ref-book/ticket.png', 'ref-book', 'http://client.nomokoiw.beget.tech/water/Docs/ref-book/ticket.pdf', b'0', NULL),
(12, 'ТИПОВЫЕ ДОГОВОРЫ НА УСЛУГИ ВиВ', 'http://client.nomokoiw.beget.tech/water/Docs/ref-book/viv.png', 'ref-book', 'http://client.nomokoiw.beget.tech/water/Docs/ref-book/ViV.zip', b'0', NULL),
(13, 'ШАБЛОНЫ ДОГОВОРОВ НА ПОДКЛЮЧЕНИЕ (ТЕХ ПРИСОЕДИНЕНИЕ)', 'http://client.nomokoiw.beget.tech/water/Docs/ref-book/podkl.png', 'ref-book', 'http://client.nomokoiw.beget.tech/water/Docs/ref-book/na_podkl.zip', b'0', NULL),
(14, 'ПРИКАЗ №157 ОБ УТВЕРЖДЕНИИ СБРОСА ПО СОСТАВУ СТОЧНЫХ ВОД', 'http://client.nomokoiw.beget.tech/water/Docs/ref-book/prikaz.png', 'ref-book', 'http://client.nomokoiw.beget.tech/water/Docs/ref-book/PRIKAZ_157.pdf', b'0', NULL),
(15, 'Распоряжение № 344-Р от 14.12.2018 года Комитета по ценам и тарифам МО', 'http://client.nomokoiw.beget.tech/water/Docs/tarifs/344.png', 'rates-connect', 'http://client.nomokoiw.beget.tech/water/Docs/tarifs/344voda.pdf', b'0', 'об установлении тарифов на подключение (тех присоединение) к системе водоснабжения на 2019 год'),
(16, 'Распоряжение № 345-Р от 14.12.2018 года Комитета по ценам и тарифам МО', 'http://client.nomokoiw.beget.tech/water/Docs/tarifs/345.png', 'rates-connect', 'http://client.nomokoiw.beget.tech/water/Docs/tarifs/345stoki.pdf', b'0', 'об установлении тарифов на подключение (тех присоединение) к системе водоотведения на 2019 год'),
(17, 'Распоряжение № 370-Р от 19.12.2018г. Комитета по ценам и тарифам МО', 'http://client.nomokoiw.beget.tech/water/Docs/tarifs/370.png', 'rates-pay', 'http://client.nomokoiw.beget.tech/water/Docs/tarifs/370R.pdf', b'0', 'о внесении изменений в некоторые распоряжения Комитета по ценам и тарифам Московской области'),
(18, 'Приложение 3 к распоряжению\r\nКомитета по ценам и тарифам\r\nМосковской области от 19.12.2018 №\r\n370-Р', 'http://client.nomokoiw.beget.tech/water/Docs/tarifs/p3.png', 'rates-pay', 'http://client.nomokoiw.beget.tech/water/Docs/tarifs/P3.pdf', b'0', 'Тарифы в сфере холодного водоснабжения и водоотведения для организаций водопроводно-канализационного хозяйства на 2018-2020 годы'),
(19, ' Распоряжение № 315-Р от 20.12.2017 года Комитета по ценам и тарифам МО', 'http://client.nomokoiw.beget.tech/water/Docs/tarifs/315.png', 'rates-connect', 'http://client.nomokoiw.beget.tech/water/Docs/tarifs/315voda.pdf', b'0', 'об установлении тарифов на подключение (тех присоединение) к системе водоснабжения на 2018 год'),
(20, 'Распоряжение № 316-Р от 20.12.2017 года Комитета по ценам и тарифам МО', 'http://client.nomokoiw.beget.tech/water/Docs/tarifs/316.png', 'rates-connect', 'http://client.nomokoiw.beget.tech/water/Docs/tarifs/316stoki.pdf', b'0', 'об установлении тарифов на подключение (тех присоединение) к системе водоотведения на 2018 год'),
(21, 'Распоряжением № 311-Р от 19.12.2017 года Комитета по ценам и тарифам МО', 'http://client.nomokoiw.beget.tech/water/Docs/tarifs/311.png', 'rates-pay', 'http://client.nomokoiw.beget.tech/water/Docs/tarifs/311R.pdf', b'0', NULL),
(22, 'КАЛЬКУЛЯЦИЯ', '../../assets/images/doc_345.jpg', 'single', 'http://client.nomokoiw.beget.tech/water/Docs/services/kalkulaziya_22.pdf', b'0', NULL),
(23, 'Стоимость проектных работ', '../../assets/images/doc_345.jpg', 'single', 'http://client.nomokoiw.beget.tech/water/Docs/services/21_project_doc.pdf', b'0', NULL),
(24, 'Заявление', '../../assets/images/doc_345.jpg', 'single', 'http://client.nomokoiw.beget.tech/water/Docs/services/SOGLASOVANO.rar', b'0', NULL),
(25, 'КАЛЬКУЛЯЦИЯ', '../../assets/images/doc_345.jpg', 'single', 'http://client.nomokoiw.beget.tech/water/Docs/services/kalkulaziya_19.pdf', b'0', NULL),
(26, 'АЛГОРИТМ И ЗАЯВЛЕНИЕ на СОГЛАСОВАНИЕ', '../../assets/images/doc_345.jpg', 'single', 'http://client.nomokoiw.beget.tech/water/Docs/services/SOGLASOVANO.rar', b'0', NULL),
(27, 'Аттестат', '../../assets/images/doc_345.jpg', 'single', 'http://client.nomokoiw.beget.tech/water/Docs/services/akkreditatsii.pdf', b'0', NULL),
(28, 'Прайс-лист', '../../assets/images/doc_345.jpg', 'single', 'http://client.nomokoiw.beget.tech/water/Docs/services/24_analizy.pdf', b'0', NULL),
(29, 'Бланк 1', '../../assets/images/doc_345.jpg', 'single', 'http://client.nomokoiw.beget.tech/water/Docs/services/dlya_kliyentov_s_otborom_prob.doc', b'0', NULL),
(30, 'Правила отбора проб', '../../assets/images/doc_345.jpg', 'single', 'http://client.nomokoiw.beget.tech/water/Docs/services/otbora_prob_Zakazchikom.docx', b'0', NULL),
(31, 'Договор', '../../assets/images/doc_345.jpg', 'single', 'http://client.nomokoiw.beget.tech/water/Docs/services/VODA.zip', b'0', NULL),
(32, 'Карточка МУП «ВОДОКАНАЛ»', 'http://client.nomokoiw.beget.tech/water/Docs/info-scr/vdk.png', 'props', 'http://client.nomokoiw.beget.tech/water/Docs/information/VDK.docx', b'0', NULL),
(33, 'Устав', 'http://client.nomokoiw.beget.tech/water/Docs/info-scr/ustav.png', 'constituent', 'http://client.nomokoiw.beget.tech/water/Docs/information/ustav.pdf', b'0', NULL),
(34, 'Изменения к Уставу', 'http://client.nomokoiw.beget.tech/water/Docs/info-scr/izm.jpg', 'constituent', 'http://client.nomokoiw.beget.tech/water/Docs/information/izmeneniya.zip', b'0', NULL),
(35, 'Изменения к Уставу от 22.02.2018', 'http://client.nomokoiw.beget.tech/water/Docs/info-scr/izm18.jpg', 'constituent', 'http://client.nomokoiw.beget.tech/water/Docs/information/izmeneniya_220218.zip', b'0', NULL),
(36, 'ИНН', 'http://client.nomokoiw.beget.tech/water/Docs/info-scr/inn.png', 'constitutent', 'http://client.nomokoiw.beget.tech/water/Docs/information/inn.pdf', b'0', NULL),
(37, 'ОГРН', 'http://client.nomokoiw.beget.tech/water/Docs/info-scr/ogrn.png', 'constitutent', 'http://client.nomokoiw.beget.tech/water/Docs/information/ogrn.pdf', b'0', NULL),
(38, 'Бухгалтерский баланс 2014 г.', 'http://client.nomokoiw.beget.tech/water/Docs/info-scr/bb_2014.png', 'bookkeping', 'http://client.nomokoiw.beget.tech/water/Docs/information/buh_balance_2014.pdf', b'0', NULL),
(39, 'Финансовый результат 2014 г.', 'http://client.nomokoiw.beget.tech/water/Docs/info-scr/fr_2014.png', 'bookkeping', 'http://client.nomokoiw.beget.tech/water/Docs/information/fin_result_2014.pdf', b'0', NULL),
(40, 'Формы №1-6 Бухгалтерская отчетность 2015 г.', 'http://client.nomokoiw.beget.tech/water/Docs/info-scr/f1-6_2015.png', 'bookkeping', 'http://client.nomokoiw.beget.tech/water/Docs/information/F1-6_buh_2015.pdf', b'0', NULL),
(41, 'Формы №1-6 Бухгалтерская отчетность 2016 г.', 'http://client.nomokoiw.beget.tech/water/Docs/info-scr/f1-6_2016.png', 'bookkeping', 'http://client.nomokoiw.beget.tech/water/Docs/information/F1-6_buh_2016.pdf', b'0', NULL),
(42, 'Формы №1-6 Бухгалтерская отчетность 2017 г.', 'http://client.nomokoiw.beget.tech/water/Docs/info-scr/bb_2017.png', 'bookkeping', 'http://client.nomokoiw.beget.tech/water/Docs/information/F1-6_buh_2017.pdf', b'0', NULL),
(43, 'Решения на сброс', 'http://client.nomokoiw.beget.tech/water/Docs/info-scr/na_sbros.png', 'allowing', 'http://client.nomokoiw.beget.tech/water/Docs/information/na_sbros.zip', b'0', NULL),
(44, 'Разрешение на выбросы в атмосферу', 'http://client.nomokoiw.beget.tech/water/Docs/info-scr/na_vybros.png', 'allowing', 'http://client.nomokoiw.beget.tech/water/Docs/information/na_vybrosy_v_atmosferu.pdf', b'0', NULL),
(45, 'Санитарно-эпидемиологические заключения (ВЗУ)', 'http://client.nomokoiw.beget.tech/water/Docs/info-scr/zakl.png', 'allowing', 'http://client.nomokoiw.beget.tech/water/Docs/information/epid-zakl.zip', b'0', NULL),
(46, 'Выписка из реестра СРО (строителей)', 'http://client.nomokoiw.beget.tech/water/Docs/info-scr/build.png', 'allowing', 'http://client.nomokoiw.beget.tech/water/Docs/information/reestr_stroit.pdf', b'0', NULL),
(47, 'Выписка из реестра СРО (проектировщиков)', 'http://client.nomokoiw.beget.tech/water/Docs/info-scr/project.png', 'allowing', 'http://client.nomokoiw.beget.tech/water/Docs/information/reestr_project.pdf', b'0', NULL),
(48, 'Аттестат аккредитации Испытательной лаборатории', 'http://client.nomokoiw.beget.tech/water/Docs/info-scr/akkred.png', 'allowing', 'http://client.nomokoiw.beget.tech/water/Docs/information/akkreditatsii.pdf', b'0', NULL),
(49, 'Сводная ведомость за 2016 год', 'http://client.nomokoiw.beget.tech/water/Docs/info-scr/ved16.png', 'evaluation', 'http://client.nomokoiw.beget.tech/water/Docs/information/vedomost_2016.docx', b'0', NULL),
(50, 'Сводная ведомость за 2017 год', 'http://client.nomokoiw.beget.tech/water/Docs/info-scr/ved17.png', 'evaluation', 'http://client.nomokoiw.beget.tech/water/Docs/information/vedomost_2017.pdf', b'0', NULL),
(51, 'Сводная ведомость за 2018 год', 'http://client.nomokoiw.beget.tech/water/Docs/info-scr/ved18.png', 'evaluation', 'http://client.nomokoiw.beget.tech/water/Docs/information/vedomost_2018.pdf', b'0', NULL);

-- --------------------------------------------------------

--
-- Структура таблицы `news`
--
-- Создание: Май 14 2019 г., 21:09
-- Последнее обновление: Июн 10 2019 г., 21:02
--

DROP TABLE IF EXISTS `news`;
CREATE TABLE `news` (
  `Id` int(20) NOT NULL,
  `Name` varchar(255) NOT NULL,
  `Image` varchar(255) DEFAULT NULL,
  `Description` text NOT NULL,
  `CreateDate` datetime DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `news`
--

INSERT INTO `news` (`Id`, `Name`, `Image`, `Description`, `CreateDate`) VALUES
(1, 'News test', 'http://client.nomokoiw.beget.tech/water/Files/new_1_narofominsk2.jpg', 'Описание', '2019-05-17 12:10:29'),
(2, 'В июне состоится всероссийский водный конгресс', '../../assets/images/narofominsk2.jpg', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur veritatis cumque ipsam dicta iste, at inventore iusto impedit alias, consequuntur corrupti quae quisquam maiores tempore nostrum. Soluta sunt rerum quae recusandae quos nam quibusdam corporis reiciendis quidem iusto obcaecati atque, assumenda reprehenderit dolores hic minima debitis pariatur voluptas nostrum earum molestiae illum distinctio. Laboriosam laborum corrupti quo ab error neque inventore nam tenetur consequuntur eum debitis, optio eius laudantium quidem, magni quas? Minima, ab voluptates ratione natus eligendi aliquid rem tenetur maiores sed neque distinctio reprehenderit maxime veritatis vitae quaerat aperiam, exercitationem, fuga quas enim! Eveniet recusandae odit facere consequatur?', '2019-05-17 12:54:05'),
(3, 'Сбербанк раздает деньги клиентам', 'http://client.nomokoiw.beget.tech/water/Files/new_3_sberbank.png', 'Нужно взять кредит под 30% годовых', '2019-05-19 19:28:56'),
(4, 'Втб предлагает стажировку', 'http://client.nomokoiw.beget.tech/water/Files/new_4_Pryamye-dogovory-1.jpg', 'Комп не дают', '2019-05-19 19:31:13'),
(6, 'РАВВ', 'http://client.nomokoiw.beget.tech/water/Files/new_6_3333.jpg', 'Директору МУП \"Водоканал\"\nг. Наро-Фоминского городского округа\nКасимовскому Н.А.\n\n\nУважаемый Николай Анатольевич!\nРады сообщить Вам решение Общего собрания РАВВ о принятии\nВашей организации в члены Российской ассоциации водоснабжения и\nводоотведения!\nМы хотели бы, чтобы членство в РАВВ оказалось полезным для\nВашей организации, общение в профессиональной среде стало бы\nисточником получения новых знаний и повышения эффективности. Со\nсвоей стороны, надеемся, что и ваше участие в РАВВ будет активным и\nдеятельным, будь то участие в дискуссии для выработки\nконсолидированного мнения по стратегическим вопросам, или обмен\nопытом специалистов, или поиск и обсуждение новых решений.\nЧтобы вы почувствовали себя полноправным членом нашего\nсообщества, приглашаем регулярно посещать сайт нашей Ассоциации\nwww.raww.ru, где вы сможете получать информацию о деятельности\nРАВВ. Надеемся, что издаваемый Ассоциацией «Вестник РАВВ» также\nбудет полезен вашим специалистам, а еженедельное электронное\nиздание «Информационный бюллетень РАВВ» станет путеводителем в\nморе отраслевой информации.\nВыражаем надежду на успешное сотрудничество на благо наших\nобщих интересов!\n\nС уважением,\nИсполнительная дирекция РАВВ', '2019-05-25 22:40:51'),
(7, 'Новость с редактором', 'http://client.nomokoiw.beget.tech/water/Files/new_7_maxresdefault.jpg', '<h2>Это супер важная новость!</h2><p>Мы внедрили текстовый редактор к вам на сайт!</p><p><a href=\"http://progoff.ru/#/\">Тут</a> можно посмотреть наш сайт: <a href=\"http://progoff.ru/#/\">http://progoff.ru/#/</a></p><p><i>А еще могу писать курсивом!</i></p><p>Почему стоит выбрать Progoff?</p><ol><li>Мы сообразительные</li><li>Мы веселые и находчивые</li><li>Умеем писать сайты</li><li>Знаем css</li></ol><p>Кому нужен сайт?</p><ul><li>Бизнесменам</li><li>Студентам</li><li>Блогерам</li></ul><p>Как говорил Пушкин</p><blockquote><p>…Гений и злодейство -<br>Две вещи несовместные…</p></blockquote>', '2019-06-10 23:27:52');

-- --------------------------------------------------------

--
-- Структура таблицы `pricetypes`
--
-- Создание: Июн 06 2019 г., 16:30
-- Последнее обновление: Июн 06 2019 г., 16:32
--

DROP TABLE IF EXISTS `pricetypes`;
CREATE TABLE `pricetypes` (
  `Id` int(20) NOT NULL,
  `Name` varchar(255) NOT NULL,
  `Type` varchar(255) DEFAULT NULL,
  `Search` varchar(200) DEFAULT NULL,
  `SearchLink` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `pricetypes`
--

INSERT INTO `pricetypes` (`Id`, `Name`, `Type`, `Search`, `SearchLink`) VALUES
(1, 'get-water', 'client', 'Водоснабжение частных лиц', '/clients/clients-rates'),
(2, 'give-water', 'client', 'Водоотведение для частных лиц', '/clients/clients-rates'),
(3, 'drink-water', 'client', 'Питьевая вода для частных лиц', '/clients/clients-rates'),
(4, 'get-water', 'business', 'Водоснабжение организаций', '/business/business-rates'),
(5, 'give-water', 'business', 'Водоотведение организаций', '/business/business-rates'),
(6, 'drink-water', 'business', 'Питьевая вода для организаций', '/business/business-rates');

-- --------------------------------------------------------

--
-- Структура таблицы `pricevalues`
--
-- Создание: Май 25 2019 г., 09:56
-- Последнее обновление: Май 31 2019 г., 09:39
--

DROP TABLE IF EXISTS `pricevalues`;
CREATE TABLE `pricevalues` (
  `Id` int(20) NOT NULL,
  `PriceTypeId` int(20) DEFAULT NULL,
  `DateStart` datetime NOT NULL,
  `DateFinish` datetime NOT NULL,
  `Price` float(18,2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `pricevalues`
--

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

-- --------------------------------------------------------

--
-- Структура таблицы `props`
--
-- Создание: Май 14 2019 г., 21:10
--

DROP TABLE IF EXISTS `props`;
CREATE TABLE `props` (
  `Id` int(20) NOT NULL,
  `Name` varchar(255) NOT NULL,
  `Value` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `apps`
--
ALTER TABLE `apps`
  ADD PRIMARY KEY (`Id`);

--
-- Индексы таблицы `contacts`
--
ALTER TABLE `contacts`
  ADD PRIMARY KEY (`Id`);

--
-- Индексы таблицы `contactvalues`
--
ALTER TABLE `contactvalues`
  ADD PRIMARY KEY (`Id`),
  ADD KEY `cvc_fk` (`ContactId`);

--
-- Индексы таблицы `docs`
--
ALTER TABLE `docs`
  ADD PRIMARY KEY (`Id`);

--
-- Индексы таблицы `news`
--
ALTER TABLE `news`
  ADD PRIMARY KEY (`Id`);

--
-- Индексы таблицы `pricetypes`
--
ALTER TABLE `pricetypes`
  ADD PRIMARY KEY (`Id`);

--
-- Индексы таблицы `pricevalues`
--
ALTER TABLE `pricevalues`
  ADD PRIMARY KEY (`Id`),
  ADD KEY `pvp_fk` (`PriceTypeId`);

--
-- Индексы таблицы `props`
--
ALTER TABLE `props`
  ADD PRIMARY KEY (`Id`),
  ADD UNIQUE KEY `Name` (`Name`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `apps`
--
ALTER TABLE `apps`
  MODIFY `Id` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT для таблицы `contacts`
--
ALTER TABLE `contacts`
  MODIFY `Id` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT для таблицы `contactvalues`
--
ALTER TABLE `contactvalues`
  MODIFY `Id` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=100;

--
-- AUTO_INCREMENT для таблицы `docs`
--
ALTER TABLE `docs`
  MODIFY `Id` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=52;

--
-- AUTO_INCREMENT для таблицы `news`
--
ALTER TABLE `news`
  MODIFY `Id` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT для таблицы `pricetypes`
--
ALTER TABLE `pricetypes`
  MODIFY `Id` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT для таблицы `pricevalues`
--
ALTER TABLE `pricevalues`
  MODIFY `Id` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=40;

--
-- AUTO_INCREMENT для таблицы `props`
--
ALTER TABLE `props`
  MODIFY `Id` int(20) NOT NULL AUTO_INCREMENT;

--
-- Ограничения внешнего ключа сохраненных таблиц
--

--
-- Ограничения внешнего ключа таблицы `contactvalues`
--
ALTER TABLE `contactvalues`
  ADD CONSTRAINT `cvc_fk` FOREIGN KEY (`ContactId`) REFERENCES `contacts` (`Id`) ON DELETE CASCADE;

--
-- Ограничения внешнего ключа таблицы `pricevalues`
--
ALTER TABLE `pricevalues`
  ADD CONSTRAINT `pvp_fk` FOREIGN KEY (`PriceTypeId`) REFERENCES `pricetypes` (`Id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
