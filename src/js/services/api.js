import axios from 'axios';
import * as Config from '../constants';

export default {
  async getClass() {
    let data;
    await axios
      .get(`${Config.API_BASE_URL}/api/clases/getall/`)
      // eslint-disable-next-line no-return-assign
      .then((response) => (data = response.data))
      .catch((error) => console.log(error));

    return data;
  },
};
