
import { Component } from "react";

export default class CCTable extends Component{
    constructor(props){
        super(props)

        this.state={
            width:0,
        }
        
    }


    Change50 = () => {
        this.setState({
            width : '50%'
        })
    }
    Change100 = () => {
        this.setState({
            width : '100%'
        }) 
    }

    render(){
        return(
            <div>
                    <table border={1}
                    onClick={this.Change50}
                    onDoubleClick={this.Change100}
                    style={{
                        borderStyle: 'solid',
                        borderColor: 'white',
                        borderWidth: '3px',
                        width:this.state.width

                    }}>
                        <tr>
                            <td>1</td>
                            <td>2</td>
                            <td>3</td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>5</td>
                            <td>6</td>
                        </tr>
                        
                    </table>
            </div>
        )
    }
}
