import {
  FacebookOutlined,
  LinkedinOutlined,
  TwitterOutlined,
  YoutubeOutlined,
} from "@ant-design/icons";
import { Flex, Tag } from "antd";

export const ProgrammingLanguages = () => {
  return (
    <Flex
      vertical
      align="center"
      gap="middle"
      className=" border border-solid border-red-400"
    >
      <h1>Tags</h1>
      <Flex gap=".7rem" className="border border-solid border-white">
        <Tag icon={<TwitterOutlined />} color="#55acee">
          Twitter
        </Tag>
        <Tag icon={<YoutubeOutlined />} color="#cd201f">
          Youtube
        </Tag>
        <Tag icon={<FacebookOutlined />} color="#3b5999">
          Facebook
        </Tag>
        <Tag icon={<LinkedinOutlined />} color="#55acee">
          LinkedIn
        </Tag>
      </Flex>
    </Flex>
  );
};
