import type { GetStaticPaths, GetStaticProps, NextPage } from "next";

import Layout from "~/components/Layout";
import TextLink from "~/components/TextLink";
import { type Collection, collections } from "~/content/collections";

type CollectionPageProps = {
  collection: Collection;
};

type CollectionPageParams = {
  collection: string;
};

/**
 * Builds one static path per collection in the registry.
 *
 * @returns A path for each collection slug, with unknown slugs served as 404.
 */
export const getStaticPaths: GetStaticPaths<CollectionPageParams> = () => ({
  paths: collections.map((collection) => ({
    params: { collection: collection.slug },
  })),
  fallback: false,
});

/**
 * Loads the collection that matches the route slug.
 *
 * @param params Route params holding the collection slug.
 * @returns The matching collection as page props, or a 404.
 */
export const getStaticProps: GetStaticProps<
  CollectionPageProps,
  CollectionPageParams
> = ({ params }) => {
  const collection = collections.find(
    (candidate) => candidate.slug === params?.collection,
  );

  if (!collection) {
    return { notFound: true };
  }

  return { props: { collection } };
};

/**
 * Lists every item in one collection with its link and description.
 *
 * @param collection Collection to render.
 * @returns The collection page.
 */
const CollectionPage: NextPage<CollectionPageProps> = ({ collection }) => {
  return (
    <Layout title={collection.title}>
      <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">
        {collection.title}
      </h1>

      <p className="mt-8 leading-relaxed text-neutral-600 dark:text-neutral-400">
        {collection.intro}
      </p>

      <ul className="mt-8 space-y-6">
        {collection.items.map((item) => (
          <li key={item.url} className="leading-relaxed">
            <TextLink href={item.url}>{item.name}</TextLink>
            <p className="mt-1 text-neutral-600 dark:text-neutral-400">
              {item.description}
            </p>
          </li>
        ))}
      </ul>
    </Layout>
  );
};

export default CollectionPage;
