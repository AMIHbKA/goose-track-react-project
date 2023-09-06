import { createSlice, isAnyOf }  from "@reduxjs/toolkit";
import { handleAddTaskFulfilled, handleDeleteTaskFulfilled, handleError, handleFetchTasksFulfilled, handleFulfilled, handlePending, handleUpdateTaskFulfilled } from "./handlers";
import { addTask, deleteTask, fetchTasks, updateTask } from "./operations";

const taskSlice = createSlice({
    name: 'tasks',
    initialState: {
        tasks: [],
        isLoading: false,
        error: null,
    },
    extraReducers:builder => {
        builder
        .addCase(fetchTasks.fulfilled, handleFetchTasksFulfilled)
        .addCase(addTask.fulfilled, handleAddTaskFulfilled)
        .addCase(updateTask.fulfilled, handleUpdateTaskFulfilled)
        .addCase(deleteTask.fulfilled, handleDeleteTaskFulfilled)
        .addMatcher(
            isAnyOf(
              fetchTasks.pending,
              addTask.pending,
              updateTask.pending,
              deleteTask.pending,
            ),
            handlePending
          )
          .addMatcher(
            isAnyOf(
              fetchTasks.rejected,
              addTask.rejected,
              updateTask.rejected,
              deleteTask.rejected,
            ),
            handleError
          )
          .addMatcher(
            isAnyOf(
              fetchTasks.fulfilled,
              addTask.fulfilled,
              updateTask.fulfilled,
              deleteTask.fulfilled,
            ),
            handleFulfilled
          )
            }
})

export const taskReducer = taskSlice.reducer;