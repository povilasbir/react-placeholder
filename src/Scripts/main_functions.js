export async function getJson(source) {
    const resPromise = await fetch(source)
    const json = await resPromise.json()
    return json
}