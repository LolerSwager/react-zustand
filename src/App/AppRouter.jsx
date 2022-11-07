import { Routes, Route } from "react-router-dom"
import Home from "../Pages/Home"
import Login from "../Pages/Login/Login"
import NotFound from "../Pages/NotFound"
import Somthing from "../Pages/Somthing"
import { useLoginStore } from "../Pages/Login/useLoginStore"
import Modal from "../Components/Modal/Modal"
import FlashMessages from "../Components/FlashMessages/FlashMessages"

const AppRouter = () => {
    const { loggedIn } = useLoginStore()

    return (
        <>
            <FlashMessages />
            <Modal />
            <Routes>
                <Route index path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="Somthing" element={<Somthing />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </>
    )
}

export default AppRouter
