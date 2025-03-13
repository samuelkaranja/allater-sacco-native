import React, {useState} from 'react';
import {ScrollView, StyleSheet, View, Text} from 'react-native';
import {Todo} from './src/types';
import TodoInput from './src/components/TodoInput';
import TodoList from './src/components/TodoList';
// import Basic from './src/components/Basic';
// import TextInputComponent from './src/components/TextInput';
// import ScrollViewComponent from './src/components/ScrollView';
// import StylingDemo from './src/components/Styling';
// import FlexLayout from './src/components/FlexLayout';
// import TouchableComponents from './src/components/Touchable';

function App(): React.JSX.Element {
  const [todoList, setTodoList] = useState<Todo[]>([]);

  const addTodo = (text: string) => {
    setTodoList([
      ...todoList,
      {
        id: Date.now().toString(),
        text,
        completed: false,
      },
    ]);
  };

  const deleteTodo = (id: string) => {
    setTodoList(todoList.filter(item => item.id !== id));
  };

  const toggleTodo = (id: string) => {
    setTodoList(
      todoList.map(item =>
        item.id === id
          ? {
              ...item,
              completed: !item.completed,
            }
          : item,
      ),
    );
  };

  const editTodo = (id: string, newText: string) => {
    setTodoList(
      todoList.map(item =>
        item.id === id
          ? {
              ...item,
              text: newText,
            }
          : item,
      ),
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Todo App</Text>
      <TodoInput onAddTodo={addTodo} />
      <TodoList
        todoList={todoList}
        onEditTodo={editTodo}
        onDeleteTodo={deleteTodo}
        onToggleTodo={toggleTodo}
      />
    </View>

    // <View style={styles.container}>
    //   <ScrollView
    //     nestedScrollEnabled={true}
    //     contentContainerStyle={styles.scrollViewContent}>
    //     <Basic />
    //     <TextInputComponent />
    //     <ScrollViewComponent />
    //     <StylingDemo />
    //     <FlexLayout />
    //     <TouchableComponents />
    //   </ScrollView>
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },

  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },

  // container: {
  //   marginBottom: 20,
  // },
  // scrollViewContent: {
  //   padding: 20,
  // },
});

export default App;
