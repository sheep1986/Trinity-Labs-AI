export const handler = async (event, context) => {
    console.log("Config Function Invoked");
    try {
        const apiKey = process.env.GEMINI_API_KEY;
        console.log("API Key present:", !!apiKey);
        
        return {
            statusCode: 200,
            body: JSON.stringify({
                apiKey: apiKey || ""
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        };
    } catch (error) {
        console.error("Config Function Error:", error);
        return {
            statusCode: 500,
            body: JSON.stringify({ error: error.toString() })
        };
    }
};
