  const data = function () {
    
    let obj = {
        query:{
            processId: "some process",
            assignee:"BTBE",
            taskVariables:[],
            processDevVariables:[],
            otherVariables:[],
            orQueries:[]
        }
    }

    return obj;
}

const selectValue = ["ProcessId", "Assignee"]
const v_selectValue = ["processId", "assignee"]


module.exports = {data, selectValue};