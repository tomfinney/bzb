"use client";

type Props = Omit<React.ComponentProps<"button">, "className">;

export function Button(props: Props) {
  return <button className="bg-zinc-300 py-1 px-2 rounded-md" {...props} />;
}
