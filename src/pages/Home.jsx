import { Navbar } from "../components/Navbar/Navbar";
import TimeLine from "../components/TimeLine/TimeLine";
import { Profile } from "../components/Profile/Profile";
import { ProgrammingLanguages } from "../components/ProgrammingLanguages/ProgrammingLanguages";
import { Certificates } from "../components/Carousel/Carousel";
import { Stars } from "../components/Stars/Stars";
import { Footer } from "../components/Footer/Footer";
import { Flex, Row, Col } from "antd";
import { Outlet } from "react-router";

export const Home = () => {
  return (
    <>
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
          <Col span={8}>
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
    </>
  );
};
