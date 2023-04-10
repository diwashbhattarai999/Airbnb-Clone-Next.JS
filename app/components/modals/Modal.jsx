"use client";

import { useCallback, useEffect, useState } from "react";

const Modal = ({
  isOpen,
  onClose,
  onSubmit,
  title,
  body,
  footer,
  actionLabel,
  disabled,
  secondayAction,
  secondayLabel,
}) => {
  const [showModel, setShowModel] = useState(isOpen);

  useEffect(() => {
    setShowModel(!isOpen);
  }, [isOpen]);

  const handleClose = useCallback(() => {
    if (disabled) {
      return;
    }

    setShowModel(false);
    setTimeout(() => {
      onClose();
    }, 300);
  }, [disabled, onClose]);

  const handleSubmit = useCallback(() => {
    if (disabled) {
      return;
    }

    onSubmit();
  }, [disabled, onSubmit]);

  const handleSecondayAction = useCallback(() => {
    if (disabled || !secondayAction) {
      return;
    }

    secondayAction();
  }, [disabled, secondayAction]);

  if (!isOpen) {
    return null;
  }

  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-hidden fixed inset-0 z-50 outline-none focus:outline-none bg-neutral-800/70">
        <div className="relative w-full md:w-4/6 lg:3/6 xl:w-2/5 my-6 mx-auto h-full lg:h-auto md:h-auto">
          {/* CONTENT */}
          <div
            className={`
                translate duration-300 h-full 
                ${showModel ? "translate-y-0" : "translate-y-0"}
                ${showModel ? "opacity-100" : "opacity-0"}
            `}
          >
            <div className="translate h-full lg:h-auto md:h-auto border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
              {/* HEADER */}
              <div className="flex items-center p-6 rounded-t justify-center relative border-b-[1px]"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
