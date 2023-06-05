const loadedAt = `Medicaid SDK loaded at \n${Date()}`;

let items=[] // caching here

async function getItems(){
    if(items.length>0){
        return items // if cached no need to retrieve again
    }else{
        items=await (await fetch('https://data.medicaid.gov/api/1/metastore/schemas/dataset/items')).json()
        return items
    }
}

export{
    loadedAt,
    items,
    getItems
}