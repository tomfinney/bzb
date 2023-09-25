"use client";

type ButtonProps = Omit<React.ComponentProps<"button">, "className">;

type AProps = Omit<React.ComponentProps<"a">, "className" | "href"> & {
  href: string;
};

type Props = ButtonProps | AProps;

export function Button(props: Props) {
  const className =
    "bg-zinc-300 hover:bg-zinc-200 transition ease-in-out  py-1 px-2 rounded-md";

  if ("href" in props) {
    return <a className={className} {...props}></a>;
  }

  return <button className={className} {...props} />;
}
