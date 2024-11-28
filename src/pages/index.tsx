import type { NextPage } from "next";
import { Container } from "~/core/components";
import { GithubRepo, PageProperties } from "~/core/types";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillMail,
  AiOutlineFork,
  AiOutlineStar,
} from "react-icons/ai";
import { getDatabase } from "~/core/lib/notion";
import { HiOutlineExternalLink } from "react-icons/hi";
import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import Link from "next/link";
import { sections } from "~/lib/config";
import { it } from "node:test";

type PageProps = { projects: GithubRepo[]; posts: PageProperties[] };

const Home: NextPage<PageProps> = ({ projects = [], posts = [] }) => {
  return (
    <AnimatePresence mode="wait">
      <div className={"flex flex-col lg:flex-row w-screen max-w-[90rem]"}>
        <motion.div
          key={"left"}
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5 }}
          transition={{ ease: "easeInOut", duration: 0.5, delay: 0.25 }}
          className={
            "lg:fixed lg:max-w-md xl:max-w-xl mt-6 p-6 lg:p-0 lg:py-24 lg:pl-24 lg:pr-0"
          }
        >
          <h1 className="font-bold text-4xl md:text-5xl">Jonathan Cruz</h1>
          <h2 className="font-thin text-2xl md:text-3xl">
            Quantum Computing Researcher
          </h2>
          <motion.div
            key={"about"}
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5 }}
            transition={{ ease: "easeInOut", duration: 0.5, delay: 0.5 }}
            className={
              "mt-6 space-y-3 text-sm leading-loose dark:text-gray-400"
            }
          >
            <p>
              Fifth year BS/MS student in Software Engineering and Computer
              Science at{" "}
              <a
                className={"dark:text-white underline"}
                href={"https://www.rit.edu/"}
                rel={"noreferrer"}
                target={"_blank"}
              >
                Rochester Institute of Technology
              </a>
              .
            </p>
          </motion.div>
          <motion.div
            key={"externals"}
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5 }}
            transition={{ ease: "easeInOut", duration: 0.5, delay: 0.75 }}
            className={"mt-12 flex flex-wrap items-center gap-x-9"}
          >
            <a
              className={"text-sm flex items-center"}
              href={"https://github.com/notcruz"}
              rel={"noreferrer"}
              target={"_blank"}
            >
              <span>
                <AiFillGithub />
              </span>
              <span className={"mx-2"}>Github</span>
              <span>
                <HiOutlineExternalLink />
              </span>
            </a>
            <a
              className={"text-sm flex items-center"}
              href={"https://www.linkedin.com/in/notjoncruz/"}
              rel={"noreferrer"}
              target={"_blank"}
            >
              <span>
                <AiFillLinkedin />
              </span>
              <span className={"mx-2"}>LinkedIn</span>
              <span>
                <HiOutlineExternalLink />
              </span>
            </a>
            <a
              className={"text-sm flex items-center"}
              href={"mailto:cruz@notjon.dev"}
              rel={"noreferrer"}
              target={"_blank"}
            >
              <span>
                <AiFillMail />
              </span>
              <span className={"mx-2"}>Email</span>
              <span>
                <HiOutlineExternalLink />
              </span>
            </a>
          </motion.div>
        </motion.div>
        <motion.div
          key={"right"}
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5 }}
          transition={{ ease: "easeInOut", duration: 0.5, delay: 1.0 }}
          className={
            "w-full lg:max-w-xl xl:max-w-3xl lg:ml-auto p-6 lg:p-0 lg:py-24 lg:pr-24 xl:pl-24 space-y-12"
          }
        >
          {sections.map((section) => {
            return (
              <div key={section?.title} className={"space-y-3"}>
                <h3 className="font-bold text-3xl md:text-4xl mb-6">
                  {section?.title}
                </h3>
                {section?.items?.map((item) => {
                  return (
                    <Container
                      key={item.body.one}
                      color={section.color}
                      header={item.header}
                      body={item.body}
                      externals={item.externals}
                    />
                  );
                })}
              </div>
            );
          })}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default Home;
