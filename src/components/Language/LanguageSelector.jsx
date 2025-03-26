import { Button, Dropdown } from "antd";
import { useTranslation } from "react-i18next";

export const LanguageSelector = () => {
  const { t, i18n } = useTranslation();

  const changeLanguageHandler = (lang) => {
    return () => i18n.changeLanguage(lang);
  };

  return (
    <Dropdown
      arrow
      trigger={["click"]}
      menu={{
        items: [
          {
            key: "1",
            label: <p onClick={changeLanguageHandler("en")}>En</p>,
          },
          {
            key: "2",
            label: <p onClick={changeLanguageHandler("es")}>Es</p>,
          },
        ],
      }}
    >
      <a onClick={(e) => e.preventDefault()}>
        <Button color="default" variant="text">
          {t("language_menu")}
        </Button>
      </a>
    </Dropdown>
  );
};
