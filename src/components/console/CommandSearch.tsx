import { IConsoleCommand } from '@site/src/types/IConsoleCommand'
import { getCommands } from '@site/src/utils/commands'
import fuzzysort from 'fuzzysort'
import { FC, useEffect, useState } from 'react'

const formattedCommands = getCommands()

const CommandSearch: FC = () => {
  const [foundCommands, setFoundCommands] = useState<IConsoleCommand[]>([])

  const handleSearch = (input: string) => {
    const results = fuzzysort.go(input, formattedCommands, {
      threshold: 0.5,
      all: true,
      keys: ['name', 'desc'],
    })

    setFoundCommands(results.map((result) => result.obj))
  }

  useEffect(() => {
    handleSearch('')
  }, [])

  return (
    <div className="w-full">
      <input
        type="text"
        placeholder="Search for a command..."
        onChange={(e) => handleSearch(e.target.value)}
        className="mb-6 w-full rounded1 px-3 py-2"
      />

      <div className="flex flex-col items-start justify-center">
        {foundCommands.map(({ name, desc }) => (
          <div
            className="flex w-full flex-col border-b-0 border-l border-r border-t border-solid border-gray-400 px-2 py-1 last:!border-b sm:flex-row sm:items-center sm:gap-2"
            key={name}
          >
            <div className="text-primary min-w-80 font-bold">{name}</div>
            <div className="border-b-0 border-l-0 border-r-0 border-t-0 border-solid border-gray-400 pl-2 italic text-gray-700 sm:border-l">
              {desc}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CommandSearch
