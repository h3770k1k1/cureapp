import React from "react";
import Svg, { Path } from "react-native-svg";

const HomeIcon = ({ fill = "#8E8E8E", width = 24, height = 24 }) => (
  <Svg
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <Path
      d="M2.97551 21.3333H7.43878V13.3333H16.3653V21.3333H20.8286C20.8286 21.3333 21.6 13.3333 20.8286 9.33333C20.447 7.35484 11.902 3.33333 11.902 3.33333C11.902 3.33333 3.37048 6.58065 2.97551 9.33333C2.20408 14.7097 2.97551 21.3333 2.97551 21.3333ZM1.10793e-08 24C1.10793e-08 24 0.000875712 13.3893 1.10793e-08 8C-0.000419313 5.41935 11.902 0 11.902 0C11.902 0 23.6373 6.19355 23.8041 8C24.2449 12.7742 23.8041 24 23.8041 24H13.3898V16H10.4143V24H1.10793e-08Z"
      fill={fill}
    />
  </Svg>
);

export default HomeIcon;
