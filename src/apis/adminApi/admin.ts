import axios, { AxiosError } from 'axios';

const API_URL = 'http://localhost:8084/api/admin';

// Define the AdminDTO type
interface AdminDTO {
  name: string;
  email: string;
  password: string;
  contact: string;
  
}

// Centralized error handler
const handleAxiosError = (error: unknown) => {
  if (axios.isAxiosError(error)) {
    // Check if it's an AxiosError
    console.error('Axios error response:', error.response?.data);
    return error.response?.data || 'Unexpected Axios error';
  }
  console.error('Unexpected error:', error);
  return 'Unexpected error';
};

// Save Admin (POST request)
const saveAdmin = async (adminData: AdminDTO): Promise<void> => {
  try {
    const response = await axios.post(`${API_URL}/saveAdmin`, adminData);
    console.log('Admin saved:', response.data);
  } catch (error) {
    const errorMessage = handleAxiosError(error);
    console.error('Error saving admin:', errorMessage);
  }
};

// Get all Admins (GET request)
const getAllAdmins = async (): Promise<AdminDTO[]> => {
  try {
    const response = await axios.get(`${API_URL}/getAllAdmins`);
    console.log('All admins:', response.data);
    return response.data;
  } catch (error) {
    const errorMessage = handleAxiosError(error);
    console.error('Error fetching admins:', errorMessage);
    return [];
  }
};

// Update Admin (PUT request)
const updateAdmin = async (adminData: AdminDTO): Promise<void> => {
  try {
    const response = await axios.put(`${API_URL}/updateAdmin`, adminData);
    console.log('Admin updated:', response.data);
  } catch (error) {
    const errorMessage = handleAxiosError(error);
    console.error('Error updating admin:', errorMessage);
  }
};

// Delete Admin (DELETE request)
const deleteAdmin = async (adminData: AdminDTO): Promise<void> => {
  try {
    const response = await axios.delete(`${API_URL}/deleteAdmin`, { data: adminData });
    console.log('Admin deleted:', response.data);
  } catch (error) {
    const errorMessage = handleAxiosError(error);
    console.error('Error deleting admin:', errorMessage);
  }
};

// Get Admin by ID (GET request)
const getAdminById = async (id: number): Promise<AdminDTO | null> => {
  try {
    const response = await axios.get(`${API_URL}/getAdminById/${id}`);
    console.log('Admin by ID:', response.data);
    return response.data;
  } catch (error) {
    const errorMessage = handleAxiosError(error);
    console.error('Error fetching admin by ID:', errorMessage);
    return null;
  }
};

export { saveAdmin, getAllAdmins, updateAdmin, deleteAdmin, getAdminById };


