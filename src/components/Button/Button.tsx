import styles from "./Button.module.scss";

type ButtonProps = {
  // [key: string]: string | number | boolean | undefined | Function;
  variant?: "red" | "blue" | "light" | "lightRed";
  children: any;
};

export const Button = ({ children, variant }: ButtonProps) => {
  variant = variant ?? "red";
  const cssClassVariant = `buttonClass__${variant}`;

  return (
    <div className={`${styles.buttonClass} ${styles[cssClassVariant]}`}>
      <button>{children}</button>
    </div>
  );
};
