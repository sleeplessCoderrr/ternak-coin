export async function getData(jsonUrl: string): Promise<any> {
    try {
        const response = await fetch(jsonUrl);
        if (!response.ok) {
            console.log("Failed fetching");
            return null;
        }

        const data: any = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching data:", error);
        return null; 
    }
}

export default getData;