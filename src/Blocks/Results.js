/* eslint-disable jsx-a11y/img-redundant-alt */
import "./Results.css";
import { Card, CardType, CardWrapper } from "../components/cards/Card";
import { Header } from "./Header";
import DoughnutChart from "./DoughnutChart";

function Results({ predictionData }) {
  const { file, Style, Noice, Place } = predictionData;

  const elements = [
    {
      picture: "",
      text: "text1",
    },
    {
      picture: "",
      text: "text2",
    },
    {
      picture: "",
      text: "text3",
    },
  ];

  function RenderResult() {
    const TOTALSUMMA = Style + Noice + Place;

    if (TOTALSUMMA >= 0 && TOTALSUMMA <= 10) {
      return (
        <>
          <h3 className="results__title-bad">Низкое качество логотипа</h3>
          <p className="results__description">
            Должны сообщить вам, что <b>ваша вывеска относится к разряду плохих</b>.
            Данная вывеска плохо вписывается в антураж города, и рекомендуется к
            замене в ближайшее время.
          </p>
        </>
      );
    } else if (TOTALSUMMA >= 11 && TOTALSUMMA <= 20) {
      return (
        <>
          <h3 className="results__title-normal">Среднее качество логотипа</h3>
          <p className="results__description">
            Сообщаем вам, что <b>ваша вывеска является не плохим вариантом</b>, но
            возможно, она была создана по шаблону или была выбрана из общего
            каталога. <b></b>. Нет
            ничего особого или уникального, что сделало бы ее выделяющейся среди
            других вывесок.
          </p>
        </>
      );
    } else if (TOTALSUMMA >= 21) {
      return (
        <>
          <h3 className="results__title-good">Высокое качество логотипа</h3>
          <p className="results__description">
            Мы рады подтвердить, что <b>ваша вывеска отличается отличным дизайном</b>,
            четким и легко читаемыми шрифтами, привлекательными цветами и
            эффективным использованием пространства.
          </p>
        </>
      );
    } else {
      console.log("error");
    }
  }

  return (
    <div className="results">
      <Header />
      <div className="block1-subtitle">Результаты оценок</div>
      <div className="results-wrapper">
        <div className="results__picture-container">
          <img src={file} alt="picture-prediction" />
        </div>
        <div className="results__title-container">
          <RenderResult></RenderResult>
        </div>
        
      </div>
      <div className="charts__container">
      <DoughnutChart value={Style} color={"#C2CDFF"} />
      <DoughnutChart value={Noice} color={"#FFE7C8"}/>
      <DoughnutChart value={Place} color={"#FFD5D2"}/>
        </div>
      <CardWrapper>
        {elements.map((el, index) => (
          <Card
            key={index}
            picture={el.picture}
            text={el.text}
            cardType={CardType.FIRST}
          />
        ))}
      </CardWrapper>
    </div>
  );
}

export default Results;
