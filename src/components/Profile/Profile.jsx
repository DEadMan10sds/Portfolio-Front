import { Card } from "antd";
import { useTranslation } from "react-i18next";

export const Profile = () => {
  const { t } = useTranslation();

  return (
    <Card
      title={t("title")}
      variant="borderless"
      style={{
        margin: "0 0 4rem 0",
        backgroundColor: "#181d28f2",
      }}
    >
      {t("profile")}
    </Card>
  );
};
