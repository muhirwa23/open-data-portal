import axios from 'axios';

const CKAN_API_BASE = process.env.NEXT_PUBLIC_CKAN_URL || '/api/3/action';

export const ckanClient = axios.create({
  baseURL: CKAN_API_BASE,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const packageApi = {
  list: async (q = '', rows = 12) => {
    const res = await ckanClient.get('/package_search', {
      params: { q, rows },
    });
    return res.data.result.results;
  },
  show: async (id: string) => {
    const res = await ckanClient.get('/package_show', {
      params: { id },
    });
    return res.data.result;
  },
};

export const organizationApi = {
  list: async () => {
    const res = await ckanClient.get('/organization_list', {
      params: { all_fields: true },
    });
    return res.data.result;
  },
  show: async (id: string) => {
    const res = await ckanClient.get('/organization_show', {
      params: { id, include_datasets: true },
    });
    return res.data.result;
  },
};
