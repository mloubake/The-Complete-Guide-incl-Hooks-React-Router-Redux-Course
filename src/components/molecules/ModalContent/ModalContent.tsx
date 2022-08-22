import React from "react";
import Button from "../../atoms/Button/Button";
import Label from "../../atoms/Label/Label";

interface IProps {
  ModalContentStyle: string;
  onHandleToggleModal: () => void;
  error: { title: string; message: string };
}

const ModalContent: React.FC<IProps> = ({
  ModalContentStyle,
  onHandleToggleModal,
  error,
}) => {
  return (
    <div className={ModalContentStyle}>
      <header>
        <Label text={error.title} />
      </header>
      <main>{error.message}</main>
      <footer>
        <Button
          text="Okay"
          onClick={onHandleToggleModal}
          className="close-button"
        />
      </footer>
    </div>
  );
};

export default ModalContent;
