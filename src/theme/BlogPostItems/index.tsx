/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from "react";
import { BlogPostProvider } from "@docusaurus/plugin-content-blog/client";
import BlogPostItem from "@theme/BlogPostItem";
import type { Props } from "@theme/BlogPostItems";
import clsx from "clsx";

export default function BlogPostItems({
  items,
  component: BlogPostItemComponent = BlogPostItem,
}: Props): JSX.Element {
  return (
    <>
      {items.slice(1).map(({ content: BlogPostContent }, index) => (
        <BlogPostProvider
          key={BlogPostContent.metadata.permalink}
          content={BlogPostContent}
        >
          <div className={clsx("blog-post-item")}>
            <BlogPostItemComponent>
              <BlogPostContent />
            </BlogPostItemComponent>
          </div>
          <hr />
        </BlogPostProvider>
      ))}
    </>
  );
}
