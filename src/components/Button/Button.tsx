import styles from "./Button.module.scss";

type ButtonProps = {
  [key: string]: string | number | boolean | undefined | Function;
  variant?: "red";
  acao?: () => Function;
  children?: any;
};

export const Button = ({ children, variant, acao, ...props }: ButtonProps) => {
  variant = variant ?? "red";
  const cssClassVariant = `button__${variant}`;

  return (
    <button
      className={`${styles.roundedButton} ${styles[cssClassVariant]}`}
      onClick={acao}
      {...props}
    >
      {children}
    </button>
  );
};
