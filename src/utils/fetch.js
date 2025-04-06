/**
 * @fileoverview Fetch utility functions for Kubelet API
 * @module utils/fetch
 */

let baseUrl = '';

/**
 * Set the base URL for all API requests
 * @param {string} url - The base URL of the Kubelet API
 */
export const setBaseUrl = (url) => {
  baseUrl = url;
};

/**
 * Create a base URL for API requests
 * @param {string} path - The API endpoint path
 * @returns {string} The complete URL
 */
const createUrl = (path) => {
  return `${baseUrl}${path.startsWith('/') ? path : `/${path}`}`;
};

/**
 * Make a GET request to the specified URL
 * @param {string} path - The API endpoint path
 * @param {Object} [options={}] - Additional fetch options
 * @param {boolean} [asText=false] - Whether to return the response as text
 * @returns {Promise<Object|string>} The JSON response or text
 */
export const get = async (path, options = {}, asText = false) => {
  const url = createUrl(path);
  const response = await fetch(url, {
    method: 'GET',
    ...options
  });
  return asText ? response.text() : response.json();
};

/**
 * Make a POST request to the specified URL
 * @param {string} path - The API endpoint path
 * @param {Object} [body={}] - The request body
 * @param {Object} [options={}] - Additional fetch options
 * @param {boolean} [asText=false] - Whether to return the response as text
 * @returns {Promise<Object|string>} The JSON response or text
 */
export const post = async (path, body = {}, options = {}, asText = false) => {
  const url = createUrl(path);
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      ...options.headers
    },
    body: JSON.stringify(body),
    ...options
  });
  return asText ? response.text() : response.json();
};

/**
 * Make a PUT request to the specified URL
 * @param {string} path - The API endpoint path
 * @param {Object} [body={}] - The request body
 * @param {Object} [options={}] - Additional fetch options
 * @param {boolean} [asText=false] - Whether to return the response as text
 * @returns {Promise<Object|string>} The JSON response or text
 */
export const put = async (path, body = {}, options = {}, asText = false) => {
  const url = createUrl(path);
  const response = await fetch(url, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      ...options.headers
    },
    body: JSON.stringify(body),
    ...options
  });
  return asText ? response.text() : response.json();
};

/**
 * Make a request with form data
 * @param {string} path - The API endpoint path
 * @param {Object} formData - The form data to send
 * @param {Object} [options={}] - Additional fetch options
 * @param {boolean} [asText=false] - Whether to return the response as text
 * @returns {Promise<Object|string>} The JSON response or text
 */
export const postFormData = async (path, formData, options = {}, asText = false) => {
  const url = createUrl(path);
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      ...options.headers
    },
    body: formData,
    ...options
  });
  return asText ? response.text() : response.json();
}; 