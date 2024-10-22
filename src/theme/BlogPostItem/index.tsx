/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from "react";
import clsx from "clsx";
import { useBlogPost } from "@docusaurus/plugin-content-blog/client";
import BlogPostItemContainer from "@theme/BlogPostItem/Container";
import BlogPostItemHeader from "@theme/BlogPostItem/Header";
import BlogPostItemContent from "@theme/BlogPostItem/Content";
import BlogPostItemFooter from "@theme/BlogPostItem/Footer";
import type { Props } from "@theme/BlogPostItem";
import { FadeIn } from "@site/src/components/studio/components/FadeIn";
import { Border } from "@site/src/components/studio/components/Border";

// apply a bottom margin in list view
function useContainerClassName() {
  const { isBlogPostPage } = useBlogPost();
  return !isBlogPostPage ? "margin-bottom--xl" : undefined;
}

export default function BlogPostItem({
  children,
  className,
}: Props): JSX.Element {
  const containerClassName = useContainerClassName();
  console.log("containerClassName", containerClassName);
  return (
    <FadeIn>
      <BlogPostItemContainer className={clsx(containerClassName, className)}>
        <BlogPostItemHeader />
        <BlogPostItemContent>{children}</BlogPostItemContent>
        <BlogPostItemFooter />
      </BlogPostItemContainer>
      {containerClassName !== undefined && (
        <hr className="border-0 h-px mt-[-2rem] bg-gradient-to-r from-white via-black to-white my-8" />
        // <hr className="border-0 h-px bg-gradient-to-r from-gray-300 via-gray-400 to-gray-300 my-8" />
      )}
    </FadeIn>
  );
}
