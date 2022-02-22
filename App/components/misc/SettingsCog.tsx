import { useNavigation } from '@react-navigation/core'
import { StackNavigationProp } from '@react-navigation/stack'
import React from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import { ColorPallet } from '../../theme'
import { CredentialStackParams, HomeStackParams, Stacks } from '../../types/navigators'

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 16,
  },
})

const SettingsCog: React.FC = () => {
  const navigation = useNavigation<StackNavigationProp<HomeStackParams> & StackNavigationProp<CredentialStackParams>>()

  return (
    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate(Stacks.SettingStack)}>
      <Icon name="cog" size={24} color={ColorPallet.grayscale.white}></Icon>
    </TouchableOpacity>
  )
}

export default SettingsCog
