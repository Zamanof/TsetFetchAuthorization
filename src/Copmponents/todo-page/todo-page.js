import React, {Component} from "react";
import TodoService from "../../services/todo-service";
import AppHeader from "../app-header";
import SearchInput from "../search-input";
import StatusFilter from "../status-filter";
import TaskList from "../task-list";
import ItemAdd from "../item-add";

class TodoPage extends Component {
    service = new TodoService()
    constructor() {
        super();
        this.updateData()
    }
    state = {
        tasks:[],
        searchText: ''
    }
    maxId = 1000;
    addItem = (text)=>{
        // const newItem ={
        //     id:this.maxId++,
        //     text: text
        // }
        // this.setState(({tasks})=>{
        // const newTasks = [...tasks, newItem]
        //     return{
        //     tasks: newTasks
        //     }
        // })
        this.service.addItem(text).then(r => {
            this.updateData()
        });

    }
    deleteItem = (id)=>{
        this.setState(({tasks})=> {
            const index = tasks.findIndex((e) => e.id === id)
            const newList = [...tasks.slice(0, index),
                ...tasks.slice(index+1)]
            return{
                tasks: newList
            }
        })
    }

    onSearchChange = (searchText)=>{
        this.setState({searchText})
    }
    search(tasks, searchText){
        if (searchText.length === 0){
            return tasks;
        }
        return tasks.filter((task)=>
            task.text.toLowerCase().includes(searchText.toLowerCase()))
    }

    updateData = ()=>{
        this.service.getAll()
            .then((data)=> {
                this.setState((st)=>{
                    return{
                        tasks: data
                    }
                })
            })
    }

    onChangeStatus = (id, status)=>{
        this.service.changeStatus(id, status)
    }

    render() {
        const {tasks, searchText} = this.state
        const filteredTasks = this.search(tasks, searchText)
        return(
            <>
                <div className='app-todo'>
                    <AppHeader/>

                    <div className='top-panel d-flex'>
                        <SearchInput
                            placeText={"Search"}
                            onSearchChange={this.onSearchChange}/>
                        <StatusFilter text="All" active={true}/>
                        <StatusFilter text="Active"/>
                        <StatusFilter text="Done"/>
                    </div>

                    <TaskList
                        tasks={filteredTasks}
                        onDeleted = {this.deleteItem}
                        onChecked = {this.onChangeStatus}

                    />
                    <ItemAdd onAdded={this.addItem}/>
                </div>
            </>
        )
    }
}

export default TodoPage