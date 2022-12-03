import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  useColorScheme,
} from 'react-native';
import React, {useState} from 'react';
const CategoryButton = [
  {
    id: 0,
    Category: 'Sports',
  },
  {
    id: 1,
    Category: 'Science',
  },
  {
    id: 2,
    Category: 'General',
  },
  {
    id: 3,
    Category: 'Business',
  },
];
export default function CategoryButtons(props) {
  const [activeTab, setActiveTab] = useState('Sports');
  return (
    <View style={styles.headerTabs}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {CategoryButton.map((role, id) => (
          <HeaderButton
            key={id}
            text={role.Category}
            activeTab={activeTab}
            setCategory={props.setCategory}
            setActiveTab={setActiveTab}
          />
        ))}
      </ScrollView>
    </View>
  );
}

const HeaderButton = props => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <TouchableOpacity
      style={{
        paddingHorizontal: 16,
        flexDirection: 'row',
        alignItems: 'center',
      }}
      onPress={() => {
        props.setActiveTab(props.text);
        props.setCategory(props.text);
      }}>
      <Text
        style={{
          color: isDarkMode
            ? props.activeTab === props.text
              ? 'white'
              : 'gray'
            : props.activeTab === props.text
            ? 'black'
            : 'gray',
          fontWeight: props.activeTab === props.text ? 'bold' : '100',
          fontSize: props.activeTab === props.text ? 25 : 20,
        }}>
        {props.text}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  headerTabs: {
    flexDirection: 'row',
    alignSelf: 'center',
    margin: 10,
  },
});
