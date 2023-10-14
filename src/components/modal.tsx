import React from "react";

export default function Modal({
  show,
  setShow,
  children,
}: {
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
  children: React.ReactNode;
}) {
  if (show)
    return (
      <div className="absolute flex h-screen w-screen items-center justify-center">
        <div
          onClick={() => setShow(false)}
          className="absolute right-0 top-0 h-screen w-screen bg-black bg-opacity-50"
        />
        <div className="z-30 rounded-xl border bg-gray-100 bg-opacity-90 p-40">
          {children}
        </div>
      </div>
    );
}
