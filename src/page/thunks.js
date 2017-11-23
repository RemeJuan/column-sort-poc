import { apiStart, getTableDataSuccess, getTableDataError } from './actions';

const BASE_API_PATH = 'https://api.rtms.events';

export default function getData() {
  return async dispatch => {
    dispatch(apiStart());
    try {
      const url = `${BASE_API_PATH}/events/all/running`;
      const options = {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      };
      const response = await fetch(url, options);
      const json = await response.json();
      return dispatch(getTableDataSuccess(json));
    } catch (error) {
      console.log(error);
      return dispatch(getTableDataError());
    }
  };
}
