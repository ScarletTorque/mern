import React, { useState } from 'react';


const List = () => {
    let [taskName, setTaskName] = useState("");

    let [taskList, setTaskList] = useState([]);

    const submitList = (e) => {

        e.preventDefault();

        let object = {taskName};

        setTaskList([object, ...taskList])

        setTaskName("");
    }

    const toggleCompleted = (e, idx)=>{
        let [...copyList] = taskList;

        copyList[idx].completed = e.target.checked;

        setTaskList(copyList);
    }

    const deleteItem = (e, idx)=>{
        let filteredCopy = taskList.filter((list, i)=>{
            return i != idx
        })
        setTaskList(filteredCopy);
    }

    return (
        <>
            <form onSubmit={submitList}>
                <div className="form-flex mb-2">
                    <label htmlFor="">List Item</label>
                    <input type="text" onChange={(e) => setTaskName(e.target.value)} className="form-control-lg" value={taskName}/>
                    <input type="submit" value="Add" className='mt-2 btn btn-primary' />
                </div>
            </form>
            <hr />
            <div>
                {
                    taskList.map((listObj, idx)=>{
                        return(
                            <div key={idx}>
                                <h4 style={{textDecoration: listObj.completed? "line-through": "none"}}>{listObj.taskName}</h4>
                                <p>Completed? <input type="checkbox" name="" id="" onChange={(e)=>toggleCompleted(e, idx)} /></p>
                                <button onClick={(e)=>{deleteItem(e,idx)}}>Delete</button>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}



export default List;