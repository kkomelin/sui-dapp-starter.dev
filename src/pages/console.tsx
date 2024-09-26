import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import Layout from '@theme/Layout'
import CommandSearch from '../components/console/CommandSearch'

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext()

  return (
    <Layout
      // title={siteConfig.title}
      description={siteConfig.tagline}
    >
      <main className="mx-auto my-16 max-w-lg w-full">
        <CommandSearch />
      </main>
    </Layout>
  )
}
