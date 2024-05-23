import Link from '@docusaurus/Link'
import c from 'clsx'
import { FC, PropsWithChildren } from 'react'

interface IButtonLink {
  color: 'primary' | 'secondary'
  to: string
  className?: string
  [key: string]: any
}
const ButtonLink: FC<PropsWithChildren<IButtonLink>> = (props) => {
  const { color = 'primary', to, children, className, ...rest } = props

  return (
    <Link
      className={c(
        'tracking-2 inline-flex cursor-pointer items-center justify-center gap-2 rounded-lg px-4 py-2 text-center text-base font-medium !no-underline shadow shadow-inner',
        { 'bg-blue-600 !text-white hover:bg-blue-700': color === 'primary' },
        {
          'border border-solid border-blue-600 bg-white !text-blue-600 hover:border-blue-700 hover:text-blue-700 focus:border-blue-700 focus:text-blue-700':
            color === 'secondary',
        },
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

