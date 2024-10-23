/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from "react";
import Translate, { translate } from "@docusaurus/Translate";
import Link from "@docusaurus/Link";
import type { Props } from "@theme/BlogPostItem/Footer/ReadMoreLink";

function ReadMoreLabel() {
  return (
    <b className="text-white dark:text-black text-sm font-semibold">
      <Translate
        id="theme.blog.post.readMore"
        description="The label used in blog post item excerpts to link to full blog posts"
      >
        Read more
      </Translate>
    </b>
  );
}

export default function BlogPostItemFooterReadMoreLink(
  props: Props
): JSX.Element {
  const { blogPostTitle, ...linkProps } = props;
  return (
    <Link
      className="bg-neutral-950 dark:bg-neutral-50 m-3 hover:bg-neutral-600 dark:hover:bg-neutral-400 py-2 px-4 rounded-3xl"
      aria-label={translate(
        {
          message: "Read more about {title}",
          id: "theme.blog.post.readMoreLabel",
          description:
            "The ARIA label for the link to full blog posts from excerpts",
        },
        { title: blogPostTitle }
      )}
      {...linkProps}
    >
      <ReadMoreLabel />
    </Link>
  );
}
