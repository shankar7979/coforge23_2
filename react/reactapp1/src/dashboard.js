import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Navigate } from 'react-router-dom';


import Counter1 from "./Counter1"
import Counter2 from "./hook/Counter2"
import { Navbar } from './Navbar'
import News from "./News"
import PersonInfo from "./person/PersonInfo"
import UnControlledForm from "./UnControlledForm"
import UserForm from "./UserForm1"
import Fetch from './database/Fetch'

const Dashboard = () => {

    return (
        <Router>

            <Navbar></Navbar>

            {/* <Navbar>inside routes will not render in every page   */}


            <Routes>
                {/* <Route exact path="/" element={<Navbar/>}/> */}
                {/* <Route index element={<Navbar />} /> */}
                {/* <Route exact path="/" component={UserForm} /> */}

                <Route path="/" element={<UserForm />} />
                <Route path="/userform" element={<UserForm />} />
                <Route path="/personinfo" element={<PersonInfo />} />
                <Route path="/counter1" element={<Counter1 />} />
                <Route path="/counter2" element={<Counter2 />} />
                <Route path="/fetchdata" element={<Fetch />} />

                {/* <Route path="*">
                    <Navigate to="/" />
                </Route>  */}

            </Routes>
        </Router>

    )
}
export default Dashboard