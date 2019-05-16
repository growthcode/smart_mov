import React, { PropTypes } from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'

NavBarItem.propTypes = {
  // iconName: PropTypes.string.isRequired,
  // onPress: PropTypes.func.isRequired,
}

export default function NavBarItem (props) {
  const { iconName, onPress } = props

  return (
    <TouchableOpacity
      style={ { paddingHorizontal: 20 } }
      onPress={ () => onPress() }>
      <FontAwesome
        name={ iconName }
        style={ { fontSize: 25, color: '#fff' } }/>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({

})
