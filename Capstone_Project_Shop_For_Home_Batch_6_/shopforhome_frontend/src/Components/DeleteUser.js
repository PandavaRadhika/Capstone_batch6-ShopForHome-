import React from "react";

function DeleteUser(props) {
  const deleteApi = () => {
    fetch("http://localhost:8081/user/deleteuser/" + props.userId, {
      method: "DELETE",
    }).then((res) => {
      console.log(res.status);
      alert("item deleted successfully...");
    });
  };
  return (
    <div>
      <button
        type="submit"
        className="btn btn-danger"
        onClick={deleteApi}
        value={props.userId}
      >
        Delete
      </button>
    </div>
  );
}

export default DeleteUser;

// // controlled components for forms
// function   DeleteUser(){

//     const [details, setDetails] = useState({

//         userId:""
//     })

//     const handleChange = (e)=>{
//         const name = e.target.name;
//         const value = e.target.value;

//         setDetails({...details,[name]:value});

//         console.log(details)}

//            const deleteUserApi=()=>{
//                 fetch("http://localhost:8081/user/deleteuser/"+details.userId,{method:'DELETE'})
//                 .then((res)=>{console.log(res.status); alert("user deleted successfully...")})
//             }
//     return (
//         <>
//         <div className='tab'>
//             <h1>Delete User</h1>
//             <form>
//                <label htmlFor='userId'>User Id</label>
//                 <input type="text" className="form-control" name="userId" placeholder="Enter the user id" value={details.userId} onChange={handleChange} /><br />

//             </form>
//             <button type="submit" className='btn btn-warning' onClick={deleteUserApi} >Submit</button>
//         </div>
//         </>
//     );
//         }

//         export default DeleteUser
