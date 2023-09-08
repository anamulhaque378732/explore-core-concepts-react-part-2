export default function Friend ({friend}){
const {name, email, id} = friend;
 
 

    return (
        <div className="box">
         <h3> Id: {id} </h3>   
        <h4>Name: {name} </h4>
        <p>Email: {email} </p>
        </div>
    )
}