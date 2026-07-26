import axios from "axios"

async function getData() {
    const response = await axios.get("https://week-13-offline.kirattechnologies.workers.dev/api/v1/user/details");
    await new Promise(r => setTimeout(r, 5000));
    const data = response.data;
    return data;
}

export default async function UserCard2() {

    const data = await getData();

    return (
        <div>
            {data.name}
        </div>
    )
}