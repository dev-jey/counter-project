import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Button
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Modal from 'react-native-modal';


const appName = 'Simple Counter';
class HomeScreen extends React.Component {
  initialState = {
    counterA: 0,
    counterB: 0,
  }

  toggleModal = () => {
    this.setState({
      ...this.initialState,
      isModalVisible: !this.state.isModalVisible
    });
  };

  state = {
    ...this.initialState
  }
  
  render() {
    const { counterA, counterB } = this.state;
    return (
      <View style={styles.container}>

        <Modal isVisible={this.state.isModalVisible}>
          <View style={{ flex: 1 }}  style={styles.container}>
            <Text>{this.winText}</Text>
            <Button title="Restart Game" onPress={this.toggleModal} />
          </View>
        </Modal>
        <Text style={styles.counter}>Team A score: {counterA}</Text>

        <Text style={styles.counter}>Team B score: {counterB}</Text>
        <TouchableOpacity
          style={styles.floatingButton2}
          onPress={() => this.onIncrementA()}
        >
          <Text>Team A</Text>
          <Icon name="plus" size={20} color="#090" />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.floatingButton}
          onPress={() => this.onIncrementB()}
        >
          <Text>Team B</Text>
          <Icon name="plus" size={20} color="#900" />
        </TouchableOpacity>
      </View>
    );
  }
  onIncrementA = () => {
    if (this.state.counterA === 9) {
      this.winText = 'Team A won with 10 points'
      this.toggleModal()
    } else {
      this.setState({
        counterA: this.state.counterA + 1,
      })
    }
  }

  resetState = () => {
    this.setState({
      ...this.initialState
    })
  }

  onIncrementB = () => {
    if (this.state.counterB === 9) {
      this.winText = 'Team B won with 10 points'
      this.toggleModal()
    } else {
      this.setState({
        counterB: this.state.counterB + 1,
      })
    }
  };
}
const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: () => ({
      title: appName,
    }),
  },
});
const AppContainer = createAppContainer(AppNavigator);
export default function App() {
  return (
    <AppContainer />
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  floatingButton: {
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.2)',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 15,
    right: 15,
    width: 100,
    height: 100,
    backgroundColor: '#fff',
    borderRadius: 100,
  },
  floatingButton2: {
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.2)',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 15,
    left: 15,
    width: 100,
    height: 100,
    backgroundColor: '#fff',
    borderRadius: 100,
  },
  counter: {
    fontSize: 25,
  }
});