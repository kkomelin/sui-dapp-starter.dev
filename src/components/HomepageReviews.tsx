import c from 'clsx'
import { ReactNode } from 'react'

interface IReview {
  name: string
  description: ReactNode
  order?: number
}

const reviews: IReview[] = [
  {
    name: '@Erarnitox',
    description: <>Thank your for providing this for us! And even for free!</>,
  },
  {
    name: '@pinebit',
    description: <>Everything is quite professionally done. Respect!</>,
  },
]

function Review({ name, description, order }: IReview) {
  return (
    <div
      className={c(
        'flex flex-col gap-2 rounded-lg border border-solid border-blue-500 p-5 sm:flex-row',
        `sm:ml-${order * 4}`
      )}
    >
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
        {reviews.map(({ name, description }, index) => (
          <Review
            key={name}
            name={name}
            description={description}
            order={index}
          />
        ))}
      </div>
    </section>
  )
}
