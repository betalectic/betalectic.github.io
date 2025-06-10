/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { useEffect, useState } from "react";
import { useLocation } from '@docusaurus/router';
import { BlogPostProvider } from "@docusaurus/plugin-content-blog/client";
import BlogPostItem from "@theme/BlogPostItem";
import type { Props } from "@theme/BlogPostItems";
import clsx from "clsx";

export default function BlogPostItems({
  items,
  component: BlogPostItemComponent = BlogPostItem,
}: Props): JSX.Element {
  const [blogItems, setBlogItems] = useState(items);
  const location = useLocation();

  useEffect(() => {
    const pathname = location.pathname;
    const isBlogRoot = pathname === '/blog' || pathname === '/blog/';
    const newItems = isBlogRoot ? items.slice(1) : items;

    setBlogItems((prevItems) =>
      JSON.stringify(prevItems) !== JSON.stringify(newItems) ? newItems : prevItems
    );
  }, [location.pathname, items]);
  
  return (
    <>
      {blogItems?.map(({ content: BlogPostContent }, index) => (
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
