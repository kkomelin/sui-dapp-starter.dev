import { ReactNode } from 'react'

interface IFeature {
  title: string
  description: ReactNode
}

const features: IFeature[] = [
  {
    title: 'Developer Experience First',
    description: (
      <>
        Docusaurus was designed from the ground up to be easily installed and
        used to get your website up and running quickly.
      </>
    ),
  },
  {
    title: 'Focus on What Matters',
    description: (
      <>
        Docusaurus lets you focus on your docs, and we&apos;ll do the chores. Go
        ahead and move your docs into the <code>docs</code> directory.
      </>
    ),
  },
  {
    title: 'Powered by React',
    description: (
      <>
        Extend or customize your website layout by reusing React. Docusaurus can
        be extended while reusing the same header and footer.
      </>
    ),
  },
  {
    title: '(todo: add links) Custom Components',
    description: (
      <>
        NetworkType, Balance, Faucet, CustomConnectButton
      </>
    ),
  },
  {
    title: '(todo: add links) Custom Hooks',
    description: (
      <>
        useNetworkType, useBalance, useFaucet, useTransact
      </>
    ),
  },
]

function Feature({ title, description }: IFeature) {
  return (
    <div className="rounded-lg border border-solid border-blue-500 p-5">
      <h3>{title}</h3>
      <div>{description}</div>
    </div>
  )
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className="grid w-full md:grid-cols-4 gap-8 p-8 max-w-6xl mx-auto mb-12 mt-4">
      {features.map(({ title, description }) => (
        <Feature key={title} title={title} description={description} />
      ))}
    </section>
  )
}
