export function convertToDatetimeLocal(isoString:string){
    const date = new Date(isoString);
    const year = date.getFullYear();
    const month = `${date.getMonth() + 1}`.padStart(2, "0");
    const day = `${date.getDate()}`.padStart(2, "0");
    const hours = `${date.getHours()}`.padStart(2, "0");
    const minutes = `${date.getMinutes()}`.padStart(2, "0");

    return `${year}-${month}-${day}T${hours}:${minutes}`;
}

export const boolenify = (value:string):boolean=>{
    const truthy:string[]=[
        'on',
        'true',
        'True',
        '1'
    ]
    return truthy.includes(value)
}