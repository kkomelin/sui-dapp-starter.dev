import { ReactNode } from 'react'

interface IFeature {
  title: string
  description: ReactNode
}

const features: IFeature[] = [
  {
    title: 'Focus on What Matters',
    description: (
      <>
        Sui dApp Starter lets you{' '}
        <b>focus on your business logic from day one</b> instead of developing
        the app skeleton for weeks.
      </>
    ),
  },
  {
    title: 'Truly Full-Stack',
    description: (
      <>
        Sui dApp Starter is a <b>monorepo</b>, powered by <b>pnpm workspaces</b>
        , where frontend and backend are integrated with each other through
        console scripts.
      </>
    ),
  },
  {
    title: 'DX First',
    description: (
      <>
        Designed with developer experience in mind, Sui dApp Starter provides
        necessary tooling to{' '}
        <b>work with networks, build, test, lint, format and deploy</b>.
      </>
    ),
  },
  {
    title: 'Decentralized',
    description: (
      <>
        Client-side React as a foundation for the frontend part lets you{' '}
        <b>host it in a decentralized manner</b>.
      </>
    ),
  },
  {
    title: 'Local Block Explorer',
    description: (
      <>
        Sui dApp Starter seamlessly integrates with Local Sui Explorer, which{' '}
        <b>lets you check your local transaction data</b> during development.
      </>
    ),
  },
  {
    title: 'Common Sui Components',
    description: (
      <>
        The <b>NetworkType, Balance, Faucet and other components</b> are
        included so you don't have to reinvent the wheel.
      </>
    ),
  },
  {
    title: 'Custom Sui Hooks',
    description: (
      <>
        The <b>useNetworkType, useBalance, useFaucet, useTransact</b> hooks
        encapsulate routine tasks, allowing you to develop quicker.
      </>
    ),
  },
  {
    title: 'Learn by Example',
    description: (
      <>
        The starter includes an{' '}
        <b>example Move package, utilizing on-chain randomness</b>, and a{' '}
        <b>frontend client for it</b>, so you have a solid platform to jump
        from.
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
