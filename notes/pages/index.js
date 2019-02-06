import React from 'react';

class Index extends React.Component {
    constructor(){
        super()
        this.state = {
            tableHeaders:["Number","Start", "End","SomeValue", "Config"],
            tableBody: {
                0:{
                    Number:"aNum", 
                    Start:"bStart", 
                    End:"cEnd", 
                    SomeValue:"dSomeVal",
                    Config:"cConf"
                },
                1:{
                    Number:"aNumTwo", 
                    Start:"bStartTwo", 
                    End:"cEndTwo", 
                    SomeValue:"dSomeValTwo",
                    Config:"cConTwo"
                }
            }
        }
    }

    show=(e)=>{
   
        console.log(Object.keys(this.state.tableBody))
    }

    render(){
        return(
            <div>
                <button onClick={this.show}>
                    show 
                </button>
                <div>
                    
                <table style={{display:"flex", flexDirection:"column"}}>
                    <thead style={{background: "#fc0", display:"flex", flexDirection:"row"}}>
                        {this.state.tableHeaders.map((val) => {
                            return(
                                <tr>
                                    <td>{val}</td>
                                </tr>
                            )
                        })}
                    </thead>
                    <tbody style={{background: "#ccc", display:"flex"}}>
                        {Object.values(this.state.tableBody).map((val, i) => {
                            debugger
                             let arr = this.state.tableHeaders;
                            // let key = Object.keys(this.state.tableBody);
                             let count = 0;
                           return arr.map((arrVal) => {
                               debugger
                               count++;
                               if(count <= arr.length){
                                return(
                                    <tr key={i}>
                                        <td>{val[arrVal]}</td>
                                    </tr>
                                ) 
                               }else{
                                   return <br></br>
                               }
                               
                            })
                           
                        })}
                    </tbody>
                </table>
                </div>

            </div>

        )
    }
}

export  default Index;