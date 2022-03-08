import { LogBox } from 'react-native';
import ShopNavigator from './navigation/ShopNavigator';

export default function App() {
  LogBox.ignoreAllLogs();

  return (
    < ShopNavigator />
  );
}