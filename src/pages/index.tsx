import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import InstallField from '@site/src/components/InstallField'
import Heading from '@theme/Heading'
import Layout from '@theme/Layout'
import { BookOpenIcon, Gamepad2Icon } from 'lucide-react'
import ButtonLink from '../components/ButtonLink'
import HomepageFeatures from '../components/HomepageFeatures'
import { DEMO_URL, SITE_TITLE } from '../constants/site'

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext()
  return (
    <header className="relative overflow-hidden px-6 py-6 text-center md:py-8">
      <div className="container">
        <img
          src="/img/logo.svg"
          alt={`${SITE_TITLE} Logo`}
          className="h-32 w-32 mt-4"
        />

        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>

        <p className="hero__subtitle">{siteConfig.tagline}</p>

        <InstallField />

        <div className="flex flex-row items-center justify-center gap-4 pt-4">
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
      </main>
    </Layout>
  )
}
