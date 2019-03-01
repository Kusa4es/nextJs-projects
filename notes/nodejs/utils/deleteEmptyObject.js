
 function deleteEmptyObject(tmp){      
    let aryAry = []
    aryAry.push(tmp);    
    let a = aryAry[0], r = [];
    for(let i=0,l=a.length; i<l; i++){
        let n = 0, o = a[i];
      for(let q in o){
        n++;
      }
      if(n > 0){
       r.push(o);
      }
    }    
    return r;   
}