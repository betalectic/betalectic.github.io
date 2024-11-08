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
          ? "text-neutral-300 dark:text-neutral-300"
          : "text-neutral-600 dark:text-neutral-300"
      )}
    >
      <strong
        className={
          invert
            ? "text-white dark:text-neutral-50"
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
        <Office name="India" invert={invert}>
          3rd Floor, Mitti’s Building, Sai Krupa Enclave, Khajaguda, Hyderabad,
          Telangana, 500089
        </Office>
      </li>
      <li className="list-none">
        <Office name="USA" invert={invert}>
          651 N Broad St, Suite 206, Middletown, Delaware, 19709
        </Office>
      </li>
    </ul>
  );
}
