import { Result } from "../types/result";
import { BASE_URL } from "../constants";

interface IGetRequestParams {
	endpoint: string;
	headers?: HeadersInit;
	token?: string;
}

export async function GET<T>(params: IGetRequestParams): Promise<Result<T>> {
	const { endpoint, headers, token } = params;
	const requestHeaders: HeadersInit = new Headers(headers);
    if (token){
        requestHeaders.set("Authorization", `Bearer ${token}`)
    }
	try{
		const response = await fetch(`${BASE_URL}/${endpoint}`, {
			headers: requestHeaders
		})
        const responseData: Result<T> = await response.json()
        
		if (responseData.status === "error"){
			return responseData
		}

        return responseData
	} catch (err) {
		console.log(err)
		return {
			status: "error",
			message: "Network error!:(",
		}
	}
}