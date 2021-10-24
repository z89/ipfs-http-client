import './App.css';
import { create } from 'ipfs-http-client'

async function loadNode() {
  // connect to the default API address http://localhost:5001
  const client = create({host: '127.0.0.1', port: 5001})
  let cid
  try {
    cid = await client.add('Hello world!')
  } catch (err) {
    console.log(err);
  }

  return cid
}


function App() {
  loadNode().then((value) => console.log(value.path))
  
  return (
    <div className="App">
      <h1>testing</h1>
    </div>
  );
}

export default App;
