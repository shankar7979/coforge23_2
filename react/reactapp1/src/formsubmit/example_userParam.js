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
