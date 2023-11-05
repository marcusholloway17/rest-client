import { AxiosRequestConfig, AxiosResponse, CreateAxiosDefaults, AxiosInstance } from "axios";
import { RestClientInterface } from "../interfaces";
export declare class RestClient implements RestClientInterface {
    private instance;
    constructor(config: AxiosRequestConfig<any>);
    get(url: string, config?: AxiosRequestConfig<any> | undefined): Promise<AxiosResponse<any, any>>;
    put(url: string, data?: any, config?: AxiosRequestConfig<any> | undefined): Promise<AxiosResponse<any, any>>;
    post(url: string, data?: any, config?: AxiosRequestConfig<any> | undefined): Promise<AxiosResponse<any, any>>;
    delete(url: string, config?: AxiosRequestConfig<any> | undefined): Promise<AxiosResponse<any, any>>;
    patch(url: string, data?: any, config?: AxiosRequestConfig<any> | undefined): Promise<AxiosResponse<any, any>>;
    create(config?: CreateAxiosDefaults<any> | undefined): AxiosInstance;
}
