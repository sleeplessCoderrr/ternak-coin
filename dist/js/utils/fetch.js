export async function getData(jsonUrl) {
    try {
        const response = await fetch(jsonUrl);
        if (!response.ok) {
            console.log("Failed fetching");
            return null;
        }
        const data = await response.json();
        return data;
    }
    catch (error) {
        console.error("Error fetching data:", error);
        return null;
    }
}
