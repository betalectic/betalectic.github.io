import Link from "@docusaurus/Link";
import clsx from "clsx";

export function Button({ className = "", children, invert, ...props }) {
  className = clsx(
    className,
    "inline-flex rounded-full px-4 py-1.5 text-sm font-semibold  transition",
    invert
      ? "bg-white dark:bg-neutral-50 dark:text-neutral-950 text-neutral-950 hover:bg-neutral-200 hover:text-neutral-900"
      : "bg-neutral-950 text-white dark:bg-neutral-50 dark:text-black hover:bg-neutral-800 hover:text-neutral-50"
  );

  let inner = <span className={`relative top-px`}>{children}</span>;

  if (typeof props.href === "undefined") {
    return (
      <button
        className={`${
          invert ? " bg-black text-white dark:bg-white dark:text-black" : ""
        } ${className}`}
        {...props}
      >
        {inner}
      </button>
    );
  }

  return (
    <Link className={className} {...props}>
      {inner}
    </Link>
  );
}
