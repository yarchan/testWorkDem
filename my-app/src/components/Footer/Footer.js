//import logo from "./logo.svg";
//import "./App.css";
import telegram from "../../assets/telegram.svg";
import viber from "../../assets/viber.svg";
import whatsapp from "../../assets/whatsapp.svg";

function Footer() {
  return (
    <div className="footer">
      <p className="footer__chapter">О компании</p>

      <ul className="footer__item">
        <li className="footer__link">Партнёрская программа</li>
        <li className="header__link">Вакансии</li>
      </ul>

      <p className="footer__chapter">Меню</p>

      <ul className="footer__item">
        <li className="footer__link">Расчёт стоимостиа</li>
        <li className="header__link">Услуги</li>
        <li className="footer__link">Виджеты</li>
        <li className="header__link">Вакансии</li>
        <li className="footer__link">Интеграции</li>
        <li className="header__link">Вакансии</li>
        <li className="footer__link">Наши клиенты</li>
        <li className="header__link">Благодарность клиентов</li>
        <li className="footer__link">Кейсы </li>
        <li className="header__link">Сертификаты</li>
        <li className="footer__link">Блог на Youtube </li>
        <li className="header__link">Вопрос / Ответ</li>
      </ul>

      <p className="footer__chapter">Контакты</p>
      <p className="footer__phone">+7 555 555-55-55</p>

      <p className="footer__location">Контакты</p>
      <img className="footer__img" src={telegram} />
      <img className="footer__img" src={viber} />
      <img className="footer__img" src={whatsapp} />

      <p className="footer__location">Москва, Путевой проезд 3с1, к 902</p>

      <p className="footer__copyright">©WELBEX 2022. Все права защищены.</p>
      <p className="footer__copyright"> Политика конфиденциальности</p>
    </div>
  );
}

export default Footer;
