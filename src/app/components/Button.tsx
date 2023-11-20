"use client";

import Link from "next/link";

type ButtonProps = Omit<React.ComponentProps<"button">, "className">;

type AProps = Omit<React.ComponentProps<typeof Link>, "className" | "href"> & {
  href: string;
};

type Props = ButtonProps | AProps;

export function Button(props: Props) {
  const className =
    "bg-zinc-300 hover:bg-zinc-200 transition ease-in-out  py-1 px-2 rounded-md";

  if ("href" in props) {
    return <Link className={className} {...props} />;
  }

  return <button className={className} {...props} />;
}
