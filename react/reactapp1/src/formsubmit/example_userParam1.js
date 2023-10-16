import React from "react";


import {
    BrowserRouter as Router,
    Routes,
    Route,
    useParams,
    useNavigate,
} from "react-router-dom";

function EmployeeResult() {
    let { id } = useParams();
    return <div style={{ fontSize: "50px" }}>
        <h1>Employee Page</h1>
        <p>Employee Id : {id}</p>
    </div>;
}

const onSubmitHandler = async (e) => {
    e.preventDefault();
    if (userId == '')
        alert('user id is blank')

    else if (firstName == '')
        alert('first name is blank')

    //if (!firstName) return;
    else {
        // this.props.history.push(`/login/${this.state.firstName}`)
        //setUser({ firstName: firstName, userId: userId });
        //setUserShow(false);  // uncomment to display below 
        navigate('/login');  // uncomment to navigate to /login
    }
}



function HomePage() {
    const [firstName, setFirstName] = useState('');
    const [userId, setUserId] = useState('');
    const [userShow, setUserShow] = useState(true);
    const navigate = useNavigate();

    return
    <>
        <h3>home page... </h3>;
        <form onSubmit={onSubmitHandler}>
            <div className="form-group">
                <label>Enter User Id</label>
                <input type="text"
                    name="userId" onChange={(e) => setUserId(e.target.value)} value={userId}
                    className="form-control mt-3"
                />
            </div>

            <div className="form-group mt-3">
                <label>Enter the Name</label>
                <input type="text"
                    name="firstName" onChange={(e) => setFirstName(e.target.value)} value={firstName}
                    className="form-control mt-3"

                />

            </div>
            <div className="form-group">
                <button type="submit" className='btn btn-primary mt-2' onClick={onSubmitHandler}>Submit</button>
                <button type="reset" className='btn btn-primary mt-2' style={{ 'marginLeft': '10px' }} >Cancel</button>
            </div>

            <div className="form-group mt-4" hidden={userShow}>
                {<p>"User Id : " {userId}</p>}
                {<p>"FirstName : " {firstName}</p>}
            </div>

        </form>

    </>
}

function Params() {
    return (
        <Router>
            <Routes>
                <Route path="/login/:id" element={<EmployeeResult />} />
                <Route path="/" element={<HomePage />} />
            </Routes>
        </Router>
    );
}

export default Params;

//http://localhost:3000/page/9999
