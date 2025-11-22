import axios from 'axios';

const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_URL || 'http://localhost:5000',
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add JWT token to requests
apiClient.interceptors.request.use((config) => {
  const token = typeof window !== 'undefined' ? localStorage.getItem('jwt_token') : null;
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Handle response errors
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // Clear token and redirect to login
      if (typeof window !== 'undefined') {
        localStorage.removeItem('jwt_token');
        window.location.href = '/login';
      }
    }
    return Promise.reject(error);
  }
);

export const authApi = {
  login: (email: string, password: string) =>
    apiClient.post('/auth/login', { email, password }),
  register: (email: string, password: string, role: string) =>
    apiClient.post('/auth/register', { email, password, role }),
  getCurrentUser: () => apiClient.get('/auth/me'),
};

export const healthcareApi = {
  getPatients: () => apiClient.get('/healthcare/patients'),
  getPatient: (id: string) => apiClient.get(`/healthcare/patients/${id}`),
  createPatient: (data: any) => apiClient.post('/healthcare/patients', data),
  updatePatient: (id: string, data: any) => apiClient.put(`/healthcare/patients/${id}`, data),
  getAppointments: () => apiClient.get('/healthcare/appointments'),
  createAppointment: (data: any) => apiClient.post('/healthcare/appointments', data),
  getMedicalRecords: (patientId: string) =>
    apiClient.get(`/healthcare/medical-records?patient_id=${patientId}`),
};

export const telemedApi = {
  getConsultations: () => apiClient.get('/telemed/consultations'),
  startConsultation: (appointmentId: string) =>
    apiClient.post(`/telemed/consultations/${appointmentId}/start`, {}),
  endConsultation: (consultationId: string) =>
    apiClient.post(`/telemed/consultations/${consultationId}/end`, {}),
};

export const researchApi = {
  getProjects: () => apiClient.get('/research/projects'),
  getProject: (id: string) => apiClient.get(`/research/projects/${id}`),
  createProject: (data: any) => apiClient.post('/research/projects', data),
  getDatasets: (projectId: string) =>
    apiClient.get(`/research/projects/${projectId}/datasets`),
  uploadDataset: (projectId: string, data: FormData) =>
    apiClient.post(`/research/projects/${projectId}/datasets`, data, {
      headers: { 'Content-Type': 'multipart/form-data' },
    }),
};

export const aiApi = {
  getModels: () => apiClient.get('/ai/models'),
  getAgents: () => apiClient.get('/ai/agents'),
  createAgent: (data: any) => apiClient.post('/ai/agents', data),
  interactWithAgent: (agentId: string, input: any) =>
    apiClient.post(`/ai/agents/${agentId}/interact`, { input }),
};

export default apiClient;
