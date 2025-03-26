import React from "react";
import { Timeline } from "antd";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const TimeLine = () => {
  const { t } = useTranslation();

  return (
    <Timeline
      mode="left"
      pending={<Link to="/">{t("actual_job")}</Link>}
      reverse
      items={[
        {
          label: "Hola",
          color: "green",
          children: "Create a services site 2015-09-01",
        },
        {
          color: "green",
          children: "Create a services site 2015-09-01",
        },
        {
          label: <Link to="/AIA">Este es un link</Link>,
          color: "red",
          children: (
            <>
              <p>Solve initial network problems 1</p>
              <p>Solve initial network problems 2</p>
              <p>Solve initial network problems 3 2015-09-01</p>
            </>
          ),
        },
        {
          label: "Hola",
          children: (
            <>
              <p>Technical testing 1</p>
              <p>Technical testing 2</p>
              <p>Technical testing 3 2015-09-01</p>
            </>
          ),
        },
      ]}
    />
  );
};

export default TimeLine;
