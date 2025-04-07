import { get, post, postFormData } from '../utils/fetch.js';

/**
 * Base class for all API modules
 * @module api/BaseApi
 */
export class BaseApi {
  /**
   * @param {string} baseUrl - The base URL for the Kubelet API
   * @param {string} basePath - The base path for the API endpoint
   */
  constructor(baseUrl, basePath) {
    this.baseUrl = baseUrl;
    this.basePath = basePath;
  }

  /**
   * Make a GET request
   * @param {string} path - The path to append to the base path
   * @returns {Promise<any>}
   */
  async get(path = '') {
    return get(`${this.baseUrl}${this.basePath}${path}`);
  }

  /**
   * Make a POST request
   * @param {string} path - The path to append to the base path
   * @param {Object} data - The data to send in the request body
   * @returns {Promise<any>}
   */
  async post(path = '', data) {
    return post(`${this.baseUrl}${this.basePath}${path}`, data);
  }

  /**
   * Make a POST request with form data
   * @param {string} path - The path to append to the base path
   * @param {FormData} formData - The form data to send
   * @returns {Promise<any>}
   */
  async postFormData(path = '', formData) {
    return postFormData(`${this.baseUrl}${this.basePath}${path}`, formData);
  }
} 