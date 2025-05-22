import type { IconType } from "react-icons";

interface IconProps {
  icon: IconType;
}

export default function Icon({ icon: Icon }: IconProps) {
  return (
    <div className="flex items-center justify-center w-10 h-10 bg-gray-200 rounded-full">
      <Icon className="text-gray-800" />
    </div>
  );
}
