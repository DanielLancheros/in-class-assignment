import CharactersList from "./components/CharactersList"
import CharacterCard from "./components/CharacterCard"



export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      
      <CharactersList />
    </main>
  )
}