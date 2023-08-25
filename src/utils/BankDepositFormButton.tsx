import React, { FC, ReactNode } from "react";
import { Button } from "@progress/kendo-react-buttons";
import './BankDepositFormButton.scss'
interface DynamicButtonProps {
  label: string;
  onClick: () => void;
  type: "default" | "primary" | "success" | "warning" | "danger";
  children?: ReactNode;
}

const BankDepositFormHeader: FC<DynamicButtonProps> = ({
  label,
  onClick,
  type,
  children,
}) => {
  let buttonClassName = "k-button";

switch (type) {
  case "primary":
    buttonClassName = "saveBtn";
    break;
  case "success":
    buttonClassName = "k-success";
    break;
  case "warning":
    buttonClassName = "cancelBtn";
    break;
  case "danger":
    buttonClassName = "k-danger";
    break;
  default:
    break;
}

  return (
    <Button onClick={onClick} className={buttonClassName}>
      {label}
      {children}
    </Button>
  );
};

export default BankDepositFormHeader;
