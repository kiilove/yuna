import React from "react";
import "./Edubridge.css";
import { FlexBox, Textgraphy } from "../styles/components";
let imgList = [];

function makeList() {
  for (let index = 1; index < 20; index++) {
    const baseUrl = `./img/edubridge/slide${index}.JPG`;
    imgList.push(baseUrl);
  }
  return imgList;
}
makeList();

const Edubridge = () => {
  return (
    <FlexBox flexDirection="column">
      {imgList.map((item, index) => (
        <>
          {index > 15 ? (
            <img
              src={item}
              style={{ webkitFilter: "blur(6px)" }}
              alt=""
              width="90%"
            />
          ) : (
            <img src={item} alt="" width="90%" />
          )}

          <FlexBox
            width="100%"
            style={{
              background: "rgb(34,89,195)",
              background:
                "radial-gradient(circle, rgba(34,89,195,1) 0%, rgba(126,253,45,1) 100%)",
            }}
          >
            <Textgraphy
              fontSize="38px"
              height="70px"
              fontWeight="700"
              mt="30px"
              mb="10px"
              color="whitesmoke"
            >
              빠른 상담 조유나 실장(010-5850-7733)
            </Textgraphy>
          </FlexBox>
        </>
      ))}
    </FlexBox>
  );
};

export default Edubridge;
