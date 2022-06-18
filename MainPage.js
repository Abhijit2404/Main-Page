import './MainPage.css';
import React,{useState} from 'react';

function MainPage() {

  const [file, setFile] = useState("");

  function handleUpload(event) {
    setFile(event.target.files[0]);
  }

  return (
    <div className="wrapper">
      <header className="header"><h2>sDirectory Preliminary Data Analysis Tool</h2></header>

      <article className="main">
        <div className="function-container">
          <input type="checkbox" id="allfunction" name="allfunction" value="allfunction" />
          <label for="function1">All Functions</label><br/>
          <div className="individual-functions">
            <input type="checkbox" id="function1" name="function1" value="function1" />
            <label for="function1"> Function 1</label><br/>
            <input type="checkbox" id="function2" name="vehicle2" value="Car" />
            <label for="function2"> Function 2</label><br/>
            <input type="checkbox" id="function3" name="vehicle3" value="Boat" />
            <label for="function3"> Function 3</label><br/>
          </div>
        </div>
      </article>  

      <aside className="aside aside-1">
        <div className="choose-file">
          Choose the File
          <div className="browse">
            <input type="text" placeholder={file.name} />
            <input type="file" id="select-file" onChange={handleUpload}/>
            <label for="select-file">Browse</label>
          </div>
          <select name="extract-set" placeholder="ExtractSet">
            <option value="rwb">RWB</option>
            <option value="mso">MSO</option>
          </select>
          <select name="file-type" placeholder="File Type">
            <option value="csv">CSV</option>
            <option value="txt">TXT</option>
          </select>
        </div>
        <div className="function-desp">
          Function Description
        </div>
      </aside>

      <aside className="aside aside-2">
        <div className="exp-output">
          Expected Output
        </div>
        <div className="notification-email">
          Notification Address
          <input type="email" placeholder="abc@symplr.com"/>
        </div>
        <button>Generate Analysis</button>
      </aside>
    </div>
  );
}

export default MainPage;
