import React from "react";

export interface IProps {
  continueUrl: string;
  backOption?: boolean;
  finalStep?: boolean;
  children: React.ReactNode;
}
