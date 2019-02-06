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
                    
                <table >
                    <thead style={{background: "#fc0"}}>
                        {this.state.tableHeaders.map((val) => {
                            return(
                                <div> 
                                    <tr>
                                        <td>{val}</td>
                                    </tr>
                                </div>
                            )
                        })}
                    </thead>
                    <tbody style={{background: "#ccc"}}>
                        {Object.values(this.state.tableBody).map((val, i) => {
                            debugger
                             let arr = this.state.tableHeaders;
                           return arr.map((arrVal) => {
                               debugger
                                return(
                                    <tr key={i}>
                                        <td>{val[arrVal]}</td>
                                    </tr>
                                ) 
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