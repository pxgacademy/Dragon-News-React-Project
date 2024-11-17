import { Outlet } from "react-router-dom"
import Header from "./components/header/Header"
import LatestNewsTitle from './components/header/LatestNewsTitle'
import Navbar from "./components/header/Navbar"



function Root() {
  return (
    <>
    <Header/>
    <section className="px-5">
    <LatestNewsTitle />
    <Navbar />
    </section>
    <Outlet/>
    </>
  )
}

export default Root