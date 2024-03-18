import React from "react";
import { InputGroup } from "./style";

type FormGroupProps = {
  children: React.ReactNode;
};

export default function FormGroup({ children }: FormGroupProps) {
  return <InputGroup>{children}</InputGroup>;
}
