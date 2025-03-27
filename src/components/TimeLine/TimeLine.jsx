import React, { useState } from "react";
import { Card, Flex, Timeline } from "antd";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Date = ({ date }) => {
  const { t } = useTranslation();
  return <p className="text-zinc-400">{t(date)}</p>;
};

const TimeLine = () => {
  const { t } = useTranslation();
  const [job, setJob] = useState("bitcat");
  //const [responsabilities, setResposabilities] = useState(
  //  t(`bitcat.description.responsabilities`, {
  //    returnObjects: true,
  //  })
  //);

  function selectJob(selectedJob) {
    if (job === selectedJob) return;

    //setResposabilities(
    //  t(`${job}.description.responsabilities`, {
    //    returnObjects: true,
    //  })
    //);

    return () => {
      setJob(selectedJob);
    };
  }

  return (
    <Flex gap={12}>
      <Timeline
        mode="left"
        pending={
          <div
            className="text-white  cursor-pointer w-[70%]"
            onClick={selectJob("bitcat")}
          >
            <p>Bitcat Services</p>
            <hr className="h-0.5 border-t-0 bg-neutral-100 dark:bg-white/10" />
            <p>{t("bitcat.role")}</p>
          </div>
        }
        style={{
          color: "white",
          width: "400px",
        }}
        reverse
        items={[
          {
            label: <Date date="aia.date" />,
            color: "green",
            children: (
              <div
                className="text-white  cursor-pointer flex flex-col gap-1 w-[70%]"
                onClick={selectJob("aia")}
              >
                <p>AIA Partners</p>
                <hr className="h-0.5 border-t-0 bg-neutral-100 dark:bg-white/10" />
                <p>{t("aia.role")}</p>
              </div>
            ),
          },
          {
            label: <Date date="uaslp.date" />,
            color: "green",
            children: (
              <div
                className="text-white  cursor-pointer flex flex-col gap-1 w-[70%]"
                onClick={selectJob("uaslp")}
              >
                <p>UASLP</p>
                <hr className="h-0.5 border-t-0 bg-neutral-100 dark:bg-white/10" />
                <p>{t("uaslp.role")}</p>
              </div>
            ),
          },
          {
            label: <Date date="cooperative_computing.date" />,
            color: "green",
            children: (
              <div
                className="text-white  cursor-pointer flex flex-col gap-1 w-[70%]"
                onClick={selectJob("cooperative_computing")}
              >
                <p>Cooperative Computing</p>
                <hr className="h-0.5 border-t-0 bg-neutral-100 dark:bg-white/10" />
                <p>{t("cooperative_computing.role")}</p>
              </div>
            ),
          },
        ]}
      />
      <div className="w-64">
        <Card title={t(`${job}.role`)}>
          <ul>
            {/* {responsabilities ??
              responsabilities.map((item) => <li>{item}</li>)} */}
          </ul>
        </Card>
      </div>
    </Flex>
  );
};

export default TimeLine;
