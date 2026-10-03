import type { NextPage } from "next";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

import IconLink from "~/components/IconLink";
import Layout from "~/components/Layout";
import TextLink from "~/components/TextLink";

/**
 * Home page with a short bio and contact links.
 *
 * @returns The home page.
 */
const Home: NextPage = () => {
  return (
    <Layout>
      <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">
        Jonathan Cruz
      </h1>

      <div className="mt-8 space-y-4 leading-relaxed text-neutral-600 dark:text-neutral-400">
        <p>
          I work at <TextLink href="https://www.amazon.com/">Amazon</TextLink>,
          building agentic solutions to improve its catalog. I interned there
          three times before joining full-time, and once at{" "}
          <TextLink href="https://www.fujifilm.com/">Fujifilm</TextLink>.
        </p>

        <p>
          I studied software engineering at{" "}
          <TextLink href="https://www.rit.edu/">RIT</TextLink> with a minor in
          quantum computing. During my time there, I conducted research on
          optimizing quantum simulations and routing algorithms to improve
          circuit transpilation.
        </p>

        <p>
          Outside of work, I like to run, snowboard, hike, grow closer to God,
          or tinker on a side project.
        </p>
      </div>

      <div className="mt-12 flex items-center gap-5">
        <IconLink
          href="https://github.com/notjoncruz"
          label="GitHub"
          icon={FiGithub}
        />
        <IconLink
          href="https://www.linkedin.com/in/notjoncruz/"
          label="LinkedIn"
          icon={FiLinkedin}
        />
        <IconLink href="mailto:cruz@notjon.dev" label="Email" icon={FiMail} />
      </div>
    </Layout>
  );
};

export default Home;
