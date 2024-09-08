import axios, { AxiosResponse } from 'axios';
import API_ENDPOINTS from '@/const/ApiEndPoints';

// Type for query params used in getALLCompaniesList
interface QueryParams {
  [key: string]: string | number | boolean;
}

// Type for the payload used in uploadBatchFilingFile
interface UploadPayload {
  file: File;
  [key: string]: any; // You can refine this type based on the actual payload structure
}

/**
 * @function useBatchFiling
 * @description This is a custom hook used for Batch Filing.
 * @returns {object} - All the functions pertaining to Batch Filing.
 */
export default function useBatchFiling() {
  /**
   * @function getUploadedFilesList
   * @description This function is used to get uploaded files data.
   * @returns {Promise<AxiosResponse>} - The uploaded files response.
   */
  const getUploadedFilesList = async (): Promise<AxiosResponse> => {
    try {
      const response = await axios.get(
        `${API_ENDPOINTS.MODULE_BASE_URL.AUTH}${API_ENDPOINTS.BF.GET_UPLOADED_FILES}`,
      );
      return response;
    } catch (error) {
      throw error;
    }
  };

  /**
   * @function getALLCompaniesList
   * @description This function is used to get all reported companies created using a particular batch file.
   * @param {QueryParams} queryParams - Query parameters for filtering companies.
   * @returns {Promise<AxiosResponse>} - The companies list response.
   */
  const getALLCompaniesList = async (
    queryParams: QueryParams,
  ): Promise<AxiosResponse> => {
    try {
      const response = await axios.get(
        `${API_ENDPOINTS.MODULE_BASE_URL.AUTH}${API_ENDPOINTS.BF.GET_ALL_REPORTED_COMPANIES}`,
        { params: queryParams },
      );
      return response;
    } catch (error) {
      throw error;
    }
  };

  /**
   * @function uploadBatchFilingFile
   * @description This function is used to upload a file for batch filing.
   * @param {UploadPayload} payload - Payload for uploading the batch file.
   * @returns {Promise<AxiosResponse>} - The upload response.
   */
  const uploadBatchFilingFile = async (
    payload: UploadPayload,
  ): Promise<AxiosResponse> => {
    try {
      const response = await axios.post(
        `${API_ENDPOINTS.MODULE_BASE_URL.AUTH}${API_ENDPOINTS.BF.UPLOAD_BATCH_FILING_FILE}`,
        payload,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        },
      );
      return response;
    } catch (error) {
      throw error;
    }
  };

  return {
    getUploadedFilesList,
    getALLCompaniesList,
    uploadBatchFilingFile,
  };
}
