import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Todo} from '../types';
import TodoEdit from './TodoEdit';

interface TodoItemProps {
  todo: Todo;
  onEdit: (newText: string) => void;
  onDelete: () => void;
  onToggle: () => void;
}

const TodoItem: React.FC<TodoItemProps> = ({
  todo,
  onEdit,
  onDelete,
  onToggle,
}) => {
  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = (newText: string) => {
    onEdit(newText);
    setIsEditing(false);
  };

  if (isEditing) {
    return (
      <TodoEdit
        todo={todo}
        onSave={handleEdit}
        onCancel={() => setIsEditing(false)}
      />
    );
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.todoText} onPress={onToggle}>
        <Text style={[styles.text, todo?.completed && styles.completedText]}>
          {todo.text}
        </Text>
      </TouchableOpacity>
      <View style={styles.btnContainer}>
        <TouchableOpacity
          style={styles.editBtn}
          onPress={() => setIsEditing(true)}>
          <Text style={styles.btnText}>Edit</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.deleteBtn} onPress={onDelete}>
          <Text style={styles.btnText}>Delete</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
  },

  todoText: {
    flex: 1,
  },

  text: {
    fontSize: 18,
    fontWeight: 'bold',
  },

  completedText: {
    textDecorationLine: 'line-through',
    color: '#888888',
  },

  btnContainer: {
    flexDirection: 'row',
  },

  editBtn: {
    backgroundColor: '#007aff',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
    marginRight: 5,
  },

  deleteBtn: {
    backgroundColor: '#ff3b30',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
  },

  btnText: {
    color: '#fff',
    fontSize: 15,
  },
});

export default TodoItem;
