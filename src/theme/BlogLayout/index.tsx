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
import { WavyBackground } from "../../components/magicui/wavy-background";
import { useLocation } from "@docusaurus/router";
import BlogAuthor from "@theme/Blog/Components/Author";

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

  const location = useLocation();
  const isBlogPage =
    location.pathname.endsWith("/blog") || location.pathname.endsWith("/blog/");

  console.log("isBlogPage", isBlogPage);

  const featuredPost = children[0].props?.items?.[0];

  const dateTimeFormat = useDateTimeFormat({
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });

  return (
    <Layout {...layoutProps}>
      <div className="container margin-vert--lg">
        <div className="row mt-10">
          <main className={clsx(`col ${isBlogPage ? "col--12" : "col--10"}`)}>
            {isBlogPage && (
              <h1 className="text-black dark:text-white z-10 text-pretty">
                The Betalectic Blogs
              </h1>
            )}

            <div className="w-full">
              {featuredPost && (
                <>
                  <WavyBackground
                    backgroundFill="white dark:black"
                    className="max-w-4xl mt-8 mx-auto pb-24 md:pb-40"
                  >
                    <div className="mt-2 mx-auto flex flex-col p-2 sm:flex-row gap-4 shadow-2xl bg-white dark:bg-neutral-900 rounded-lg">
                      <div className="">
                        <img
                          className="object-cover h-full rounded-l-lg"
                          src={featuredPost?.content.frontMatter.image}
                          alt="Featured post image"
                        />
                      </div>
                      <div className="p-2">
                        <h2 className="text-3xl font-bold">
                          {featuredPost?.content.metadata.title}
                        </h2>
                        <DateTime
                          date={featuredPost?.content.metadata.date}
                          formattedDate={dateTimeFormat.format(
                            new Date(featuredPost?.content.metadata.date)
                          )}
                        />
                        {featuredPost?.content.metadata.authors.length > 0 && (
                          <div className="mt-4">
                            {featuredPost?.content.metadata.authors.map(
                              (author, index) => (
                                <BlogAuthor key={index} author={author} />
                              )
                            )}
                          </div>
                        )}

                        <div className="mt-4">
                          <featuredPost.content />
                        </div>

                        <Link
                          href={featuredPost?.content.metadata.permalink}
                          className="ml-auto"
                        >
                          Read More
                        </Link>
                      </div>
                    </div>
                  </WavyBackground>
                </>
              )}
              {children}
            </div>
          </main>

          <div className="col col--2">{toc}</div>
        </div>
      </div>
    </Layout>
  );
}
