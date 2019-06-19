import React from 'react';
import {data, selectValue, v_selectValue} from'../lib/model';
import lodash from 'lodash';

class DynamicForm extends React.Component {
    constructor(){
        super()
        this.state = {
            modelData:[],
            model: data()
        }
        
    }

    setModelData(value){
        if(!lodash.isEqual(value, this.state.modelData)){
            this.setState({
                modelData:value
            });
        }        
    }

    handleRemove = (index) => (_event) =>{
        let newState = this.state;
        let {modelData} = this.state;
        let {model} = this.state;
        let removeKey = modelData[index].select;

        for(let key in model.query){
            if(removeKey === key){
                delete model.query[removeKey];
            }
        }

        newState.model = model;
        this.setState(newState);
    }

    handleAdd = () =>{
        debugger
        let newState = this.state;
        let addModel = this.state.modelData;
        addModel.push({
            select:"",
            input:""
        })
        newState.modelData = addModel;
        this.setState(newState);
    }


    

    render(){
        debugger
        let {model} = this.state ;
        let { modelData } = this.state;
        let keys = Object.keys(model.query);
        let values = Object.values(model.query);
        let tmp = [];
        if(keys.length > 4) {
            for(let i = 0; i < keys.length; i++){
                if(values[i].length !== 0){
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
                    <button
                        onClick={this.handleAdd}
                    >
                        add
                    </button>
                </div>
                
                {keys.length > 4 && 
                    <div>
                        {modelData.map((value, index) => {
                            debugger
                            return(
                                <div key={index} style={{display:"flex", direction:"column"}}>
                                    <div>
                                        <button
                                            onClick={this.handleRemove(index)}
                                        >
                                            delete
                                        </button>
                                    </div>

                                    <div style={{display:"flex", direction:"column"}}>

                                        <div style={{display:"flex"}}>
                                        <   label>key</label>
                                        </div>

                                        <div style={{display:"flex"}}>
                                            <div></div><select>
                                                <option value={value.select}>{selectValue[index]}</option>                                    
                                            </select>
                                        </div>

                                    </div>

                                    <div style={{display:"flex", direction:"column"}}>
                                        <div style={{display:"flex"}}>
                                            <label>value</label>
                                        </div>
                                        <div style={{display:"flex"}}>
                                            <input/>
                                        </div>
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