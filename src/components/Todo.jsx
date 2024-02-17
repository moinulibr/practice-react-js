import React, { useState } from 'react';
import { useRef } from 'react';

const Todo = () => {
    let getInputFieldValue = useRef();
    let [list,setList] = useState([]);
    let [item,setItem] = useState("");
    const submitData = () => {
        let getDataByID = getInputFieldValue.current.value;
        if(getDataByID.length > 0){
            list.push(item);
            setList([...list]);
            //console.log(getDataByID);
            getInputFieldValue.current.focus();
            getInputFieldValue.current.value = '';
        }
    };
    const removeItem = (index) => {
        if( confirm('Are you sure to delete this?') === true  ){
            //console.log(index);
            list.splice(index,1);
            setList([...list]);
        }
    }
    return (
        <div style={{'marginLeft':'200px', 'marginRight':'200px'}}>
        <br/>
        <h4>Todo</h4>
        <hr />
        <table style={{ 'border' : '1px solid gray' }}>
                <tbody>
                <tr>
                    <td>
                        <input type="text" onChange={ (e) => {
                            setItem(e.target.value)
                        }} ref={getInputFieldValue}/>
                    </td>
                    <td>
                        <button onClick={submitData} type='submit'>Submit</button>
                    </td>
                </tr>
                <tr><td style={{ 'textAlign' :'center' }}>All Data</td></tr>
                {
                    list.length > 0 ?
                    (list.map( (value,index,list) => {
                        return (
                            <tr key={index}>
                                <td style={{ 'border' : '1px solid gray' }}>{value}</td>
                                <td style={{ 'border' : '1px solid gray' }}>
                                    <button onClick={ () => {
                                        removeItem(index)
                                    }} style={{ 'color' : 'red' }}>Remove</button>
                                </td>
                            </tr>
                        )
                    }))
                    : (<tr></tr>)
                }
                </tbody>
            </table>
    </div>
    );
};

export default Todo;