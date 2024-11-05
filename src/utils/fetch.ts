export async function getData<T>(jsonUrl: string): Promise<T | null> {
    try {
        const response = await fetch(jsonUrl);
        if (!response.ok) {
            console.log("Failed fetching");
            return null;
        }

        const data: T = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching data:", error);
        return null; 
    }
}

