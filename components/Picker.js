
import { ScrollView, Text, View, StyleSheet,} from "react-native";

const PredictionPicker =()=>{
  const arr=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
  return(
    <View style={{backgroundColor:"white", maxHeight:"40%", overflowY:"auto !important", padding:10, width:"100%", textAlign:"center"}}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {
          arr.map((item)=>{
            return <Text style={[styles.title, {backgroundColor:item==2 || item==4 || item==6 || item==8 || item==10 || item==12 || item==14 || item==16 || item==18 || item==20?"#D3D3D3":"white", color:item==2 || item==4 || item==6 || item==8 || item==10 || item==12 || item==14 || item==16 || item==18 || item==20?"#333333":"#D3D3D3",}]} key={item}>{item}</Text>
          })
        }
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 4,
    padding: 4,
  },
  title: {
    fontSize: 24,
    fontWeight: "600",
    color: "#333333",
    marginBottom: 6,
    fontFamily:'Montserrat-SemiBold',
    backgroundColor:"yellow",
    textAlign:"center",
    padding:12
  },

});

export default PredictionPicker;