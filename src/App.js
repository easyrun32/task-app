import Data from "./data.js";
import React, { Component } from "react";
import Column from "./component/column/column.component";
import { DragDropContext } from "react-beautiful-dnd";
export class App extends Component {
  state = Data;

  /*
    OnDragStart when the drag first starts
    OnDragUpdate when something changes
    OnDragEnd called at the end of a drag
    */
  /*
   sync to update the state to reflect drag result
   */
  onDragEnd = (result) => {
    const { destination, source, draggableId } = result;

    if (!destination) {
      console.log("where ya going");
      return;
    }
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      console.log("You just dragged it to the same spot ;/");
      return;
    }

    const column = this.state.columns[source.droppableId];

    const newTaskIds = Array.from(column.taskIds);
    // console.log(newTaskIds);
    newTaskIds.splice(source.index, 1);
    // console.log(newTaskIds);
    newTaskIds.splice(destination.index, 0, draggableId);
    // console.log(newTaskIds, "hello");
    const newColumn = {
      ...column,
      taskIds: newTaskIds,
    };

    const newState = {
      ...this.state,
      columns: {
        ...this.state.columns,
        [newColumn.id]: newColumn,
      },
    };
    this.setState(newState);
  };

  render() {
    /*
    Wraps the part of your application you want to
     have drag and drop enabled for
    */
    // this.state.columnOrder.map((columnId) => {
    //   const column = this.state.columns[columnId];
    //   const tasks = column.taskIds.map((taskId) => this.state.tasks[taskId]);
    //   console.log(column);
    //   console.log(tasks);
    //   console.log(column.id);
    // });

    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
        {this.state.columnOrder.map((columnId) => {
          const column = this.state.columns[columnId];
          const tasks = column.taskIds.map(
            (taskId) => this.state.tasks[taskId]
          );

          return <Column key={column.id} column={column} tasks={tasks} />;
        })}
      </DragDropContext>
    );
  }
}
export default App;
