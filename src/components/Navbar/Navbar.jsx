import { DownOutlined, SmileOutlined } from "@ant-design/icons";
import { Button, Dropdown, Space } from "antd";
import { useTranslation } from "react-i18next";

export const Navbar = () => {
  const { t, i18n } = useTranslation();

  const changeLanguageHandler = (lang) => {
    return () => {
      console.log(lang);
      i18n.changeLanguage(lang);
    };
  };

  return (
    <nav className="w-full h-15 mb-5 flex items-center justify-center backdrop-blur-xs border-[#534e4e] border-solid border-b">
      <div className="w-[80%]">
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
      </div>
    </nav>
  );
};
