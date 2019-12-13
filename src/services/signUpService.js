export async function signUp(data) {
    console.log("Making 'signUp' API call...");

    try {
        const response = await postData('http://apiendpoint:3000', data); // it returns 404
        return {
            isSuccess: response.status === 200
        }
    } catch (error) {
        console.error(error);
        return {
            isSuccess: false
        }
    }
}

async function postData(url = '', data = {}) {
    const response = await fetch(url, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    return await response;
}