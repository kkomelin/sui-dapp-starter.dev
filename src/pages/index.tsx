import Link from '@docusaurus/Link'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import InstallField from '@site/src/components/InstallField'
import Heading from '@theme/Heading'
import Layout from '@theme/Layout'
import clsx from 'clsx'
import { DEMO_URL, SITE_TITLE } from '../constants/site'
import styles from './index.module.css'

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext()
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <img
          src="/img/logo.svg"
          className="h-28 w-28"
          alt={`${SITE_TITLE} Logo`}
        />
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>

        <InstallField />

        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to={DEMO_URL}
            target="_blank"
            id="demo-button"
            data-umami-event="Demo button"
          >
            Demo
          </Link>
          {/* <Link
            className="button button--secondary button--lg"
            to="/docs/intro"
          >
            Tutorial - 5min ⏱️
          </Link> */}
        </div>
      </div>
    </header>
  )
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext()
  return (
    <Layout
      // title={siteConfig.tagline}
      description={siteConfig.tagline}
    >
      <HomepageHeader />
      <main>
        {/* <HomepageFeatures /> */}
        <div
          style={{ textAlign: 'center', padding: '10rem', fontWeight: 'bold' }}
        >
          Under Construction
        </div>
      </main>
    </Layout>
  )
}
