import Image from "next/image";

const CustomImage = ({
  src,
  alt,
  width,
  height,
  className,
  ...props
}: {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  [key: string]: any;
}) => {
  const basePath =
    process.env.NODE_ENV === "production" ? "/learning-management-system" : "";

  const fullSrc = `${basePath}${src}`;

  return (
    <Image
      src={fullSrc}
      alt={alt}
      width={width}
      height={height}
      className={className}
      {...props}
    />
  );
};

export default CustomImage;
