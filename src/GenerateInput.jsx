import { useState } from 'react';
import { data } from './inputLabels';
// import axios from 'axios';
export const GenerateInput = () => {
  const [api, setApi] = useState({
    username: '',
    endpoint: '',
    payload: '',
    response: '',
    createdby: '',
  });
  const handleChange = (e) => {
    setApi((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(api);
    // axios
    //   .post('http://api.test.com/api/apilog', { ...api })
    //   .then((response) => {
    //     console.log(response);
    //   });
  };
  let inputType;
  return data.map((input, index) => {
    if (input.type === 'text') {
      inputType = (
        <input
          type={input.type}
          name={input.tagName}
          onChange={handleChange}
          style={{ width: '60%' }}
        />
      );
    }
    if (input.type === 'textarea') {
      inputType = (
        <textarea
          type={input.type}
          name={input.tagName}
          style={{ width: '60%', height: '9rem', minHeight: '9rem' }}
          onChange={handleChange}
        />
      );
    }
    return (
      <div className={input.className} key={index}>
        <label htmlFor="">{input.label}</label>
        {inputType}
      </div>
    );
  });
};
