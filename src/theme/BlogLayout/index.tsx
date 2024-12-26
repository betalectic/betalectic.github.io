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
import { PageIntro } from "../../components/studio/components/PageIntro";
import { Testimonial } from "../../components/studio/components/Testimonial";
import {
  FadeIn,
  FadeInStagger,
} from "../../components/studio/components/FadeIn";
import { Border } from "../../components/studio/components/Border";
import { ContactSection } from "../../components/studio/components/ContactSection";

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

  const isOurWorkPage =
    location.pathname.endsWith("/our-work") ||
    location.pathname.endsWith("/our-work/");

  console.log("isBlogPage", isBlogPage);

  const featuredPost = children[0].props?.items?.[0];

  const dateTimeFormat = useDateTimeFormat({
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });

  const clients = [
    [
      "Principal India",
      require("../../images/clients/principal-india.webp").default,
    ],
    ["Cybrilla", require("../../images/clients/cybrilla.png").default],
    [
      "Auction Bazaar",
      require("../../images/clients/auction-bazaar.png").default,
    ],
    ["Chick-fil-A", require("../../images/clients/chick-fil-a.png").default],
    ["Finezzy", require("../../images/clients/finezzy.png").default],
    ["Evoilve", require("../../images/clients/evoilve.png").default],
    ["Novo", require("../../images/clients/novo.png").default],
    ["Wiredup", require("../../images/clients/wiredup.png").default],
    ["Hyperbola", require("../../images/clients/hyperbola.png").default],
    ["FP", require("../../images/clients/FP.png").default],
    ["Analitica", require("../../images/clients/analitica_logo.png").default],
    ["Kumari", require("../../images/clients/kumari.png").default],
    ["UEIN", require("../../images/clients/uecin.png").default],
    ["Vasista", require("../../images/clients/vasista.png").default],
  ];

  function Clients() {
    return (
      <div className=" rounded-4xl py-8 sm:mt-8 sm:py-32 lg:mt-48">
        <div className="max-w-7xl px-2 mx-auto">
          <FadeIn>
            <h2 className="font-display text-2xl text-black font-semibold text-center sm:text-left">
              You’re in good company
            </h2>
          </FadeIn>
          <FadeInStagger className="mt-10" faster>
            <Border as={FadeIn} />
            <ul
              role="list"
              className="grid grid-cols-2 gap-x-8 gap-y-12 sm:grid-cols-3 lg:grid-cols-4"
            >
              {clients.map(([client, logo]) => (
                <li key={client} className="group">
                  <FadeIn className="overflow-hidden">
                    <Border className="pt-12 group-[&:nth-child(-n+2)]:-mt-px sm:group-[&:nth-child(3)]:-mt-px lg:group-[&:nth-child(4)]:-mt-px">
                      <img
                        alt={client}
                        src={logo}
                        className="w-36 h-12 object-contain aspect-auto"
                      />
                    </Border>
                  </FadeIn>
                </li>
              ))}
            </ul>
          </FadeInStagger>
        </div>
      </div>
    );
  }

  return (
    <Layout {...layoutProps}>
      <div className="container margin-vert--lg">
        <div className="row mt-10">
          <main
            className={clsx(
              `col mx-auto ${
                isOurWorkPage || isBlogPage ? "col--11" : "col--9"
              }`
            )}
          >
            {isBlogPage && (
              <h1 className="text-black dark:text-white z-10 text-pretty">
                The Betalectic Blogs
              </h1>
            )}

            {isBlogPage && (
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
                          {featuredPost?.content.metadata.authors.length >
                            0 && (
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
            )}

            {isOurWorkPage && (
              <>
                <PageIntro
                  eyebrow="Our work"
                  title="Proven solutions for real-world problems."
                >
                  <p>
                    We believe in efficiency and maximizing our resources to
                    provide the best value to our clients. The primary way we do
                    that is by re-using the same five projects we’ve been
                    developing for the past decade.
                  </p>
                </PageIntro>
                <div className="mt-10 space-y-20 sm:space-y-24 lg:space-y-32">
                  {children}
                </div>
                <Testimonial className="mt-24 sm:mt-32 lg:mt-40">
                  We approached because we loved their past work. They delivered
                  something remarkably similar in record time.
                </Testimonial>
                <Clients />
                <ContactSection />
              </>
            )}
          </main>

          {toc && <div className="col col--2">{toc}</div>}
        </div>
      </div>
    </Layout>
  );
}
