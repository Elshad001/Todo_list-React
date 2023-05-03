import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {
      id:1,
      title:'Todo 1',
	    completed:false,
      isEditing:false
    },

    {
      id:2,
      title:'Todo 2',
	    completed:false,
      isEditing:false
    },

    {
      id:3,
      title:'Todo 3',
	    completed:false,
      isEditing:false
    },
  ];

const todoSlice = createSlice({

  

  name: "todos",
  initialState: initialState,
  reducers: {

     addTodo:(state,action)=>
     {
      const newTodo=
      {
        id:Date.now(),
        title:action.payload.title,
        completed:false,
        isEditing:false
      }
      state.push(newTodo)
     },
        
     delTodo:(state,action)=>
     {
    	return state.filter((todo)=>todo.id !== action.payload.id)
        
     },
     
	 isCompleted:(state,action)=>
     {
    	const index=state.findIndex((todo)=>todo.id===action.payload.id)
		  state[index].completed=action.payload.completed
     },

     isEdit:(state,action)=>
     {

      const index=state.findIndex((todo)=>todo.id===action.payload.id)
      state[index].isEditing=action.payload.isEditing
     },
  
     isUpdate:(state,action)=>
     {
      console.log(action.payload)
      const index=state.findIndex((todo)=>todo.id===action.payload.id)
		  state[index].title=action.payload.title 
      state[index].isEditing = action.payload.isEditing
     },

      },
  },
  
);

export const {addTodo,delTodo,isCompleted,isEdit,isUpdate} = todoSlice.actions;
export default todoSlice.reducer;
