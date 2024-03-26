import { BasicComponentProps } from "@/types/component-props-types";

const PasswordInvisibleIcon = ({
  scale = 1,
  color = "currentColor",
}: BasicComponentProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height={24 * scale}
      viewBox="0 -960 960 960"
      width={24 * scale}
      fill={color}
    >
      <path d="m645.435-432.065-68.283-68.283q7.326-38.391-22.337-72.217t-76.38-26.5l-66.37-66.37q16.283-7.282 32.946-10.924Q461.674-680 480-680q75 0 127.5 52.5T660-500q0 17.848-3.641 34.989-3.642 17.141-10.924 32.946ZM779.652-299.37l-62.782-61.26q36.326-28.522 64.75-62.185 28.423-33.663 49.902-77.185-50.479-100.761-143.5-160.38Q595-720 480-720q-29 0-55.685 3.761-26.685 3.761-52.011 11.043l-68.217-68.217q41-17 84.956-25.5 43.957-8.5 90.957-8.5 152.435 0 272.467 84.695Q872.5-638.022 927.413-500q-23 59.478-60.978 110.935-37.978 51.456-86.783 89.695Zm9.478 246.24L625.435-215.065q-34.522 11.239-70.5 16.859-35.978 5.619-74.935 5.619-152.674 0-272.707-84.935Q87.261-362.456 32.587-500q20.76-52.522 53-98.859 32.239-46.337 72.761-83.293L49.304-792.717l58.631-58.631 739.587 739.826L789.13-53.13ZM219.848-621.37q-28.522 26.479-51.207 56.044-22.684 29.565-39.924 65.326 50 101 143.142 160.5Q365-280 480-280q17.848 0 35.772-2.141 17.924-2.142 37.924-5.142l-36-38q-9.805 2.761-18.848 4.022Q489.804-320 480-320q-75 0-127.5-52.5T300-500q0-9.565 1.141-18.728 1.142-9.163 3.663-18.968l-84.956-83.674Zm324.739 88.457Zm-157.935 78.587Z" />
    </svg>
  );
};

export default PasswordInvisibleIcon;
