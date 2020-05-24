import axios from 'axios';

const api = axios.create({
  // baseURL: 'localhost:3333'
  baseURL: 'http://10.0.2.2:3333',
});

export default api;

/**
 * iOS com emulador: localhost
 * iOS com físico: IP da máquina
 * Android com emulador: adb reverse tcp:3333 tcp:3333 (baseURL: 'localhost')
 * Android com emulador: Android Studio (baseURL: '10.0.2.2')
 * Android com emulador: Android Studio (baseURL: '10.0.3.2')
 * Android com físico: IP da máquina
 */
