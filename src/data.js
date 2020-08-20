const Data = {
  tasks: {
    "task-1": { id: "task-1", content: "i am task-1" },
    "task-2": { id: "task-2", content: "i am task-2" },
  },

  columns: {
    "column-1": {
      id: "column-1",
      title: "To Do",
      taskIds: ["task-1", "task-2"],
    },
  },

  columnOrder: ["column-1"],
};
export default Data;
