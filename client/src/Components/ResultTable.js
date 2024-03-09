import React from 'react';

const ResultTable = ({ data }) => {
  return (
    <div style={{ marginTop: '20px', border: '1px solid #ccc', borderRadius: '5px', boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',width:'500px' }}> {/* Card-like border */}
      <div style={{ padding: '20px', maxHeight: '300px', overflowY: 'auto' }}>
        <h2 style={{ fontSize: '14px', marginBottom: '10px', color: 'black' }}>Data from DataBase:</h2>
        <table style={{ width: '100%', fontSize: '12px' }}>
          <thead>
            <tr>
              {data.length > 0 && Object.keys(data[0]).map((key, idx) => (
                <th key={idx} style={{ padding: '8px', borderBottom: '1px solid #ddd', color: 'black' }}>{key}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                {Object.values(item).map((value, idx) => (
                  <td key={idx} style={{ padding: '8px', borderBottom: '1px solid #ddd', color: 'black' }}>{value}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ResultTable;
