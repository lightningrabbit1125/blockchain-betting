// Common TypeScript types for the application

// Button variants
export type ButtonVariant = "blue" | "black" | "red" | "green" | "blueOne";

// Form field types
export interface FormField {
  name: string;
  label: string;
  type: "text" | "email" | "password" | "number" | "tel" | "select" | "dropdown";
  required?: boolean;
  placeholder?: string;
  options?: Array<{ value: string; label: string; icon?: React.ReactNode }>;
}

// User types
export interface User {
  id: string;
  email: string;
  username?: string;
  avatar?: string;
  isAuthenticated: boolean;
}

// Auth types
export interface LoginCredentials {
  email: string;
  password: string;
}

export interface RegisterCredentials {
  email: string;
  password: string;
  confirmPassword: string;
  username?: string;
}

// Game types
export interface Game {
  id: string;
  name: string;
  description: string;
  image: string;
  category: "casino" | "sports" | "slots" | "table" | "live";
  isActive: boolean;
}

// Casino types
export interface Casino {
  id: string;
  name: string;
  logo: string;
  rating: number;
  games: Game[];
  isActive: boolean;
}

// API Response types
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

// Pagination types
export interface PaginationParams {
  page: number;
  limit: number;
}

export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}
