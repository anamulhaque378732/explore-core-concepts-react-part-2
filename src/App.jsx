
import './App.css'
import Counter from './Counter';
import Team from './team';
import Users from './Users';
import Friends from'./Friends';
 
function App() {
  function handleClick(){
    alert ('btn click');
  };
  const handleClick2 = ()=>{
    alert ('btn 2 click')
  };

  const addToFile = (num)=>{
    alert (num +5)
  };

  return (
    <>
      <h2>React Core Concepts 2</h2>
      
       <Friends></Friends>
           <Users></Users>
              <Team></Team>
       <Counter></Counter>


      <button onClick={handleClick}> Click me</button>
       <button onClick={handleClick2}> click 2</button>
       <button onClick={()=>{alert('third click')}}> Third</button>

       {/* vejailla */}
   <button onClick={ ()=> addToFile(3)}> btn four</button>


    </>
  )
}

export default App
