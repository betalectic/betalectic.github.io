/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import { useBlogPost } from "@docusaurus/plugin-content-blog/client";
import type { Props } from "@theme/BlogPostItem/Header/Title";

import styles from "./styles.module.css";

export default function BlogPostItemHeaderTitle({
  className,
}: Props): JSX.Element {
  const { metadata, isBlogPostPage } = useBlogPost();
  const { permalink, title } = metadata;
  const TitleHeading = isBlogPostPage ? "h1" : "h2";
  return (
    <TitleHeading className={clsx(className)}>
      {isBlogPostPage ? title : <Link className={"text-gray-800 dark:text-gray-100 hover:text-gray-600 dark:hover:text-gray-400"} to={permalink}>{title}</Link>}
    </TitleHeading>

    // <h1>{isBlogPostPage ? title : <Link to={permalink}>{title}</Link>}</h1>
  );
}
