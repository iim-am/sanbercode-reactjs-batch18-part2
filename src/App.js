import React from 'react';
import logo from './logo.svg';
//import './App.css';

function App() {
  return (<
    div className="App" >

    {
      /* <header className="App-header">
                 <img src={logo} className="App-logo" alt="logo" />
                   <p>
                     Edit <code>src/App.js</code> and save to reload.
                   </p>
                   <a
                     className="App-link"
                     href="https://reactjs.org"
                     target="_blank"
                     rel="noopener noreferrer"
                   >
                     Learn React
                   </a>
             </header> */
    }


    <div style={{ padding: "10px", color: "black", border: "1px solid ", width: "70%", margin: "0 auto", borderRadius: "20px" }} >
      <h1 style={
        {
          textAlign: "center"
        }
      } > Form Pembelian Buah < /h1>

    <div style={
          {
            display: "block",
            marginBottom: "1em"
          }
        } >

          <pre><label><strong>Nama Pelanggan</strong></label>   <input type="text" /></pre>





          <pre style={{ textAlign: "left" }}>
            <strong>Daftar Item </strong><label>     <input type="checkbox" name="semangka" value="semangka" /> Semangka</label><br />
            <label>                 <input type="checkbox" name="semangka" value="semangka" /> Jeruk </label><br />
            <label>                 <input type="checkbox" name="semangka" value="semangka" /> nanas</label><br />
            <label>                 <input type="checkbox" name="semangka" value="semangka" /> Salak </label><br />
            <label>                 <input type="checkbox" name="semangka" value="semangka" /> Anggur</label><br />
          </pre>

          <p>
            <input type="submit" name="submit" value="Kirim" />
          </p>






        </div >
    </div>






      <
    / div >
  );
}

export default App;