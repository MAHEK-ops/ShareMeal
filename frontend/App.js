import React from 'react';
import { Provider as PaperProvider, DefaultTheme, configureFonts } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import VolunteerDashboard from './src/Volunteer/components/VolunteerDashboard';

// Configure the theme
const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#3f51b5',
    accent: '#f50057',
    background: '#f5f5f5',
    surface: '#ffffff',
    text: '#000000',
    error: '#f44336',
  },
  roundness: 8,
};

function App() {
  return (
    <SafeAreaProvider>
      <PaperProvider theme={theme}>
        <StatusBar style="auto" />
        <VolunteerDashboard />
      </PaperProvider>
    </SafeAreaProvider>
  );
}

export default App;
