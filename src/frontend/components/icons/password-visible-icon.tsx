import { BasicComponentProps } from "@/types/component-props-types";

const PasswordVisibleIcon = ({
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
      <path d="M480-320q75 0 127.5-52.5T660-500q0-75-52.5-127.5T480-680q-75 0-127.5 52.5T300-500q0 75 52.5 127.5T480-320Zm.042-77.022q-42.89 0-72.955-30.023-30.065-30.023-30.065-72.913t30.023-72.955q30.023-30.065 72.913-30.065t72.955 30.023q30.065 30.023 30.065 72.913t-30.023 72.955q-30.023 30.065-72.913 30.065ZM480-192.587q-148.87 0-270.663-83.891Q87.543-360.37 32.587-500q54.956-139.63 176.75-223.522Q331.13-807.413 480-807.413t270.663 83.891Q872.457-639.63 927.413-500q-54.956 139.63-176.75 223.522Q628.87-192.587 480-192.587ZM480-500Zm.021 220q112.74 0 207.001-59.62Q781.283-399.239 831.283-500q-50-100.761-144.283-160.38Q592.718-720 479.979-720q-112.74 0-207.001 59.62Q178.717-600.761 128.717-500q50 100.761 144.283 160.38Q367.282-280 480.021-280Z" />
    </svg>
  );
};

export default PasswordVisibleIcon;
