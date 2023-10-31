import { useState, createContext, useContext, useEffect } from "react";
import ReactDOM from "react-dom/client";

const UserContext = createContext();

function Component1() {
    const [user, setUser] = useState("mohan");
    useEffect(() => {
        setUser('sumit kumar')
    })
    return (
        <UserContext.Provider value={user}>

            <h1>Component 1  {`Hello ${user}!`}</h1>
            <Component2 />
        </UserContext.Provider>
    );
}

function Component2() {
    return (
        <>
            <h1>Component 2</h1>
            <Component3 />
        </>
    );
}

function Component3() {
    const user2 = useContext(UserContext);
    const [name, setName] = useState('john');
    //name = setName(user2);
   // console.log('outside name is ' + name)

    //useEffect = () => {
    useEffect(() => {
        setName('karl')
      //  console.log('use effect name is ' + name)
    })

    return (
        <>
            <h1>Component 3</h1>
            User2 :  {user2}
            <br></br>
            Name :   {name}
            <Component4 />
        </>
    );
}

function Component4() {
    const user1 = useContext(UserContext);
    return (
        <>
            <h1>Component 4 </h1> {user1}
            <Component5 />
        </>
    );
}

function Component5() {
    const user = useContext(UserContext);

    return (
        <>
            <h1>Component 5</h1>
            <h2>{`Hello ${user} again!`}</h2>
        </>
    );
}
export default Component1;
//const root = ReactDOM.createRoot(document.getElementById('root'));
//root.render(<Component1 />);