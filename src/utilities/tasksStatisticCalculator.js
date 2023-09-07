export const tasksStatisticCalculator = data => {
  //   const allTasks = todo + inprogress + done;
  //   const todoPercent = (todo / allTasks) * 100;
  //   const inprogressPercent = (inprogress / allTasks) * 100;
  //   const donePercent = (done / allTasks) * 100;
  //   if (type === 'todo') return todoPercent;
  //   if (type === ' inprogress') return inprogressPercent;
  //   if (type === 'donePercent') return donePercent;
  const totalTasks = data.length;
  // console.log(totalTasks);
  const statuses = {
    'to-do': { name: 'To Do', day: 0, month: 0 },
    'in-progress': { name: 'In Progress', day: 0, month: 0 },
    done: { name: 'Done', day: 0, month: 0 },
  };

  data.forEach(task => {
    const status = task.status;
    if (statuses[status]) {
      statuses[status].day += 1;
      statuses[status].month += 1;
    }
  });

  Object.values(statuses).forEach(status => {
    status.day = (status.day / totalTasks) * 100;
    status.month = (status.month / totalTasks) * 100;
  });

  const resultArray = Object.values(statuses);
  return resultArray;
};

/**"розрахунок данних для графіка:

allTasksByDay=todoByDay+inprogressByDay+doneByDay
todoByDay%=todoByDay/allTasksByDay
inprogressByDay%=inprogressByDay/allTasksByDay
doneByDay%=doneByDay/allTasksByDay

відповідний розрахунок виконується для колекції тасок за місяць" */
