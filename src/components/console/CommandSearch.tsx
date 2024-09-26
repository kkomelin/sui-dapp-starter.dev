import fuzzysort from 'fuzzysort'
import { FC, useEffect, useState } from 'react'

interface IConsoleCommand {
  name: string
  description: string
}

const commands: IConsoleCommand[] = [
  {
    name: 'frontend:deploy:walrus',
    description: 'Deploy to Walrus',
  },
  {
    name: 'frontend:deploy:firebase',
    description: 'Deploy to Firebase',
  },
]

const CommandSearch: FC = () => {
  const [foundCommands, setFoundCommands] = useState<IConsoleCommand[]>([])

  const handleSearch = (input: string) => {
    const results = fuzzysort.go(input, commands, {
      threshold: 0.5,
      all: true,
      keys: ['name', 'description'],
    })

    setFoundCommands(results.map((result) => result.obj))
  }

  useEffect(() => {
    handleSearch('')
  }, [])

  return (
    <div className='w-full'>
      <input
        type="text"
        placeholder="Search for a command..."
        onChange={(e) => handleSearch(e.target.value)}
        className='my-2 px-3 py-2 rounded w-full'
      />

      {foundCommands.map(({ name, description }) => (
        <div
          className="flex flex-row items-center justify-between gap-2"
          key={name}
        >
          <div>{name}</div>
          <div>{description}</div>
        </div>
      ))}
    </div>
  )
}

export default CommandSearch
