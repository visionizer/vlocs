import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: 'Beginner Friendly',
    imageUrl: 'img/undraw_docusaurus_mountain.svg',
    description: (
      <>
        We try to make our documentation readable for everyone, of every skill-level. V is supposed to be simple, after all and it will not be simple if the documentation isn't.
      </>
    ),
  },
  {
    title: 'Learn everything important',
    imageUrl: 'img/undraw_docusaurus_tree.svg',
    description: (
      <>
        Here you can learn how to code in V. Which Keywords are there? Are there classes? What types are there? What are functions?
      </>
    ),
  },
  {
    title: 'Research Standard Libraries',
    imageUrl: 'img/undraw_docusaurus_react.svg',
    description: (
      <>
        You can easily research everything about standard libraries here. Which library should I use? What functions do they have?
      </>
    ),
  },
];

function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`V's unofficial documentation`}
      description="Vlocs: V's (unoffical) documentation. V's current docs aren't very good, which is why I created this site.">
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={clsx(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('docs/')}>
              Read the docs
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
