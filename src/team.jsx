import { useState } from "react"

export default function Team(){
 const [team, SetTeam]= useState(11);


   const handleAdd = () =>{
    const newTeam = team 
    +1;
    SetTeam(newTeam);
    
   }

  const handleRemove =()=>{
  
    SetTeam(team - 1)
  }

  const TeamStyle={
    border: ' 2px solid purple',
    marginTop: '10px',
    padding: '15px',
    borderRadius: '15px'
}  

return(
    <div style={TeamStyle}>
       <h3> Players: {team} </h3>
      <button onClick={handleAdd}>Add</button>
      <button onClick={handleRemove}> Remove</button>

    </div>
)

}