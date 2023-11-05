
# REST CLIENT

This package is a helper to easily make an HTTP REST request. it's based on Axios and it response schema is the same as [Axios Response Schema](https://www.npmjs.com/package/axios#response-schema) 

## Installation

Use this command to install the package

```bash
  npm install @mljsdev/rest-client
```
    
## Usage/Examples
First, import the `RestClient`, then define your default client configuration. For more details on configuration refer to [AxiosRequestConfig](https://www.npmjs.com/package/axios#request-config)
```javascript
import { RestClient } from '@eka-digital/rest-client'

const config = {
    baseURL: "https://yawa.sedana.io",
    headers: {
        Authorization: `Bearer ${process.env.AUTH_TOKEN}`,
    },
};
```

Then, create a new instance of the RestClient with your configuration
```javascript
const client = new RestClient(config);
```

Now you can perform requests like **GET**, **POST**, **PUT**, **DELETE** and even **PATCH**

 * **GET example**

```javascript
const client = new RestClient(config);
const instance = await client.get('/api/instances').then(res => res.data);

console.log(instance);
```
Response be like: 
```json
{
    "id": 1,
    "name": "first instance",
    "instanceID": "instance1",
    "token": "hbdfbudifujr",
    "active": true,
    "status": "WORKING",
    "note": null,
    "userId": "c652e8a3-3683-41a3-8eda-146aa9d79poi",
    "expiredAt": "2024-02-11T00:00:00.000Z",
    "createdAt": "2023-08-11T15:14:26.000Z",
    "updatedAt": "2023-11-04T16:21:09.000Z",
    "deletedAt": null
}
```

 * **POST example**

```javascript
const client = new RestClient(config);
const instance = await client.post(
    '/api/instances', 
    { 
        name: "second instance" 
    }
).then(res => res.data);
```

 * **PUT example**

```javascript
const client = new RestClient(config);
const instance = await client.put(
    '/api/instances/1', 
    { 
        name: "update second instance" 
    }
).then(res => res.data);
```
## Support

For support, email marcuslogane@eka-digital.com


## Authors

- [@marcusholloway17](https://www.github.com/marcusholloway17)

