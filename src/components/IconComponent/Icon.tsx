import type { IconType } from "react-icons";

interface IconProps {
  icon: IconType;
  size?: number;
  color?: string;
}

export default function Icon({ icon: Icon, size, color }: IconProps) {
  return (
    <Icon className={`text-gray-800 ${size ? `w-${size} h-${size}` : ''} ${color ? `text-${color}` : ''}`} />
  );
}
