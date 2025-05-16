import { Tabs } from "expo-router";
import { Ionicons } from '@expo/vector-icons';

export default function TabsLayout() {
    return(
      <Tabs screenOptions={{tabBarActiveTintColor: 'blue'}}>
         <Tabs.Screen
          name="index"
          options= {{
            title: 'Inicio',
            tabBarIcon: ({color, size}) => <Ionicons name='home-outline'  size={size} color={color}/>
            
          }}
      />
         <Tabs.Screen
          name="settings"
          options= {{
            title: 'Configurações',
            tabBarIcon: ({ color ,size }) => <Ionicons name='settings-outline'  size={size} color={color}/> 
          }}
          />
      </Tabs>
    );
}
