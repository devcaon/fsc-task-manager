const SidebarButton = ({ children, variant }) => {
  const getVariantClasses = () => {
    switch (variant) {
      case "unselected":
        return "text-[#35383E]";
      case "selected":
        return "bg-[#E6F7F8] text-[#00ADB5]";
    }
  };
  return (
    <a
      href="#"
      className={`flex items-center gap-2 rounded-lg px-6 py-3 ${getVariantClasses()}`}
    >
      {children}
    </a>
  );
};

export default SidebarButton;
