/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import { useDateTimeFormat } from "@docusaurus/theme-common/internal";
import type { Props } from "@theme/BlogLayout";
import { Container } from "../../components/studio/components/Container";
import { WavyBackground } from "../../components/magicui/wavy-background";

function DateTime({
  date,
  formattedDate,
}: {
  date: string;
  formattedDate: string;
}) {
  return <time dateTime={date}>{formattedDate}</time>;
}

export default function BlogLayout(props: Props): JSX.Element {
  const { sidebar, toc, children, ...layoutProps } = props;
  const hasSidebar = sidebar && sidebar.items.length > 0;

  console.log("props bloglayout", props);
  const featuredPost = children[0].props.items?.find(
    ({ content }) => content.frontMatter.featured === true
  );

  console.log("featuredPost", featuredPost);

  const regularPosts = children[0].props.items?.filter(
    ({ content }) => content.frontMatter.featured === undefined
  );

  const dateTimeFormat = useDateTimeFormat({
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });

  console.log("regularPosts", regularPosts);

  return (
    <Layout {...layoutProps}>
      <div className="container margin-vert--lg">
        <div className="row">
          <main
            className={clsx("col", {
              "": hasSidebar,
              "col--9 col--offset-1": !hasSidebar,
            })}
          >
            <Container className="">
              <div className="w-full">
                {featuredPost && (
                  <WavyBackground className="max-w-4xl mx-auto pb-24 md:pb-40">
                    <h1 className="text-black text-pretty">
                      The Betalectic Blogs
                    </h1>

                    <div className="mt-14 shadow-2xl bg-white rounded-2xl p-4">
                      <h2 className="text-3xl font-bold">
                        {featuredPost.content.metadata.title}
                      </h2>
                      <p className="text-gray-600">
                        {featuredPost.content.metadata.description}
                      </p>
                      <DateTime
                        date={featuredPost.content.metadata.date}
                        formattedDate={dateTimeFormat.format(
                          new Date(featuredPost.content.metadata.date)
                        )}
                      />

                      <div className="mt-4">
                        <featuredPost.content />
                      </div>

                      <Link
                        href={featuredPost.content.metadata.permalink}
                        className="flex"
                      >
                        Read More
                      </Link>
                    </div>
                  </WavyBackground>
                )}
                {children}
              </div>
            </Container>
          </main>

          {toc && <div className="col col--2">{toc}</div>}
        </div>
      </div>
    </Layout>
  );
}
