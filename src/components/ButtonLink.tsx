import Link from '@docusaurus/Link'
import c from 'clsx'
import { FC, PropsWithChildren } from 'react'

interface IButtonLink {
  to: string
  className?: string
  [key: string]: any
}
const ButtonLink: FC<PropsWithChildren<IButtonLink>> = (props) => {
  const { to, children, className, ...rest } = props

  return (
    <Link
      className={c(
        'shadow-light-3 hover:shadow-light-2 focus:shadow-light-2 active:shadow-light-2 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong flex flex-row items-center justify-center gap-2 rounded bg-neutral-100 px-6 py-3 text-base font-medium uppercase leading-normal !text-neutral-600 no-underline transition duration-150 ease-in-out hover:bg-neutral-200 hover:no-underline focus:bg-neutral-200 focus:outline-none focus:ring-0 active:bg-neutral-200 motion-reduce:transition-none dark:shadow-black/30',
        className
      )}
      to={to}
      {...rest}
    >
      {children}
    </Link>
  )
}

export default ButtonLink
