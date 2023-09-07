export const handleFetchTasksFulfilled = (state, { payload }) => {
  state.tasks = payload;
};

export const handleAddTaskFulfilled = (state, { payload }) => {
  state.tasks.push(payload);
};

export const handleUpdateTaskFulfilled = (state, { payload }) => {
  const index = state.tasks.findIndex(item => item.id === payload.id);
  state.tasks.splice(index, 1, payload);
};

export const handleDeleteTaskFulfilled = (state, { payload }) => {
  const index = state.tasks.findIndex(item => item.id === payload);
  state.tasks.splice(index, 1);
};

export const handlePending = state => {
  state.isLoading = true;
};

export const handleError = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

export const handleFulfilled = state => {
  state.isLoading = false;
  state.error = null;
};
