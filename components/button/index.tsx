import React from "react";
import { Button as Btn, Link } from "./styles";

type ButtonProps = {
  buttonType?: string;
  type?: string;
  children?: any;
  onClick?: any;
  className?: string;
  href?: string;
  id?: string;
};

const Button = ({
  buttonType,
  type,
  children,
  onClick,
  className,
  href,
  id,
}: ButtonProps) => {
  if (!href) {
    return (
      <Btn className={className} onClick={onClick} id={id}>
        {children}
      </Btn>
    );
  } else {
    return (
      <Link className={className} href={href} id={id}>
        {children}
      </Link>
    );
  }
};

Button.defaultProps = {
  type: "button",
};

export default Button;
