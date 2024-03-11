import React from "react";
import { Box } from "./style";
import { ContainerProps } from "../../types/container";

export default function Container({ children }: ContainerProps) {
  return <Box>{children}</Box>;
}
