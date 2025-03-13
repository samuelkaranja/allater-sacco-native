import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {Todo} from '../types';
import TodoItem from './TodoItem';

interface TodoListProps {
  todoList: Todo[];
  onEditTodo: (id: string, newText: string) => void;
  onDeleteTodo: (id: string) => void;
  onToggleTodo: (id: string) => void;
}

const TodoList: React.FC<TodoListProps> = ({
  todoList,
  onEditTodo,
  onDeleteTodo,
  onToggleTodo,
}) => {
  return (
    <ScrollView style={styles.container}>
      {todoList.map(todo => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onEdit={newText => onEditTodo(todo?.id, newText)}
          onDelete={() => onDeleteTodo(todo?.id)}
          onToggle={() => onToggleTodo(todo?.id)}
        />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default TodoList;
