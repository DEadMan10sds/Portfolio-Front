import { ConfigProvider, theme } from "antd";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { Home } from "./pages/Home";
import { BrowserRouter, createBrowserRouter } from "react-router";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        title: "Hello there",
        language_menu: "Eng",
      },
    },
    es: {
      translation: {
        title: "Hola mundo",
        language_menu: "Es",
      },
    },
  },
  lng: "en",
  fallbackLng: "en",
});

const router = createBrowserRouter([
  {
    path: "/",
    index: true,
    element: <Home />,
  },
]);

function App() {
  return (
    <ConfigProvider
      theme={{
        algorithm: theme.darkAlgorithm,
      }}
    >
      <Home />
      {/* <Footer></Footer> */}
    </ConfigProvider>
  );
}

export default App;
