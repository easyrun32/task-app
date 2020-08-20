import React, { Component } from "react";
import "./column.styles.scss";
import Task from "../task/task.component";
import { Droppable } from "react-beautiful-dnd";
import styled from "styled-components";
const TaskList = styled.div`
  padding: 30px;
  transition: background-color 0.2s ease;
  background-color: ${(props) => (props.isDraggingOver ? "skyblue" : "white")};
`;
export default class Column extends Component {
  render() {
    /*
    Droppable returns a function

    Provided is an object that serves
    to Drop props

    innerref use to supply the dom node to a component
    to react-beautiful dnd

    styled  component has a  callback function innerref

    
    */

    return (
      <div className="column__container">
        <h3 className="column__title">{this.props.column.title}</h3>
        {/*
        Documentation for droppable
        https://github.com/atlassian/react-beautiful-dnd/blob/master/docs/api/droppable.md
        */}
        <Droppable droppableId={this.props.column.id}>
          {/* why use ref 
          https://github.com/atlassian/react-beautiful-dnd/blob/master/docs/guides/using-inner-ref.md
          */}
          {(provided, snapshot) => (
            <TaskList
              ref={provided.innerRef}
              {...provided.droppableProps}
              isDraggingOver={snapshot.isDraggingOver}
            >
              {this.props.tasks.map((task, index) => (
                <Task index={index} key={task.id} task={task} />
              ))}
              {provided.placeholder}
            </TaskList>
          )}
        </Droppable>
      </div>
    );
  }
}
