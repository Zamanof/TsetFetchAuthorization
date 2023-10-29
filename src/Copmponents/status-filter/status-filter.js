import React, {Component} from "react";
import './status-filter.css'
class StatusFilter extends Component{
    render(){
        const clazz = this.props.active
        ? "btn btn-info btn-outline-secondary"
        : "btn  btn-outline-secondary"
        return(
            <>
                <button
                    type="button"
                    className= {clazz}
                >
                    {this.props.text}
                </button>
            </>
        )
    }
}



const StatusFilterFunc =  (props)=>{
    const clazz =props.active
        ? "btn btn-info btn-outline-secondary"
        : "btn  btn-outline-secondary"
    return(
        <>
            <button
                type="button"
            className= {clazz}
            >
                {props.text}
            </button>
        </>
    )
}

export default StatusFilter