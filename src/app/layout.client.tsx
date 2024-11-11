"use client";
import i18n from "@/i18n";
import { ReduxProvider } from "@/providers/ReduxProvider";
import { FC, ReactNode } from "react";
import { I18nextProvider } from "react-i18next";
interface LayoutProps {
  children: ReactNode;
}

const LayoutClient: FC<LayoutProps> = ({ children }) => {
  return (
    <I18nextProvider i18n={i18n}>
      <ReduxProvider>{children}</ReduxProvider>
    </I18nextProvider>
  );
};

export default LayoutClient;
