import { Carousel } from "antd";
import { Profile } from "../Profile/Profile";

const contentStyle = {
  margin: 0,
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
};

export const Certificates = () => {
  return (
    <div className="border border-solid border-blue-400">
      <Carousel arrows infinite>
        <Profile />
        <div>
          <h3 style={contentStyle}>2</h3>
        </div>
        <div>
          <h3 style={contentStyle}>3</h3>
        </div>
        <div>
          <h3 style={contentStyle}>4</h3>
        </div>
        <div>
          <h3 style={contentStyle}>5</h3>
        </div>
      </Carousel>
    </div>
  );
};
