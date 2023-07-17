export async function load({ params }) {
    const url = 'https://newticket20230717111414.azurewebsites.net/api/service_types';
    let res = await fetch(url)
    let list = await res.json()
    return { list };
}
