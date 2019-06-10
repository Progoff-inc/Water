-- phpMyAdmin SQL Dump
-- version 4.7.7
-- https://www.phpmyadmin.net/
--
-- Хост: localhost
-- Время создания: Июн 11 2019 г., 00:08
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

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `docs`
--
ALTER TABLE `docs`
  ADD PRIMARY KEY (`Id`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `docs`
--
ALTER TABLE `docs`
  MODIFY `Id` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=52;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
