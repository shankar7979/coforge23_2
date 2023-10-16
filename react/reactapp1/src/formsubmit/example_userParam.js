import React from "react";

import {
    BrowserRouter as Router,
    Routes,
    Route,
    useParams,
} from "react-router-dom";

function EmployeeResult() {
    let { id } = useParams();
    return <div style={{ fontSize: "50px" }}>
        Employee Id : {id}
    </div>;
}

function HomePage() {
    return <h3>home page... </h3>;
}

function Params() {
    return (
        <Router>
            <Routes>
                <Route path="/page/:id" element={<EmployeeResult />} />
                <Route path="/" element={<HomePage />} />
            </Routes>
        </Router>
    );
}

export default Params;

//http://localhost:3000/page/9999

//https://github.com/andrebaltieri/react-hooks-axios-crud-sample/  -- imp
//https://github.com/SimonPe25/Example-React-Router-6-
 
//https://github.com/john-smilga/react-router-6-tutorial/   -- imp working params
