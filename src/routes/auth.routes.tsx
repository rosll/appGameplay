import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { Signin } from '../pages/Signin'
import { Home } from '../pages/Home'

const { Navigator, Screen } = createStackNavigator()

export function AuthRoutes(){
  return (
    <Navigator>
      <Screen
        name='Signin'
        component={Signin}
      />
      <Screen
        name='Home'
        component={Home}
      />
    </Navigator>
  )
}