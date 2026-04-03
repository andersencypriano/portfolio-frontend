interface AvatarProps {
  src?: string;
  alt?: string;
  size?: "sm" | "md" | "lg";
}

const sizeClasses = {
  sm: "h-16 w-16",
  md: "h-24 w-24",
  lg: "h-32 w-32",
};

export default function Avatar({
  src = "https://avatars.githubusercontent.com/u/6807751?v=4",
  alt = "Avatar",
  size = "lg",
}: AvatarProps) {
  return (
    <div
      className={`${sizeClasses[size]} overflow-hidden rounded-full border-4 border-background shadow-lg ring-2 ring-border`}
    >
      <img
        src={src}
        alt={alt}
        className="h-full w-full object-cover"
      />
    </div>
  );
}
