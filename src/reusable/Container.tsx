import React from "react";

interface IContainerProps {
  children: React.ReactNode;
  styles?: string;
}

export function Container({ children, styles }: IContainerProps) {
  return (
    <div
      className={` flex flex-col w-full overflow-hidden px-4 absolute sm:max-w-2xl
        top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
       ${styles} `}
    >
      {children}
    </div>
  );
}
export function Box({ children, styles }: IContainerProps) {
  return (
    <div
      className={` flex flex-col w-full bg-white p-6 rounded-lg overflow-hidden 
       ${styles} `}
    >
      {children}
    </div>
  );
}
