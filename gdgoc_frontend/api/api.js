const BASE_URL = "https://gdgoc-ugm-api.vercel.app/api";

async function get(path) {
    const res = await fetch(`${BASE_URL}${path}`);

    if(!res.ok) {
        throw new Error("HTTP " + res.status);
    }

    const json = await res.json();

    return json.data;
}

export const getTracks = () => get("/tracks");
export const getFAQs = () => get("/faqs");
export const getFormats = () => get("/formats");
export const getJourney = () => get("/journey");
export const getNavigation = () =>("/navigation");
