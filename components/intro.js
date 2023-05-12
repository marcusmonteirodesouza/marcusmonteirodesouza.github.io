import { LINKEDIN_URL } from "../lib/constants";

export default function Intro() {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
        Cloud Marcus
      </h1>
      <h4 className="text-center md:text-left text-lg mt-5 md:pl-8">
        Content for Software Developers, Cloud Architects and Cloud Engineers by{" "}
        <a
          className="underline hover:text-success duration-200 transition-colors"
          href={LINKEDIN_URL}
          target="_blank"
        >
          Marcus Vinicius Monteiro de Souza
        </a>
        .
      </h4>
    </section>
  );
}
