import { AxiosRequestConfig, AxiosResponse, CreateAxiosDefaults, AxiosInstance } from "axios";
export interface RestClientInterface {
    get(url: string, config?: AxiosRequestConfig<any> | undefined): Promise<AxiosResponse<any, any>>;
    put(url: string, data?: any, config?: AxiosRequestConfig<any> | undefined): Promise<AxiosResponse<any, any>>;
    post(url: string, data?: any, config?: AxiosRequestConfig<any> | undefined): Promise<AxiosResponse<any, any>>;
    delete(url: string, config?: AxiosRequestConfig<any> | undefined): Promise<AxiosResponse<any, any>>;
    patch(url: string, data?: any, config?: AxiosRequestConfig<any> | undefined): Promise<AxiosResponse<any, any>>;
    create(config?: CreateAxiosDefaults<any> | undefined): AxiosInstance;
}
