import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, FlatList} from 'react-native';
import { FlatGrid } from 'react-native-super-grid';
import { Dimensions } from "react-native";

const Notification =() => {

  const { width, height } = Dimensions.get("window");

  const [items, setItems] = React.useState([
    { name: 'TURQUOISE', code: '#1abc9c' },
    { name: 'EMERALD', code: '#2ecc71' },
    { name: 'PETER RIVER', code: '#3498db' },
    { name: 'AMETHYST', code: '#9b59b6' },
    { name: 'WET ASPHALT', code: '#34495e' },
    { name: 'GREEN SEA', code: '#16a085' },
    { name: 'NEPHRITIS', code: '#27ae60' },
    { name: 'BELIZE HOLE', code: '#2980b9' },
    { name: 'WISTERIA', code: '#8e44ad' },
    { name: 'MIDNIGHT BLUE', code: '#2c3e50' },
    { name: 'SUN FLOWER', code: '#f1c40f' },
    { name: 'CARROT', code: '#e67e22' },
    { name: 'ALIZARIN', code: '#e74c3c' },
    { name: 'CLOUDS', code: '#ecf0f1' },
    { name: 'CONCRETE', code: '#95a5a6' },
    { name: 'ORANGE', code: '#f39c12' },
    { name: 'PUMPKIN', code: '#d35400' },
    { name: 'POMEGRANATE', code: '#c0392b' },
    { name: 'SILVER', code: '#bdc3c7' },
    { name: 'ASBESTOS', code: '#7f8c8d' },
  ]);

  return (
    <View
            style={{
                height: height,
                width: width,
                backgroundColor: "lightgray",
                flex: 1,
            }}>
            <View
                style={{
                    backgroundColor: "black",
                    height: "18%",
                    borderBottomLeftRadius: 20,
                    borderBottomRightRadius: 20,
                    paddingHorizontal: 20,
                }}>
                
                <View style={{
                    width: "100%",
                    marginTop:'25%'
                }}>
                    <Text style={{
                        fontSize: 28,
                        color: "#FFF",
                        fontWeight: "bold",
                        textAlign:'center',
                    }}>Notifications</Text>
                </View>
                </View>
                {/* <FlatGrid
      itemDimension={150}
      data={items}
      style={styles.gridView}
      // staticDimension={300}
      // fixed
      spacing={5}
      renderItem={({ item }) => (
        <View style={[styles.itemContainer, { backgroundColor: item.code }]}>
          <TouchableOpacity>
          <Text style={styles.itemName}>{item.name}</Text>
          <Text style={styles.itemCode}>{item.code}</Text>
          </TouchableOpacity>
        </View>
      )}
    /> */}
    <FlatList
            keyExtractor={(item) => item.code}
            data={items}
            renderItem={({item}) => (
              //<TouchableOpacity>
                <Text style={{
                    marginTop:20,
                    padding:20,
                    backgroundColor:'#FFF',
                    fontSize:16
                }}>
                  {item.name}
                  </Text>
                  //</TouchableOpacity>
            )}
            />
                </View>
  )
}

export default Notification

const styles = StyleSheet.create({
    gridView: {
      marginTop: 10,
      flex: 1,
    },
    itemContainer: {
      justifyContent: 'flex-end',
      borderRadius: 5,
      padding: 10,
      height: 150,
    },
    itemName: {
      fontSize: 16,
      color: '#fff',
      fontWeight: '600',
    },
    itemCode: {
      fontWeight: '600',
      fontSize: 12,
      color: '#fff',
    },
  });