import * as Location from 'expo-location';
import React from 'react';
import Loading from './Loading';
import { Alert } from 'react-native';
import axios from 'axios';
import Weather from './Weather';

const API_KEY = '79d51d7b1c4eb6317c57227dba5fcb94'


export default class extends React.Component {
  state = {
    isLoading: true
  };

  getWeather = async (latitude, longitude) => {
    const { data: { main: { temp, condition, feels_like }, weather, name }} = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`);
    this.setState({
      isLoading: false,
      temp: temp,
      conditions: weather[0].main,
      feels_like: feels_like,
      name: name
    });
  };

  getLocation = async () => {
    try {
      await Location.requestForegroundPermissionsAsync();
      const { coords: { latitude, longitude } } = await Location.getCurrentPositionAsync();
      this.getWeather(latitude, longitude);
    } catch (error) {
      Alert.alert("Can't find you.", "So sad");
    }
  }

  componentDidMount() {
    this.getLocation();
  }

  render() {
    const { isLoading, temp, conditions } = this.state;
    return (
      isLoading ? <Loading /> : <Weather temp={Math.round(temp)} conditions={conditions}/>
    );
  }
}
