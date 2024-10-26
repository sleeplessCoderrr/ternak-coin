export async function getData(jsonUrl:string): Promise<JSON>{
    try {
        const response = await fetch(jsonUrl);
        if(!response.ok) console.log("Failed fetching");

        const data = await response.json();
        return data;
    } catch (error) {
        throw(error);
    }
}

export default(getData);