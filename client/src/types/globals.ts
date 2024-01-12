import { ClassValue } from "clsx";

export type TChildrenProps = {
  children: React.ReactNode;
};

export type TChildrenWithClassNameProps = TChildrenProps & {
  className?: ClassValue;
};
