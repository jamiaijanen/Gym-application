import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, TextInput, Button } from 'react-native';
import React, { useState, useEffect } from 'react';
import * as SQLite from 'expo-sqlite';

export default function Trainings() {
    
    const [training, setTraining] = useState('');
    const [length, setLength] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [allTrainings, setAllTrainings] = useState([]);
    const database = SQLite.openDatabase('allTrainings.db');

    useEffect(() => {
        database.transaction(tx => {
          tx.executeSql('create table if not exists allTrainings (id integer primary key not null, training text, length text, date text, time text);');
        }, null, updateList);
      }, []);
    
      const save = () => {
        database.transaction(tx => {
          tx.executeSql('insert into allTrainings (training, length, date, time) values (?, ?, ?, ?);',
            [training, length, date, time]);
            setTraining('');
            setLength('');
            setDate('')
            setTime('');
        }, null, updateList)
      }
    
      const updateList = () => {
        database.transaction(tx => {
          tx.executeSql('select * from allTrainings;', [], (_, { rows })=>
          setAllTrainings(rows._array)
          );
        }, null, null);
      }
    
      const deleteItem = (id) => {
        database.transaction(tx => {
          tx.executeSql('delete from allTrainings where id = ?;', [id]
          );
        }, null, updateList)
      }

      return (
        <View style={styles.container}>
            <TextInput style={styles.input} onChangeText={training => setTraining(training)} value={training} placeholder="Training" />
            <TextInput style={styles.input} onChangeText={length => setLength(length)} value={length} placeholder="Length" />
            <TextInput style={styles.input} onChangeText={date => setDate(date)} value={date} placeholder="Date" />
            <TextInput style={styles.input} onChangeText={time => setTime(time)} value={time} placeholder="Time" />
            <Button onPress={save} title="save" />
            <Text style={styles.text}>Trainings</Text>
            <FlatList style={{backgroundColor: '#4CA9DE', width: '100%'}}
                keyExtractor={item => item.id.toString()}
                renderItem={({item}) =>
                    <View style={styles.listcontainer}>
                        <Text style={styles.gridFontSize}>{item.training} </Text>
                        <Text style={styles.gridFontSize}>{item.length}</Text>
                        <Text style={styles.gridFontSize}>{item.date}</Text>
                        <Text style={styles.gridFontSize}>{item.time}</Text>
                        <Button title='Del' onPress={() => deleteItem(item.id)} color='#FF0000' />
                    </View>}
                data={allTrainings}
            />
            <StatusBar style="auto" />
        </View>
      )
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    input: {
        height: 40,
        width: 240,
        margin: 12,
        borderWidth: 1,
        padding: 10
      },
    listcontainer: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 20,
        marginLeft: 5,
        marginRight: 5,
        padding: 5,
       },
    text: {
        marginTop: 20,
        fontWeight: 'bold',
        fontSize: 30,
      },
    gridFontSize: {
        fontSize: 10,
        fontWeight: 'bold'
    }
  });
  