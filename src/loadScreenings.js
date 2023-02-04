import axios from "axios";

export default async function loadScreenings() {
    let data = await axios.get("https://plankton-app-xhkom.ondigitalocean.app/api/screenings");
	data = data.data.data;
    return data;
}