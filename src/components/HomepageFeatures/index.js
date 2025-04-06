import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Community Built',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        All apis are directly from the game and are not modified.
        but fully documented and ready to use by the community.
      </>
    ),
  },
  {
    title: 'Support the docs',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        You can either support directly by committing to the docs repo or by
        donating to the creator of the docs.

        Sending gold, Heros or using the ref "jax" is a huge help!
        <br />
        <br />
        Wallet address:
        <span className="wallet-address">RPGCo69fqmYwdh48DXLYt5CGfAG5vpWvLeuEhefdgXb</span>
      </>
    ),
  },
  {
    title: 'Used by analytics tools',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        This docs is currently used by
        <a href="https://nightvale-analytics.vercel.app">
          Nightvale Analytics
        </a>
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
