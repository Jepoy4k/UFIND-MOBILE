import React from 'react'
import { TextInput, View, Text } from 'react-native'

function InputFields({title, label, hidden, onchange, styles, styles2, value}) {
  return (
    <View>
        <Text className={styles}>{label}</Text>
        <View className={`bg-white py-2 rounded-lg px-3 + ${styles2}`}>
            <TextInput secureTextEntry={hidden} value={value} onChangeText={onchange} className="text-black text-md" placeholder={title}/>
        </View>
    </View>
  
  )
}

export default InputFields