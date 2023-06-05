import React from "react";
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Home | Mobin Karam</title>
        <meta
          name="description"
          content="Frontend develoepr | Backend developer | Full Stack Developer"
        />
      </Helmet>
      <section className="Home">
        <section className="Center">
          <div className="Left">
            <div className="LeftTop">
              <h1 className="TitleLeftTop"></h1>
              <p className="PLeftTop"></p>
              <div className="BtnLeftTop">
                <button className="Btn"></button>
                <button className="Btn"></button>
              </div>
              <div className="NumLeftTop">
                <div className="NumberBox">
                  <div className="Number"></div>
                  <div className="NumberText"></div>
                </div>
                <div className="NumberBox">
                  <div className="Number"></div>
                  <div className="NumberText"></div>
                </div>
                <div className="NumberBox">
                  <div className="number"></div>
                  <div className="numberText"></div>
                </div>
              </div>
            </div>
            <div className="LeftBottom">
              <div className="BoxOne">
                <h2 className="TitleLeftBottom">Project</h2>
                <button className="Btn">Know More</button>
              </div>
              <div className="BoxTwo">
                <h2 className="TextLeftBottom">
                  <p className="Txt"></p>
                  <p className="Num"></p>
                </h2>
                <h2 className="TextLeftBottom">
                  <p className="Txt"></p>
                  <p className="Num"></p>
                </h2>
                <h2 className="TextLeftBottom">
                  <p className="Txt"></p>
                  <p className="Num"></p>
                </h2>
              </div>
            </div>
          </div>
          <div className="Right">
            <p className="TitlePhoto">MyPersonalPhoto</p>
          </div>
        </section>
      </section>
    </>
  );
};

export default Home;
