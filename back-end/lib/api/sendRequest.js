import 'isomorphic-unfetch';

const port = process.env.PORT || 8000;
const ROOT_URL = `http://localhost:${port}`;


export default async function sendRequest (path, opts = {}) {
    // define headers

    const response = await fetch(
        `${ROOT_URL}${path}`,

        Object.assign(// pass parameters
        )
    );

    const data = await response.json();

    if (data.error){
        throw new Error(data.error);
    }

    return data;
}