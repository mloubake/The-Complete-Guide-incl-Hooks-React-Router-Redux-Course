import React from "react";

interface IProps {
  backdropClassName: string;
  children: JSX.Element;
  onHandleToggleModal: () => void;
}

const Backdrop: React.FC<IProps> = ({
  backdropClassName,
  children,
  onHandleToggleModal,
}) => {
  return (
    <div className={backdropClassName} onClick={onHandleToggleModal}>
      {children}
    </div>
  );
};

export default Backdrop;
