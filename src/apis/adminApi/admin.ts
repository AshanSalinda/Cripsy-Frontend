import axios from 'axios';
import { showToast } from "@/components/Messages/showMessage";

const API_URL = 'http://localhost:8084/api/admin';

// Define the AdminDTO type
interface AdminDTO {
  name: string;
  email: string;
  password: string;
  contact: string;
}

// Define the types for the new APIs
interface OrderSummary {
  percentageDifference: number;
  thisMonthOrders: number;
  lastMonthOrders: number;
}

interface MonthlyTotal {
  year: number;
  month: number;
  totalPrice: number;
}

interface MonthlySumTotal {
  lastMonthTotalPrice: number;
  percentageDifference: number;
  thisMonthTotalPrice: number;
}

interface MonthlySumQty {
  percentageDifference: number;
  thisMonthQuantity: number;
  lastMonthQuantity: number;
}

// Centralized error handler
const handleAxiosError = (error: unknown): string => {
  if (axios.isAxiosError(error)) {
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

// Get Total Customers (GET request)
const getTotalCustomer = async (): Promise<number | null> => {
  try {
    const response = await axios.get(`${API_URL}/totalCustomer`);
    console.log('Total customers:', response.data);
    return response.data as number;
  } catch (error) {
    console.error('Error fetching total customers:', error);
    showToast({ type: "error", message: "Error fetching total customers!" });
    return null;
  }
};

// Order Summary (GET request)
const getOrderSummary = async (): Promise<OrderSummary[]> => {
  try {
    const response = await axios.get(`${API_URL}/orderSummery`);
    console.log('Order Summary:', response.data);
    return response.data as OrderSummary[];
  } catch (error) {
    const errorMessage = handleAxiosError(error);
    console.error('Error fetching order summary:', errorMessage);
    return [];
  }
};

// Monthly Totals (GET request)
const getMonthlyTotals = async (): Promise<MonthlyTotal[]> => {
  try {
    const response = await axios.get(`${API_URL}/monthly-totals`);
    console.log('Monthly Totals:', response.data);
    return response.data as MonthlyTotal[];
  } catch (error) {
    const errorMessage = handleAxiosError(error);
    console.error('Error fetching monthly totals:', errorMessage);
    return [];
  }
};

// Monthly Sum Total (GET request)
const getMonthlySumTotal = async (): Promise<MonthlySumTotal[]> => {
  try {
    const response = await axios.get(`${API_URL}/getMonthlySumTotal`);
    console.log('Monthly Sum Total:', response.data);
    return response.data as MonthlySumTotal[];
  } catch (error) {
    const errorMessage = handleAxiosError(error);
    console.error('Error fetching monthly sum total:', errorMessage);
    return [];
  }
};

// Monthly Sum Quantity (GET request)
const getMonthlySumQty = async (): Promise<MonthlySumQty[]> => {
  try {
    const response = await axios.get(`${API_URL}/getMonthlySumQty`);
    console.log('Monthly Sum Quantity:', response.data);
    return response.data as MonthlySumQty[];
  } catch (error) {
    const errorMessage = handleAxiosError(error);
    console.error('Error fetching monthly sum quantity:', errorMessage);
    return [];
  }
};

export {
  saveAdmin,
  getAllAdmins,
  updateAdmin,
  deleteAdmin,
  getAdminById,
  getTotalCustomer,
  getOrderSummary,
  getMonthlyTotals,
  getMonthlySumTotal,
  getMonthlySumQty,
};
