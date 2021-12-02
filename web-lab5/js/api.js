const BASE_URL = "http://localhost:8080";
const RESOURCE_URL = `${BASE_URL}/camera`;

const baseRequest = async ({urlPath = "", method = "GET", body = null}) => {
    try {
        const reqParams = {
            method,
            headers: {
                "Content-Type": "application/json",
            },
        };

        if (body) {
            reqParams.body = JSON.stringify(body)
        }

        return await fetch(`${RESOURCE_URL}${urlPath}`, reqParams);
    } catch (error) {
        
    }
};

export const getAllCamera = async () => {
    const rawRes = await baseRequest({ method: "GET" });

    return rawRes.json();
};

export const postCamera = (body) => baseRequest({
    method: "POST", body
});

export const updateCamera = (id, body) => 
baseRequest({ urlPath: `/${id}`, method: "PUT", body
});

export const deleteCamera = (id) => 
    baseRequest ({ urlPath: `/${id}`, method: "DELETE"
});
