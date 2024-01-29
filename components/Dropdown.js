import React, { useState } from "react";
import RNPickerSelect from "react-native-picker-select";
import { View, Text } from "react-native";

const Dropdown = () => {
  const [selectedValue, setSelectedValue] = useState(null);

  return (
    <View>
      <RNPickerSelect
        placeholder={placeholder}
        items={options}
        onValueChange={(value) => setSelectedValue(value)}
        value={selectedValue}
      />
    </View>
  );
};
export default Dropdown;
