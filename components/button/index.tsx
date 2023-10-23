import React from "react";
import { Button as Btn, Link } from "./styles";

type ButtonProps = {
  buttonType?: string;
  type?: string;
  children?: any;
  onClick?: any;
  className?: string;
  href?: string;
};

const Button = ({
  buttonType,
  type,
  children,
  onClick,
  className,
  href,
}: ButtonProps) => {
  if (!href) {
    return (
      <Btn className={className} type={type} onClick={onClick}>
        {children}
      </Btn>
    );
  } else {
    return (
      <Link className={className} href={href}>
        {children}
      </Link>
    );
  }
};

Button.defaultProps = {
  type: "button",
};

export default Button;
