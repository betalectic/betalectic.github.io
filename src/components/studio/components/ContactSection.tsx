import { Button } from "./Button";
import { Container } from "./Container";
import { FadeIn } from "./FadeIn";
import { Offices } from "./Offices";

export function ContactSection() {
  return (
    <Container className="w-full mt-24 sm:mt-32 lg:mt-40">
      <FadeIn className="-mx-6 rounded-4xl bg-neutral-950 px-6 py-20 sm:mx-0 sm:py-32 md:px-12">
        <div className="mx-auto max-w-4xl">
          <div className="max-w-xl">
            <h2 className="font-display text-3xl font-medium text-white [text-wrap:balance] sm:text-4xl">
              Tell us about your project
            </h2>
            <div className="mt-6 flex">
              <Button
                invert={true}
                className="bg-white text-black hover:bg-neutral-300"
                href="https://cal.com/manasa-madapu"
              >
                Setup a 30 min free call
              </Button>
            </div>
            <div className="mt-10 border-t border-white/10 pt-10">
              <h3 className="font-display text-base font-semibold text-white">
                Our offices
              </h3>
              <Offices
                invert
                className="mt-6 grid p-0 grid-cols-1 gap-8 sm:grid-cols-2"
              />
            </div>
          </div>
        </div>
      </FadeIn>
    </Container>
  );
}
