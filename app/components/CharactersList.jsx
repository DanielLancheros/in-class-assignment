import CharacterCard from "./CharacterCard"

async function getCharacters () {
  const response = await fetch ("https://api.sampleapis.com/futurama/characters")
  return response.json()
}

export default async function CharacterList () {
  const allCharacters = await getCharacters()
  return(
    <>
    {allCharacters.map(character => (
      <CharacterCard character={character} />
    ))}
    </>
  )
}