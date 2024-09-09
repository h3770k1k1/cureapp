import React from "react";
import Svg, { Path } from "react-native-svg";

const SettingsIcon = ({ fill = "#8E8E8E", width = 26, height = 24 }) => (
  <Svg
    width={width}
    height={height}
    viewBox="0 0 26 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <Path
      d="M10.4786 11.2941C9.03778 11.2941 7.80437 10.7412 6.77834 9.63529C5.75231 8.52941 5.2393 7.2 5.2393 5.64706C5.2393 4.09412 5.75231 2.76471 6.77834 1.65882C7.80437 0.552941 9.03778 0 10.4786 0C11.9194 0 13.1528 0.552941 14.1788 1.65882C15.2049 2.76471 15.7179 4.09412 15.7179 5.64706C15.7179 7.2 15.2049 8.52941 14.1788 9.63529C13.1528 10.7412 11.9194 11.2941 10.4786 11.2941ZM0 22.5882V18.6353C0 17.8588 0.185558 17.1294 0.556675 16.4471C0.927792 15.7647 1.44081 15.2471 2.09572 14.8941C3.20907 14.2824 4.46432 13.7647 5.86146 13.3412C7.25861 12.9176 8.79765 12.7059 10.4786 12.7059H10.937C11.068 12.7059 11.199 12.7294 11.33 12.7765C11.1553 13.2 11.008 13.6412 10.8879 14.1C10.7678 14.5588 10.6751 15.0353 10.6096 15.5294H10.4786C8.92863 15.5294 7.53694 15.7412 6.30353 16.1647C5.07011 16.5882 4.06045 17.0118 3.27456 17.4353C3.07809 17.5529 2.91982 17.7176 2.79975 17.9294C2.67968 18.1412 2.61965 18.3765 2.61965 18.6353V19.7647H10.8715C11.0025 20.2588 11.1772 20.7471 11.3955 21.2294C11.6138 21.7118 11.8539 22.1647 12.1159 22.5882H0ZM18.3375 24L17.9446 21.8824C17.6826 21.7647 17.437 21.6412 17.2078 21.5118C16.9786 21.3824 16.7439 21.2235 16.5038 21.0353L14.6045 21.6706L13.2947 19.2706L14.801 17.8588C14.7573 17.5294 14.7355 17.2235 14.7355 16.9412C14.7355 16.6588 14.7573 16.3529 14.801 16.0235L13.2947 14.6118L14.6045 12.2118L16.5038 12.8471C16.7439 12.6588 16.9786 12.5 17.2078 12.3706C17.437 12.2412 17.6826 12.1176 17.9446 12L18.3375 9.88235H20.9572L21.3501 12C21.6121 12.1176 21.8577 12.2471 22.0869 12.3882C22.3161 12.5294 22.5508 12.7059 22.7909 12.9176L24.6902 12.2118L26 14.6824L24.4937 16.0941C24.5374 16.3765 24.5592 16.6706 24.5592 16.9765C24.5592 17.2824 24.5374 17.5765 24.4937 17.8588L26 19.2706L24.6902 21.6706L22.7909 21.0353C22.5508 21.2235 22.3161 21.3824 22.0869 21.5118C21.8577 21.6412 21.6121 21.7647 21.3501 21.8824L20.9572 24H18.3375ZM19.6474 19.7647C20.3678 19.7647 20.9845 19.4882 21.4975 18.9353C22.0105 18.3824 22.267 17.7176 22.267 16.9412C22.267 16.1647 22.0105 15.5 21.4975 14.9471C20.9845 14.3941 20.3678 14.1176 19.6474 14.1176C18.927 14.1176 18.3102 14.3941 17.7972 14.9471C17.2842 15.5 17.0277 16.1647 17.0277 16.9412C17.0277 17.7176 17.2842 18.3824 17.7972 18.9353C18.3102 19.4882 18.927 19.7647 19.6474 19.7647ZM10.4786 8.47059C11.199 8.47059 11.8157 8.19412 12.3287 7.64118C12.8417 7.08824 13.0982 6.42353 13.0982 5.64706C13.0982 4.87059 12.8417 4.20588 12.3287 3.65294C11.8157 3.1 11.199 2.82353 10.4786 2.82353C9.75819 2.82353 9.14148 3.1 8.62846 3.65294C8.11545 4.20588 7.85894 4.87059 7.85894 5.64706C7.85894 6.42353 8.11545 7.08824 8.62846 7.64118C9.14148 8.19412 9.75819 8.47059 10.4786 8.47059Z"
      fill={fill}
    />
  </Svg>
);

export default SettingsIcon;
