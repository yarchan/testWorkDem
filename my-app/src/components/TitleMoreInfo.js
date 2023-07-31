//import logo from "./logo.svg";
//import "./App.css";

function TitleMoreInfo() {
  return (
    <div className="container__info">
      <p className="info__more-text">
        Вместе с
        <span className="highlight-textе"> бесплатной консультацией </span>
        мы дарим:
      </p>
      <ul className="info__more-list">
        <li className="info__more-link">
          <p className="info__more-title">Виджеты</p>
          <p className="info__more-subtext">30 готовых решений</p>
        </li>
        <li className="info__more-link">
          <p className="info__more-title">Dashboard</p>
          <p className="info__more-subtext">с показателями вашего бизнеса</p>
        </li>
        <li className="info__more-link">
          <p className="info__more-title">Skype Аудит</p>
          <p className="info__more-subtext">отдела продаж CRM системы</p>
        </li>
        <li className="info__more-link">
          <p className="info__more-title">35 дней</p>
          <p className="info__more-subtext">использования CRM</p>
        </li>
      </ul>
      <button className="info__more-btn">Получить консультацию</button>
    </div>
  );
}

export default TitleMoreInfo;
