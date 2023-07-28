export function useJsonFormatter() {

    const beautify = (jsonData : String, space : number = 4) => JSON.stringify(jsonData, null, space);
    const minify = (jsonData : String) => JSON.stringify(jsonData, null, 0)

    return { beautify, minify }
}