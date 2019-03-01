let arr  = [{key:"ID", value:"sdf324324"},{}, {key:"Key In", value:"sdfee"}, {key:"process Definition", value:"step 1"}];

let ret={};

for(let i = 0; i < arr.length; i++){
    if(arr[i].key === undefined && arr[i].value === undefined){
       continue;
    }
    ret[arr[i].key]=arr[i].value;
}
console.log(ret)



// OR

{
    let arr  = [{key:"ID", value:"sdf324324"},{}, {key:"Key In", value:"sdfee"}, {key:"process Definition", value:"step 1"}];

    let ret = {};
    let orQueries = [];
    let query = {
    orQueries
    };

    for(let i = 0; i < arr.length; i++){
    if(arr[i].key === undefined && arr[i].value === undefined){
    continue;
    }
    ret[arr[i].key]=arr[i].value;
    }

    let isAny = true

    isAny ? query = ret : orQueries.push(ret);

    let body = {
    resourceType: "Task",
    name: "namesome",
    owner: "jonny1",
    query
    }


    console.log(body)
}