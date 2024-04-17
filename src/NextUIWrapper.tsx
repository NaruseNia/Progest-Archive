import { NextUIProvider } from "@nextui-org/react";
import { PropsWithChildren } from "react";
import { useNavigate } from "react-router-dom";

export const NextUIWrapper = ({ children }: PropsWithChildren) => {
  const navigate = useNavigate();
  return (
    <NextUIProvider navigate={navigate}>
      {children}
    </NextUIProvider>
  )
}
