import axios, {
  AxiosRequestConfig,
  AxiosResponse,
  CreateAxiosDefaults,
  AxiosInstance,
} from "axios";
import { RestClientInterface } from "../interfaces";

export class RestClient implements RestClientInterface {
  private instance: AxiosInstance;
  constructor(config: AxiosRequestConfig<any>) {
    this.instance = this.create(config);
    return this;
  }

  get(
    url: string,
    config?: AxiosRequestConfig<any> | undefined
  ): Promise<AxiosResponse<any, any>> {
    return this.instance.get(url, config);
  }
  put(
    url: string,
    data?: any,
    config?: AxiosRequestConfig<any> | undefined
  ): Promise<AxiosResponse<any, any>> {
    return this.instance.put(url, data, config);
  }
  post(
    url: string,
    data?: any,
    config?: AxiosRequestConfig<any> | undefined
  ): Promise<AxiosResponse<any, any>> {
    return this.instance.post(url, data, config);
  }
  delete(
    url: string,
    config?: AxiosRequestConfig<any> | undefined
  ): Promise<AxiosResponse<any, any>> {
    return this.instance.delete(url, config);
  }
  patch(
    url: string,
    data?: any,
    config?: AxiosRequestConfig<any> | undefined
  ): Promise<AxiosResponse<any, any>> {
    return this.instance.patch(url, data, config);
  }
  create(config?: CreateAxiosDefaults<any> | undefined): AxiosInstance {
    return axios.create(config);
  }
}
