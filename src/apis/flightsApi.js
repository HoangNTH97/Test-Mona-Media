import axiosClient from './axiosClient';

const flightsApi = {
  getAll(params) {
    const url = '/v1/ff3207e0-f250-4a1d-9240-b3dbffa8386a';
    return axiosClient.get(url, { params });
  },
};

export default flightsApi;
