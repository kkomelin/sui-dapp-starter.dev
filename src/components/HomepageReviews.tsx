import { ReactNode } from 'react'

interface IReview {
  name: string
  description: ReactNode
}

const reviews: IReview[] = [
  {
    name: '@Xenon',
    description: (
      <>
        Excellent starter package for hackathons, you can jump right in and
        start building your idea from something that works and not from zero.
        Thanks!
      </>
    ),
  },
  {
    name: '@Erarnitox',
    description: <>Thank your for providing this for us! And even for free!</>,
  },
  {
    name: '@pinebit',
    description: <>Everything is quite professionally done. Respect!</>,
  },
]

function Review({ name, description }: IReview) {
  return (
    <div className="flex flex-col gap-2 rounded-lg border border-solid border-blue-500 p-5 even:items-end">
      <b>{name}</b>
      <div className="">{description}</div>
    </div>
  )
}

export default function HomepageReviews(): JSX.Element {
  return (
    <section className="mx-auto mb-16 mt-6 flex w-full max-w-6xl flex-col gap-10 p-8">
      <h2 className="text-center text-3xl">What People Think</h2>
      <div className="mx-auto flex max-w-xl flex-col gap-8">
        {reviews.map(({ name, description }) => (
          <Review key={name} name={name} description={description} />
        ))}
      </div>
    </section>
  )
}
