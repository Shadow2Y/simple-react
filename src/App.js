import {useEffect,useState} from 'react';

export default function App() {
  var data;
  const [state,ans] = useState([]); 
useEffect(() => { 
  const getUsers = async () => { 
    let response = await fetch('http://localhost:3005/data'); 
    let data = await response.json(); 
    ans((state)=>data); 
  }; 
 getUsers(); 
});
  return (
    <div className="App">
      <h1>API Posts</h1>
      <ul>
        {state.a}
      </ul>
    </div>
  );
}