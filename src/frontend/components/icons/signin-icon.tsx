import Link from "next/link";
import { BasicComponentProps } from "@/types/component-props-types";

const SigninIcon = ({ scale = 1, color = "currentColor" }: BasicComponentProps) => {
  return (
    <Link href="/sugnin">
      <svg
        className="flex m-0 p-0 items-center justify-center"
        xmlns="http://www.w3.org/2000/svg"
        height={24 * scale}
        viewBox="0 -960 960 960"
        width={24 * scale}
        fill={color}>
        <path d="M280-415.386q-26.846 0-45.73-18.884-18.884-18.884-18.884-45.73 0-26.846 18.884-45.73 18.884-18.884 45.73-18.884 26.846 0 45.73 18.884 18.884 18.884 18.884 45.73 0 26.846-18.884 45.73-18.884 18.884-45.73 18.884Zm0 155.385q-91.538 0-155.768-64.231-64.23-64.23-64.23-155.768t64.23-155.768q64.23-64.231 155.768-64.231 64.307 0 116.307 33.193 52 33.192 79.384 86.807h360.078L935.767-480 781.923-326.925l-74.23-55.769-76.154 56.538-78.076-53.845h-77.772q-27.384 53.23-79.384 86.615T280-260.001ZM280-320q57.539 0 99.654-34.769 42.115-34.77 54.961-85.231h137.694l57.615 39.846 78.154-57.153L776-405.385 850.616-480l-40-40H434.615q-12.846-50.461-54.961-85.231Q337.539-640 280-640q-66 0-113 47t-47 113q0 66 47 113t113 47Z" />
      </svg>
    </Link>
  );
};

export default SigninIcon;
