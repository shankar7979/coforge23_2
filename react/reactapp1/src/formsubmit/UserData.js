//import { useParams } from "react-router-dom";

const UserData = ({ user }) => {
    //const { name } = useParams();
    return (
        <div class="container">
            <div class="p-5 w-75  bg-info" style={{ marginLeft: '150px', marginTop: '100px', }}>
                <h1 style={{ marginLeft: '250px' }}>User Data </h1>
                <div style={{ marginLeft: '255px' }}>Id is {user?.userId}. </div>
                <div style={{ marginLeft: '255px' }}>Name is {user?.firstName}. </div>
            </div>
        </div>
    )
};
export default UserData;
