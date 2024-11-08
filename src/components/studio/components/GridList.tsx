import clsx from "clsx";

import { Border } from "./Border";
import { FadeIn, FadeInStagger } from "./FadeIn";

export function GridList({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <FadeInStagger>
      <ul
        role="list"
        className={clsx(
          "grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3",
          className
        )}
      >
        {children}
      </ul>
    </FadeInStagger>
  );
}

export function GridListItem({
  title,
  children,
  className,
  invert = false,
  image,
  icon: Icon,
}: {
  title: string;
  children: React.ReactNode;
  className?: string;
  invert?: boolean;
  image?: string;
  icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}) {
  return (
    <li
      className={clsx(
        "text-base",
        invert
          ? "text-neutral-300 before:bg-white after:bg-white/10"
          : "text-neutral-600 dark:text-neutral-300 before:bg-neutral-950 after:bg-neutral-100",
        className
      )}
    >
      <FadeIn>
        <Border position="left" className="pl-8" invert={invert}>
          <div className="flex items-center space-x-2">
            {Icon ? (
              <Icon className="w-12 h-12" />
            ) : (
              <img alt="Betalectic logo" src={image} className="w-12 h-12" />
            )}
            {/* <img alt="Betalectic logo" src={image} className="w-12 h-12" /> */}
            <strong
              className={clsx(
                "font-semibold",
                invert ? "text-white" : "text-neutral-950 dark:text-neutral-50"
              )}
            >
              {title}
            </strong>
          </div>

          {/* <img
            alt="Betalectic logo"
            src={require("@site/static/img/favicon_betalectic.png").default}
            className="w-12 h-12"
          />
          <strong
            className={clsx(
              "font-semibold",
              invert ? "text-white" : "text-neutral-950 dark:text-neutral-50"
            )}
          >
            {title}.
          </strong> */}
          <div className="p-2">{children}</div>
        </Border>
      </FadeIn>
    </li>
  );
}
