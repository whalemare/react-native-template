import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import { observer } from 'mobx-react-lite'
import React from 'react'
import { StyleProp, ViewStyle } from 'react-native'

import { ScreenName } from '../navigation/model/ScreenName'
import { screens } from '../navigation/model/screens'

interface BottomTabsNavigationProps {
  style?: StyleProp<ViewStyle>
}

const Tab = createBottomTabNavigator()

const tabNames = [ScreenName.Temp]

export const BottomTabsNavigation = observer<BottomTabsNavigationProps>(() => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        {tabNames.map(name => {
          return <Tab.Screen getComponent={screens[name]} key={name} name="name" />
        })}
      </Tab.Navigator>
    </NavigationContainer>
  )
})
