import { StatusBar } from 'expo-status-bar';
import { useState } from "react"
import { FlatList, StyleSheet, Text, View, Image, TextInput, TouchableHighlight } from 'react-native';
import{ Picker } from "@react-native-picker/picker" ;
import { workoutDetails } from '/types' ;


export default function App() {
  
  //userState hook is used to manage the state of the variables that are going to change
  const [workouts, setWorkOuts] =useState<workoutDetails[]>();//workouts holds the arrays of workouts
  const [workOutName, setWorkOutName] = useState<string>('');

  //This variable is declared as string because TextInput handles text input as strings.
  const [duration, setDuration] = useState<string>('');
  const [excerisetype, setType] = useState<string>('');
  const [calories, setCalories] = useState<string>('');
  const [totalCalories, setTotalCalories] = useState<string>('');

  //array holding a predefined list of exercise types
  const ExceriseType = ['Cardio', 'Strength','Flexibility', 'Balance', 'Hill'];

  //function adds thenew workout details to the workouts array
  const handleSubmit = () => (
    If(workOutName && duration && excerisetype && excerisetype && calories)
  )
  const newWokout: workoutDetails = ( /" creates a new workout object"/
    workOutName,   /" user input for the new workout added to the new object"/
    duration:parseInt(duration), /" the structure of the workoutDetails object declares durations as numeric,"/
    exercise_Type: excerisetype, /" users selected value for exercise type from thepicker is added to the native"/
    calories: parseInt(calories)) /" the structure of the workoutDetails object declares calories as numeric"/

    setWorkOuts([...workouts, newWokout]); //updating the workouts list with newly added workout object 
    setTotalCalories( totalCalories + newWokout.calories); //updates the totalCalories with the new amount of calorsies
    setWorkOutName('');
    setDuration('');
    setType('None');
    setCalories('');
  

const totalWorkouts = workouts?.length; //holds the total amoun of workouts in the list

return (
  <><view style={styles.summaryContainer}>
    <Text style={styles.summaryHeading}>today'S SUMMARY:</Text>
    <View style={styles.summaryContent}>
    </View>
    <Text style={styles.summaryText}>Total workputs: (totalWorkouts)</Text>
    <Text style={styles.summaryText}>Total Calories Burned: (TotalCalories)
    </></view><Image source /></>(require('./Images/8306965.png')) styles={styles.workoutImage)/>
    </View>

    </Text>
  );
}
     
let styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
function If(arg0: any) {
  throw new Error('Function not implemented.');
}

