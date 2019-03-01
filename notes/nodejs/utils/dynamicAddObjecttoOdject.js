let arr  = [{key:"ID", value:"sdf324324"},{}, {key:"Key In", value:"sdfee"}, {key:"process Definition", value:"step 1"}];

let ret={};

for(let i = 0; i < arr.length; i++){
    if(arr[i].key === undefined && arr[i].value === undefined){
       continue;
    }
    ret[arr[i].key]=arr[i].value;
}
console.log(ret)