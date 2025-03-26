import React from "react";
import { Timeline } from "antd";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Job = ({ text, link }) => {
  const { t } = useTranslation();
  return (
    <Link to={link}>
      <p className="text-white decoration-indigo-500">{t(text)}</p>
    </Link>
  );
};

const Date = ({ date }) => {
  const { t } = useTranslation();
  return <p className="text-zinc-400">{t(date)}</p>;
};

const TimeLine = () => {
  const { t } = useTranslation();

  return (
    <Timeline
      mode="left"
      pending={<Job text="actual_job" link="/" />}
      style={{
        color: "white",
      }}
      reverse
      items={[
        {
          label: <Date date="aia.date" />,
          color: "green",
          children: (
            <Link to="/AIA">
              <p className="text-white decoration-indigo-500">
                AIA Partners - {t("aia.role")}
              </p>
            </Link>
          ),
        },
        {
          label: <Date date="uaslp.date" />,
          color: "green",
          children: (
            <Link to="/AIA">
              <p className="text-white decoration-indigo-500">
                UASLP - {t("uaslp.role")}
              </p>
            </Link>
          ),
        },
        {
          label: <Date date="cooperative_computing.date" />,
          color: "green",
          children: (
            <Link to="/AIA">
              <p className="text-white underline decoration-purple-600 decoration-2">
                Cooperative Computing - {t("cooperative_computing.role")}
              </p>
            </Link>
          ),
        },
      ]}
    />
  );
};

export default TimeLine;
