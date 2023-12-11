import React from "react";

function CustomButton({
  btnType,
  title,
  onHandleClick,
  styles,
}: {
  btnType: "submit" | "reset" | "button" | undefined;
  title: string;
  onHandleClick?: () => void;
  styles: string;
}) {
  return (
    <button
      type={btnType}
      className={`font-epilogue font-semibold text-[16px] leading-[26px] text-white min-h-[52px] px-4 rounded-[10px] ${styles}`}
      onClick={onHandleClick}
    >
      {title}
    </button>
  );
}

export default CustomButton;
