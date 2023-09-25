import './App.css';
import { useState } from 'react';

import { sendApiLog } from './helper';
import RenderApi from './RenderApi';
import ViewLogs from './pages/ViewLogs';

function App() {
  const [api, setApi] = useState({ username: '', endpoint: '', payload: '' });

  const handleChange = (e) => {
    setApi((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(api);
    sendApiLog(api);
  };

  return (
    <div style={{ display: 'flex', padding: 0, margin: 0 }}>
      <div
        className="App"
        style={{
          width: '40%',
          display: 'flex',
          flexDirection: 'column',
          // alignItems: 'center',
          justifyContent: 'center',
          // margin: 8,
        }}
      >
        <form id="addApi" onSubmit={handleSubmit}>
          <div
            className="apiForm"
            style={{
              display: 'flex',
              flexDirection: 'column',
              // width: '80%',
              alignItems: 'center',
              margin: 0,
              padding: '0.4rem',
              minHeight: '90vh',
              justifyContent: 'center',
            }}
          >
            <h1>API Logger</h1>
            {/* <GenerateInput /> */}
            <div className="inputText">
              <label htmlFor="">
                Tag Name <sub></sub>
              </label>
              <input
                type="text"
                name="tagName"
                onChange={handleChange}
                style={{ width: '60%' }}
              />
            </div>
            <div className="inputText">
              <label htmlFor="">Endpoint</label>
              <input
                type="text"
                name="endpoint"
                onChange={handleChange}
                style={{ width: '60%' }}
              />
            </div>
            <div className="inputText">
              <label htmlFor="">Payload</label>
              <textarea
                type="text"
                name="payload"
                onChange={handleChange}
                style={{ width: '60%', height: '4rem', minHeight: '4rem' }}
              />
            </div>
            <div className="inputText">
              <label htmlFor="">Response</label>
              <textarea
                type="text"
                name="response"
                onChange={handleChange}
                style={{ width: '60%', height: '4rem', minHeight: '4rem' }}
              />
            </div>
            <div className="inputText">
              <label htmlFor="">
                Created By <sub></sub>
              </label>
              <input
                type="text"
                name="username"
                onChange={handleChange}
                style={{ width: '60%' }}
              />
            </div>
            <button
              type="submit"
              style={{
                padding: '0.2rem',
                border: '2px solid #fff',
                borderRadius: '0.3rem',
                width: '100%',
                marginInline: '2rem',
              }}
            >
              submit
            </button>
          </div>
        </form>
        {/* <RenderApi /> */}
      </div>

      <ViewLogs />
    </div>
  );
}

export default App;
