import jsonCommands from '../constants/commands.json'

export const getCommands = () => {
  const describedCommands = describeCommands(jsonCommands)

  return Object.keys(describedCommands).map((key) => {
    return {
      name: key,
      desc: describedCommands[key],
    }
  })
}

const describeCommands = (jsonCommands: object) => {
  const describedCommands = { ...jsonCommands }

  Object.keys(describedCommands).forEach((key) => {
    const value = describedCommands[key]

    const subcommands = value.split('&&').map((a) => {
      const b = a.trim()
      if (b.search('--filter') !== -1) {
        return b
      }
      return b.replace('pnpm ', '')
    })

    const description = subcommands
      .map((c) => (describedCommands?.[c] == null ? c : describedCommands[c]))
      .join(', ')

    describedCommands[key] = description
  })

  return describedCommands
}
