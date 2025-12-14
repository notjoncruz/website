import { motion } from "framer-motion";
import type { NextPage } from "next";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

const Home: NextPage = () => {
  return (
    <motion.main
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-xl mx-auto px-6 py-16 md:py-24"
    >
      <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">
        Jonathan Cruz
      </h1>

      <div className="mt-8 space-y-4 text-neutral-600 dark:text-neutral-400 leading-relaxed">
        <p>
          I work at{" "}
          <a
            href="https://www.amazon.com/"
            target="_blank"
            rel="noreferrer"
            className="text-neutral-900 dark:text-neutral-100 underline underline-offset-2 decoration-neutral-300 dark:decoration-neutral-600 hover:decoration-neutral-500 dark:hover:decoration-neutral-400 transition-colors"
          >
            Amazon
          </a>
          , building agentic solutions to improve its catalog. I interned there
          three times before joining full-time, and once at{" "}
          <a
            href="https://www.fujifilm.com/"
            target="_blank"
            rel="noreferrer"
            className="text-neutral-900 dark:text-neutral-100 underline underline-offset-2 decoration-neutral-300 dark:decoration-neutral-600 hover:decoration-neutral-500 dark:hover:decoration-neutral-400 transition-colors"
          >
            Fujifilm
          </a>
          .
        </p>

        <p>
          I studied software engineering at{" "}
          <a
            href="https://www.rit.edu/"
            target="_blank"
            rel="noreferrer"
            className="text-neutral-900 dark:text-neutral-100 underline underline-offset-2 decoration-neutral-300 dark:decoration-neutral-600 hover:decoration-neutral-500 dark:hover:decoration-neutral-400 transition-colors"
          >
            RIT
          </a>{" "}
          with a minor in quantum computing. During my time there, I conducted
          research on optimizing quantum simulations and routing algorithms to
          improve circuit transpilation.
        </p>

        <p>
          Outside of work, I like to run, snowboard, hike, grow closer to God,
          or tinker on a side project.
        </p>
      </div>

      <div className="mt-12 flex items-center gap-5">
        <a
          href="https://github.com/notjoncruz"
          target="_blank"
          rel="noreferrer"
          className="p-2 -m-2 text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
          aria-label="GitHub"
        >
          <FiGithub className="w-5 h-5" />
        </a>
        <a
          href="https://www.linkedin.com/in/notjoncruz/"
          target="_blank"
          rel="noreferrer"
          className="p-2 -m-2 text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
          aria-label="LinkedIn"
        >
          <FiLinkedin className="w-5 h-5" />
        </a>
        <a
          href="mailto:cruz@notjon.dev"
          className="p-2 -m-2 text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
          aria-label="Email"
        >
          <FiMail className="w-5 h-5" />
        </a>
      </div>
    </motion.main>
  );
};

export default Home;
