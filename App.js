import { LogBox } from 'react-native';
import MainNavigator from './navigation';

export default function App() {
  LogBox.ignoreAllLogs();

  return (
    <MainNavigator />
  );
}