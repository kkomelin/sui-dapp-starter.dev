import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import InstallField from '@site/src/components/InstallField'
import Heading from '@theme/Heading'
import Layout from '@theme/Layout'
import clsx from 'clsx'
import { BookOpenIcon, Gamepad2Icon } from 'lucide-react'
import ButtonLink from '../components/ButtonLink'
import { DEMO_URL } from '../constants/site'
import styles from './index.module.css'
import './src/index'

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext()
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>

        <p className="hero__subtitle">{siteConfig.tagline}</p>

        <InstallField />

        <div className="flex flex-row items-center justify-center gap-3">
          <ButtonLink
            to={DEMO_URL}
            target="_blank"
            id="demo-button"
            data-umami-event="Demo button"
            className="!text-blue-500"
          >
            Demo <Gamepad2Icon className="h-4 w-4" />
          </ButtonLink>

          <ButtonLink to="/docs">
            Docs <BookOpenIcon className="h-4 w-4" />
          </ButtonLink>
        </div>
      </div>
    </header>
  )
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext()
  return (
    <Layout
      // title={siteConfig.title}
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
