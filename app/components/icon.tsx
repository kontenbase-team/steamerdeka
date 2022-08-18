import {
  FaWindows,
  FaApple,
  FaLinux,
  FaAndroid,
  FaMobileAlt,
  FaTabletAlt,
} from "react-icons/fa";

export function Icon({ name }: { name: string }) {
  if (name === "Windows") {
    return <FaWindows />;
  }
  if (name === "macOS") {
    return <FaApple />;
  }
  if (name === "Linux") {
    return <FaLinux />;
  }
  if (name === "Android") {
    return <FaAndroid />;
  }
  if (name === "iPhone") {
    return <FaMobileAlt />;
  }
  if (name === "iPad") {
    return <FaTabletAlt />;
  }

  return <span>{name}</span>;
}
