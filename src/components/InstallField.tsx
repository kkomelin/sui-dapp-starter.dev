import c from 'clsx'
import { CheckIcon, CopyIcon } from 'lucide-react'
import { useState } from 'react'
import { INSTALL_COMMAND } from '../constants/misc'

const InstallField = () => {
  const [isClicked, setIsClicked] = useState<boolean>(false)

  const handleCopyToClipboard = () => {
    navigator.clipboard.writeText(INSTALL_COMMAND)
    // @ts-expect-error Undefined umami
    window.umami?.track('Copy-to-clipboard control')
    setIsClicked(true)
    setTimeout(() => {
      setIsClicked(false)
    }, 1000)
  }

  return (
    <div
      className="my-6 flex flex-row items-center justify-center gap-1 border border-blue-300 border-solid max-w-min rounded-lg mx-auto pr-1"
      onClick={handleCopyToClipboard}
    >
      <input
        type="text"
        readOnly={true}
        className="rounded-lg border-none py-2 pl-4 pr-8 text-lg text-gray-600 outline-none dark:text-gray-100 w-[290px]"
        value={INSTALL_COMMAND}
      />
      <button
        className="-ml-10 flex cursor-pointer flex-col items-center justify-center border-none bg-transparent p-2 outline-none "
        onClick={handleCopyToClipboard}
      >
        <CopyIcon
          className={c('h-4 w-4 text-blue-600 dark:text-blue-100', {
            hidden: isClicked,
          })}
        />
        <CheckIcon
          className={c('h-4 w-4 text-blue-600 dark:text-blue-100', {
            'hidden': !isClicked,
          })}
        />
      </button>
    </div>
  )
}

export default InstallField
