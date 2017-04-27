import { TemplateModel } from 'models/template-model';

export class TemplatesClient {

  constructor({
    config = null
  } = {}) {
    if (config === null) {
      throw new
        Error('TemplatesClient must be initialized with a config object.');
    }
    
    this.config = config;
  }
  
  async get({
    projectId = null,
    accountId = null,
    type = null,
  } = {}) {
    const response = await fetch(`${this._baseUrl}?${buildQuery()}`, {
      headers: this._headers,
      mode: 'cors',
    });
  
    if (!response.ok) {
      console.error('Error getting message templates', response);
      return null;
    }
  
    return response.json().map(t => new TemplateModel(t));
    
    function buildQuery() {
      return `applicationId=${this.config.applicationId}&accountId=${accountId
      }&projectId=${projectId}&type=${type}`
    }
  }
  
  get _baseUrl() {
    return `${this.config.baseUrl}/api/templates`;
  }
  
  get _headers() {
    return {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      /* eslint-disable quote-props */
      'Authorization': `Bearer ${this.config.accessToken}`,
      /* eslint-disable quote-props */
    };
  }
}
