const Button = ({
  children,
  variant = "primary",
  size = "small",
  className,
  ...rest
}) => {
  const getVariantClasses = () => {
    switch (variant) {
      case "primary":
        return "bg-[#00ADB5] text-white";
      case "ghost":
        return "bg-transparent text-[#818181]";
      case "secondary":
        return "bg-[#EEEEEE] text-[#35383E]";
    }
  };

  const getSizeClasses = () => {
    switch (size) {
      case "small":
        return "text-xs py-1";
      case "large":
        return "text-sm py-2";
    }
  };
  return (
    <button
      className={`flex items-center justify-center gap-2 rounded-md px-3 py-1 text-xs font-semibold transition hover:opacity-60 ${getVariantClasses()} ${getSizeClasses()} ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
