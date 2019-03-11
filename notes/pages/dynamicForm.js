import React from 'react';
import {data, selectValue, v_selectValue} from'../lib/model';
import lodash from 'lodash';

class DynamicForm extends React.Component {
    constructor(){
        super()
        this.state = {
            modelData:[]
        }
        
    }

    setModelData(value){
        if(!lodash.isEqual(value, this.state.modelData)){
            this.setState({
                modelData:value
            });
        }        
    }


    

    render(){
        debugger
        let model = data();
        let { modelData } = this.state;
        let keys = Object.keys(model.query);
        let values = Object.values(model.query);
        let tmp = [];
        if(keys.length > 4) {
            for(let i = 0; i < keys.length; i++){
                if(values[i] !== undefined){
                   tmp.push({
                        select:keys[i],
                        input:values[i]
                    });
                }
            }        
        }
        if(tmp.length > 0){
            this.setModelData(tmp);
        }
        console.log(this.state.modelData)
        return(
            <div style={{display:"flex", direction:"row"}}>
                <div>
                    <button>add</button>
                </div>
                
                {modelData.length > 4 && 
                    <div>
                        {modelData.map((value, index) => {
                            debugger
                            return(
                                <div key={index} style={{display:"flex", direction:"column"}}>
                                    <div>
                                        <button>delete</button>
                                    </div>

                                    <div>
                                        <select>
                                            <option value={value.select}>{selectValue[index]}</option>                                    
                                        </select>
                                    </div>

                                </div>
                            )
                        })}
                    </div>}


            </div>

        )
    }
}

export  default DynamicForm;