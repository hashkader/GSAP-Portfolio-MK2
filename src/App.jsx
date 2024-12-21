import Name from "./components/Name"
import NavBar from "./components/NavBar"
import NewName from "./components/NewName"

function App() {

  return (
    <main className="bg-beige h-screen w-screen overflow-hidden">
      <NavBar/>
      <NewName/>
      {/* <Name/> */}
    </main>
  )
}

export default App
