import clsx from "clsx";

function Office({
  name,
  children,
  invert = false,
}: {
  name: string;
  children: React.ReactNode;
  invert?: boolean;
}) {
  return (
    <address
      className={clsx(
        "text-sm not-italic",
        invert
          ? "text-neutral-300 dark:text-neutral-600"
          : "text-neutral-600 dark:text-neutral-300"
      )}
    >
      <strong
        className={
          invert
            ? "text-white dark:text-neutral-950"
            : "text-neutral-950 dark:text-neutral-50"
        }
      >
        {name}
      </strong>
      <br />
      {children}
    </address>
  );
}

export function Offices({
  invert = false,
  ...props
}: React.ComponentPropsWithoutRef<"ul"> & { invert?: boolean }) {
  return (
    <ul role="list" {...props}>
      <li className="list-none">
        <Office name="Copenhagen" invert={invert}>
          1 Carlsberg Gate
          <br />
          1260, København, Denmark
        </Office>
      </li>
      <li className="list-none">
        <Office name="Billund" invert={invert}>
          24 Lego Allé
          <br />
          7190, Billund, Denmark
        </Office>
      </li>
    </ul>
  );
}
