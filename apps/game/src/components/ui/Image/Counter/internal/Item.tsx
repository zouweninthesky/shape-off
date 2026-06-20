import { HTMLAttributes } from "react";
import { tv } from "tailwind-variants";

export interface ItemProps extends HTMLAttributes<HTMLParagraphElement> {
  number: number;
}

export function Item({ number, className, ...props }: ItemProps) {
  const style = styles({
    className,
    empty: number === 0 || number === undefined,
  });

  return (
    <p className={style} {...props}>
      {number.toString().padStart(2, "0")}
    </p>
  );
}

const styles = tv({
  base: "bg-accent rounded-xl text-white p-3 text-2xl min-w-16 text-center",
  variants: {
    empty: {
      true: "text-text-muted",
    },
  },
});
