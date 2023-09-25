import React, { useCallback, useEffect, useState } from 'react';
import { deleteApiLog, getApiLog } from './helper';

function RenderApi() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const apiData = new Promise((resolve, reject) => {
    console.log('loading');
    resolve(getApiLog());
  });

  useEffect(() => {
    apiData
      .then((data) => {
        setData(data);
      })
      .then(() => {
        setTimeout(() => {
          setLoading(false);
        }, 1000);
      });
  }, []);

  const renderList = (id) => {
    // deleteApiLog(id).then(() => {
    //   apiData.then((data) => {
    //     setData(data);
    //   });
    // });
  };

  return (
    <>
      {loading ? (
        <span style={{ minHeight: '100vh', background: 'red', width: '100%' }}>
          Loading...
        </span>
      ) : (
        <ul>
          {data?.length > 0
            ? data.map((item) => {
                return (
                  <li
                    key={item.id}
                    onClick={() => renderList(item.id)}
                    style={{
                      padding: 16,
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'stretch',
                    }}
                  >
                    {item.username === null ? (
                      'Unknown'
                    ) : (
                      <span
                        style={{
                          padding: 8,
                          backgroundColor: '#f07167',
                          color: 'white',
                        }}
                      >
                        User: {item.username}
                      </span>
                    )}{' '}
                    {item.username === null ? (
                      'Unknown'
                    ) : (
                      <span
                        style={{
                          padding: 8,
                          backgroundColor: '#a8dadc',
                          color: 'white',
                        }}
                      >
                        Api Description: {item.tagName}
                      </span>
                    )}
                  </li>
                );
              })
            : null}
        </ul>
      )}
    </>
  );
}

export default React.memo(RenderApi);
