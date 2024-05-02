import type { FC } from "react";
import React from "react";
import "./Model.css";
import { VscClose } from "react-icons/vsc";
interface ModelProps {
  children: React.ReactNode;
  open: boolean;
  onClose: () => void;
}

const Model: FC<ModelProps> = ({ children, open, onClose }) => {
  return (
    <>
      {open && (
        <div className="modal-container">
          <div className="modal">
            <VscClose
              size={42}
              color="white"
              onClick={onClose}
              className="absolute top-[-30px] right-[8%]"
            />
            <div className="modal-content">{children}</div>
          </div>
        </div>
      )}
    </>
  );
};

export default Model;
