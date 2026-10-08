import { environment } from "../environments/environment";

const API_BASE_URL = environment.apiBaseUrl

export const apiEndpoints = 
{
    Register: `${API_BASE_URL}/Auth/register`,
}