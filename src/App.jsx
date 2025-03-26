import { Stars } from "./components/Stars/Stars";
import { Footer } from "./components/Footer/Footer";
import { ConfigProvider, Flex, Row, theme, Col } from "antd";
import { Navbar } from "./components/Navbar/Navbar";
import TimeLine from "./components/TimeLine/TimeLine";
import { Profile } from "./components/Profile/Profile";
import { ProgrammingLanguages } from "./components/ProgrammingLanguages/ProgrammingLanguages";
import { Certificates } from "./components/Carousel/Carousel";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { Outlet } from "react-router-dom";
import engTranslation from "./translations/en.json";
import esTranslation from "./translations/es.json";
import "/node_modules/flag-icons/css/flag-icons.min.css";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: engTranslation,
    },
    es: {
      translation: esTranslation,
    },
  },
  lng: "en",
  fallbackLng: "en",
});

function App() {
  return (
    <ConfigProvider
      theme={{
        algorithm: theme.darkAlgorithm,
      }}
    >
      <Stars />
      <Navbar />
      <Flex vertical align="center">
        <div className="w-[80%] ">
          <Profile />
        </div>
        <Row
          style={{
            width: "80%",
          }}
        >
          <Col span={8}>
            <TimeLine />
          </Col>
          <Col span={15}>
            <Outlet />
            {/* <ProgrammingLanguages /> */}
          </Col>
          {/* <Col span={8}>
            <div className="max-w-full h-full">
              <Certificates />
            </div>
          </Col> */}
        </Row>
      </Flex>
      {/* <Footer></Footer> */}
    </ConfigProvider>
  );
}

export default App;
