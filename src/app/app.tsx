import NavBar from "components/NavBar"
import CattleList from "../app/Cattle/list"
import CattleDetail from "../app/Cattle/Detail"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

const App = (): JSX.Element => {
  return (
    <main className="min-h-screen">
      <NavBar />
      <div className="p-3 md:p-7 w-screen flex flex-col justify-center h-full">
        <div className="flex flex-col max-w-screen-xl w-full m-auto">
          <Router>
            <Routes>
              <Route path="/" element={<CattleList />} />
              <Route path="/:id" element={<CattleDetail />} />
              <Route
                path="*"
                element={
                  <div style={{ padding: 20 }}>
                    <h2>404: Page Not Found</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adip.</p>
                  </div>
                }
              />
            </Routes>
          </Router>
        </div>
      </div>
    </main>
  )
}

export default App
