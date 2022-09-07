import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import CrearCuestionarioScreen from './CrearCuestionarioScreen'
import VerCuestionariosScreen from './VerCuestionariosScreen'

const Tab = createBottomTabNavigator();

const HomeScreen = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen
            name="Mis cuestionarios"
            component={VerCuestionariosScreen}
            // options={screenOptions('calendar', 'Calendario')}
            />
            <Tab.Screen
            name="Crear cuestionario"
            component={CrearCuestionarioScreen}
            // options={screenOptions('notifications', 'Notificaciones')} 
            />
      </Tab.Navigator>
    )
}

export default HomeScreen