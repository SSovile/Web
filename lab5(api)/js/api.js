const BASE_URL = "http://localhost:5500";
const RESOURSE_URL = `${BASE_URL}/camera`;

const baseRequest = async ({ urlPath = "", method = "GET", body = null }) => {
    try {
        const reqParams = {
            method,
            headers: {
                "Content-Type": "application/json",
            },
        };

        if (body) {
            reqParams.body = JSON.stringify(body);
        }

        return await fetch(`${RESOURSE_URL}${urlPath}`, reqParams);
    } catch (error) {

        
    }
};

export const getAllCameras = async () => {
    const rawResponse = await baseRequest({ method: "GET" });

    return await rawResponse.json();
};

export const postCamera = (body) => baseRequest({ method: "POST", body });

export const updateCamera = (id, body) =>
    baseRequest({ urlPath: `/${id}`, method: "PUT", body });

export const deleteCamera = (id) =>
    baseRequest({ urlPath: `/${id}`, method: "DELETE" });