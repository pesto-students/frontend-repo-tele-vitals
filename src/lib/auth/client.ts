'use client';
import axios from 'axios';
import API_ENDPOINTS from '@/const/ApiEndPoints';
import ToastMessage from '@/components/common/toast-message';
import type { User } from '@/types/user';

function generateToken(): string {
  const arr = new Uint8Array(12);
  window.crypto.getRandomValues(arr);
  return Array.from(arr, (v) => v.toString(16).padStart(2, '0')).join('');
}

const user = {
  id: 'USR-000',
  avatar: 'assets/images/avatar.png',
  firstName: 'Himanshu',
  lastName: 'Rathi',
  email: 'himanshu@gmail.com',
} satisfies User;

export interface SignUpParams {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export interface SignInWithOAuthParams {
  provider: 'google' | 'facebook';
}

export interface SignInWithPasswordParams {
  username: string;
  password: string;
  checked: boolean;
}

export interface ResetPasswordParams {
  email: string;
}

class AuthClient {
  async signUp(params: SignUpParams): Promise<{ error?: string }> {
    try {
      console.log(params)
      // Make the API request to signup
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_BASE_URL}${API_ENDPOINTS.AUTH.CREATE_USER}`, // API endpoint
        {
          username: params.username,
          email: params.email,
          password: params.password,
        },
        {
          headers: {
            'Content-Type': 'application/json', // Example of specifying content type
          },
        }
      );
  
      // Assuming API returns a token on successful signup
      const { data } = response;
  
      if (data.token) {
        // Store token in localStorage
        localStorage.setItem('custom-auth-token', data.token);
        return {}; // Return empty object for successful signup
      } else {
        // Handle case where token is not returned (unexpected response)
        return { error: 'Signup failed. Please try again.' };
      }
    } catch (error: any) {
      // Handle API error
      return {
        error: error.response?.data?.message || 'Something went wrong during signup.',
      };
    }
  }

  async signInWithOAuth(_: SignInWithOAuthParams): Promise<{ error?: string }> {
    return { error: 'Social authentication not implemented' };
  }

  async signInWithPassword(
    params: SignInWithPasswordParams
  ): Promise<void> {
    const { username, password, checked } = params;
    try {
      // Make the API request using Axios
      const response = await axios.post(`${API_ENDPOINTS.MODULE_BASE_URL.AUTH}${API_ENDPOINTS.AUTH.LOGIN_USER}`, {
        username,
        password,
      });
  
      // Assuming the API returns a token and success status
      const { data } = response;
  
      if (data.token) {
        // Save token and other data in localStorage if login is successful
        localStorage.setItem('custom-auth-token', data.token);
        localStorage.setItem('checked', String(checked));
        
        // Show success message
        ToastMessage({
          icon: 'success',
          title: 'Login successful!',
        });
      } else {
        // Handle case where login is unsuccessful but no error is thrown
        ToastMessage({
          icon: 'error',
          title: 'Invalid credentials. Please try again.',
        });
      }
    } catch (error) {
      // Handle errors (like incorrect username/password or network issues)
      if (axios.isAxiosError(error) && error.response) {
        const errorMsg = error.response.data?.message || 'Login failed';
        ToastMessage({
          icon: 'error',
          title: errorMsg,
        });
      } else {
        // Network error or unexpected error
        ToastMessage({
          icon: 'error',
          title: 'Something went wrong. Please try again later.',
        });
      }
    }
  }

  async resetPassword(_: ResetPasswordParams): Promise<{ error?: string }> {
    return { error: 'Password reset not implemented' };
  }

  async updatePassword(_: ResetPasswordParams): Promise<{ error?: string }> {
    return { error: 'Update reset not implemented' };
  }

  async getUser(): Promise<{ data?: User | null; error?: string,checked: boolean }> {
    // Make API request

    // We do not handle the API, so just check if we have a token in localStorage.
    const token = localStorage.getItem('custom-auth-token');
    const checked = localStorage.getItem('checked') === 'true';
    if (!token) {
      return { data: null, checked:false };
    }

    return { data: user,checked };
  }

  async signOut(): Promise<{ error?: string }> {
    localStorage.removeItem('custom-auth-token');

    return {};
  }
}

export const authClient = new AuthClient();
