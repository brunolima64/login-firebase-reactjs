import { Route, Routes } from "react-router-dom"
import { Home } from "../Pages/Home/page"
import { SignIn } from "../Pages/SignIn/page"
import { SignUp } from "../Pages/SignUp/page"
import { NotFound } from "../Pages/NotFound/page"

export const MainRoutes: React.FC = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Signin" element={<SignIn />} />
            <Route path="/Signup" element={<SignUp />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    ) 
    
}