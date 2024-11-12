import Link from "@docusaurus/Link";
import Layout from "@theme/Layout";
import { useId } from "react";
import { PageIntro } from "../components/studio/components/PageIntro";
import { Container } from "../components/studio/components/Container";
import { FadeIn } from "../components/studio/components/FadeIn";
import { Button } from "../components/studio/components/Button";
import { Border } from "../components/studio/components/Border";
import { Offices } from "../components/studio/components/Offices";
import { SocialMedia } from "../components/studio/components/SocialMedia";
import { motion, MotionConfig, useReducedMotion } from "framer-motion";
import { ShimmerButton } from "../components/magicui/shimmer-button";
import { GridPattern } from "../components/studio/components/GridPattern";

export default function Contact() {
  let shouldReduceMotion = useReducedMotion();

  function TextInput({
    label,
    ...props
  }: React.ComponentPropsWithoutRef<"input"> & { label: string }) {
    let id = useId();

    return (
      <div className="group relative z-0 transition-all focus-within:z-10">
        <input
          type="text"
          id={id}
          {...props}
          placeholder=" "
          required
          className="peer block w-full border border-neutral-300 dark:border-neutral-600 bg-transparent px-6 pb-4 pt-12 text-base/6 text-neutral-950 dark:text-neutral-50 ring-4 ring-transparent transition focus:border-neutral-950 dark:focus:border-neutral-50 focus:outline-none focus:ring-neutral-950/5 dark:focus:ring-neutral-50/5 group-first:rounded-t-2xl group-last:rounded-b-2xl"
        />
        <label
          htmlFor={id}
          className="pointer-events-none absolute left-6 top-1/2 -mt-3 origin-left text-base/6 text-neutral-500 dark:text-neutral-400 transition-all duration-200 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:font-semibold peer-focus:text-neutral-950 dark:peer-focus:text-neutral-50 peer-[:not(:placeholder-shown)]:-translate-y-4 peer-[:not(:placeholder-shown)]:scale-75 peer-[:not(:placeholder-shown)]:font-semibold peer-[:not(:placeholder-shown)]:text-neutral-950 dark:peer-[:not(:placeholder-shown)]:text-neutral-50"
        >
          {label}
        </label>
      </div>
    );
  }
  function RadioInput({
    label,
    ...props
  }: React.ComponentPropsWithoutRef<"input"> & { label: string }) {
    return (
      <label className="flex gap-x-3">
        <input
          type="radio"
          {...props}
          className="h-6 w-6 flex-none appearance-none rounded-full border border-neutral-950/20 dark:border-neutral-50 outline-none checked:border-[0.5rem] checked:border-neutral-950 focus-visible:ring-1 focus-visible:ring-neutral-950 focus-visible:ring-offset-2"
        />
        <span className="text-base/6 text-neutral-950 dark:text-neutral-50">
          {label}
        </span>
      </label>
    );
  }
  function ContactForm() {
    return (
      <FadeIn className="lg:order-last">
        <form>
          <h2 className="font-display text-base font-semibold text-neutral-950 dark:text-neutral-50">
            Work inquiries
          </h2>
          <div className="isolate mt-6 -space-y-px rounded-2xl bg-white/50 dark:bg-black/50">
            <TextInput label="Name" name="name" autoComplete="name" />
            <TextInput
              label="Email"
              type="email"
              name="email"
              autoComplete="email"
            />
            <TextInput
              label="Company"
              name="company"
              autoComplete="organization"
            />
            <TextInput
              label="Phone"
              type="tel"
              name="phone"
              autoComplete="tel"
            />
            <TextInput label="Message" name="message" />
            <div className="border border-neutral-300 dark:border-neutral-600 px-6 py-8 first:rounded-t-2xl last:rounded-b-2xl">
              <fieldset>
                <legend className="text-base/6 text-neutral-500 dark:text-neutral-400">
                  Budget
                </legend>
                <div className="mt-6 grid grid-cols-1 gap-8 sm:grid-cols-2">
                  <RadioInput label="$25K – $50K" name="budget" value="25" />
                  <RadioInput label="$50K – $100K" name="budget" value="50" />
                  <RadioInput label="$100K – $150K" name="budget" value="100" />
                  <RadioInput
                    label="More than $150K"
                    name="budget"
                    value="150"
                  />
                </div>
              </fieldset>
            </div>
          </div>
          <Button
            type="submit"
            invert={true}
            className="mt-10 hover:bg-neutral-600"
          >
            Let’s work together
          </Button>
        </form>
      </FadeIn>
    );
  }

  function ContactDetails() {
    return (
      <FadeIn>
        <h2 className="font-display text-base font-semibold text-neutral-950 dark:text-neutral-50">
          Our offices
        </h2>
        <p className="mt-6 text-base text-neutral-600 dark:text-neutral-400">
          Prefer doing things in person? We'd love to meet you.
        </p>

        <Offices className="mt-10 grid grid-cols-1 p-0 gap-8 sm:grid-cols-2" />

        <Border className="mt-16 pt-16">
          <h2 className="font-display text-base font-semibold text-neutral-950 dark:text-neutral-50">
            Email us
          </h2>
          <dl className="mt-6 grid grid-cols-1 gap-8 text-sm sm:grid-cols-2">
            {[["Contact", "contact@betalectic.com"]].map(([label, email]) => (
              <div key={email}>
                <dt className="font-semibold text-neutral-950 dark:text-neutral-50">
                  {label}
                </dt>
                <dd>
                  <Link
                    href={`mailto:${email}`}
                    className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-950"
                  >
                    {email}
                  </Link>
                </dd>
              </div>
            ))}
          </dl>
        </Border>

        <Border className="mt-16 pt-16">
          <h2 className="font-display text-base font-semibold text-neutral-950 dark:text-neutral-50">
            Follow us
          </h2>
          <SocialMedia className="mt-6" />
        </Border>
      </FadeIn>
    );
  }

  return (
    <Layout
      title="Contact Betalectic for Your Technology Needs"
      description="Connect with Betalectic for all your technology needs and digital transformation goals. We specialise in helping startups and businesses build Minimum Viable Products (MVPs) quickly and effectively, enabling faster market entry and growth. Reach out to learn how we can support your journey."
    >
      <MotionConfig
        transition={shouldReduceMotion ? { duration: 0 } : undefined}
      >
        <motion.div layout className="relative isolate flex w-full flex-col">
          <motion.div layout className="relative isolate flex w-full flex-col">
            <GridPattern
              className="absolute inset-x-0 -top-24 -z-10 h-[1000px] w-full fill-neutral-50  stroke-neutral-950/5 [mask-image:linear-gradient(to_bottom_left,white_40%,transparent_50%)]"
              yOffset={-96}
              interactive
            />

            <div className="w-full mx-auto">
              <PageIntro eyebrow="Contact us" title="Let’s work together">
                <p>We can’t wait to hear from you.</p>
                <Link to="https://cal.com/manasa-madapu">
                  <ShimmerButton className="shadow-2xl">
                    <span className="whitespace-pre-wrap text-center text-xl font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-2xl">
                      Setup a 30 min free call
                    </span>
                  </ShimmerButton>
                </Link>
              </PageIntro>
              <Container className="mt-24 sm:mt-32">
                <div className="grid grid-cols-1 gap-x-8 gap-y-24 lg:grid-cols-2">
                  {/* <ContactForm /> */}
                  <ContactDetails />
                  {/* Tally Form */}
                  <div className="lg:ml-auto flex lg:justify-start">
                    <iframe
                      src="https://tally.so/embed/nPB6RB?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
                      className=" dark:filter dark:invert dark:brightness-90"
                      width="500"
                      height="600"
                    >
                      Loading..
                    </iframe>
                  </div>
                </div>
              </Container>
            </div>
          </motion.div>
        </motion.div>
      </MotionConfig>
    </Layout>
  );
}
