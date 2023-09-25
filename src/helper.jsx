import axios from 'axios';

export async function sendApiLog(api) {
  await axios
    .post('http://api.test.com/api/apilog', { ...api })
    .then((response) => {
      console.log(response);
    });
}

export async function getApiLog() {
  return await axios
    .get('http://api.test.com/api/apilog')
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log(error);
    });
}
export async function deleteApiLog(id) {
  return await axios
    .delete(`http://api.test.com/api/apilog/${id}`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log(error);
    });
}
