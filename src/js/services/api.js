import axios from 'axios';

const axiosInstance = axios.create({
  headers: {
    "Access-Control-Allow-Origin": "*"
  }
});

export default {

  async getClass() {
    let data;
    await axiosInstance
      .get('https://api-appastra.apps.appastra.com/api/clases/getall/')
      // eslint-disable-next-line no-return-assign
      .then((response) => (data = response.data))
      .catch((error) => console.log(error));
    return data;
  },
  async login(finalObj) {
    let data;
    await axiosInstance
      .post('https://api-appastra.apps.appastra.com/api/usuarios/login', {
        username: finalObj.username,
        pass: finalObj.pass,
      })
      // eslint-disable-next-line no-return-assign
      .then((response) => data = response.data)
      .catch((error) => console.log(error));

    return data;
  },
  async register(finalObj) {
    let data;
    await axiosInstance
      .post('https://api-appastra.apps.appastra.com/api/usuarios/new', {
        username: finalObj.username,
        password: finalObj.password,
        nombre: finalObj.nombre,
        apellidos: finalObj.apellidos,
        email: finalObj.email,
        fecha_nacimiento: finalObj.fecha_nacimiento,
        d_pais: finalObj.d_pais,
        d_provincia: finalObj.d_provincia,
        d_localidad: finalObj.d_localidad,
        d_cp: finalObj.d_cp,
        d_calle: finalObj.d_calle,
        d_numero: finalObj.d_numero,
        d_piso: finalObj.d_piso,
        d_puerta: finalObj.d_puerta,
      })
      // eslint-disable-next-line no-return-assign
      .then((response) => data = response.data)
      .catch((error) => console.log(error));
    return data; 
  },
};