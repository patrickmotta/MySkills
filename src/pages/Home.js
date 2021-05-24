import React, { useState, useEffect }from 'react';

import {
   View, 
   Text,
   StyleSheet,
   TextInput,
   Platform,
   ScrollView,
   FlatList,
} from 'react-native'

import { Button } from '../components/Button';
import { SkillCard } from '../components/SkillCard'

export function Home() {

   const [newSkill, setNewSkill] = useState('');
   const [mySkills, setMySkills] = useState([]);
   const [greeting, setGreeting] = useState('');
   function handleAddNewSkill(){
      // No estado tem como recuperar oque esta dentro dele com essa função. Para poder adicionar varias coisas dentro do array
      setMySkills(oldState => [...oldState, newSkill]);
   }


   // useEffect(() =>{
   //    console.log("UseEffect executado")

   // },[mySkills])// nesse caso, toda vez que o mySkills for modigicado, vai executar oque esta dentro do useEffect. Se não tiver nada aqui, so executa quando inicia o app

   
   useEffect(() =>{

      const currentHour = new Date().getHours();
      // console.log(currentHour)
      if(currentHour < 12){
         setGreeting('Bom dia')
      }else if(currentHour >= 12 && currentHour < 18){
         setGreeting('Boa tarde')
      }else{
         setGreeting('Boa noite')
      }

   },[])

   return (

      <View style={styles.container}>
      
         <Text style={styles.title}>
            Bem vindo
         </Text>

         <Text style={styles.greetings}>
            {greeting}
         </Text>

         <TextInput 
            style={styles.input}
            placeholder="Nova skill"
            placeholderTextColor="#555"
            // Toda ver que o texto mutar, sera passado o conteudo para o setNewSkill
            onChangeText={setNewSkill}

         />

         {/* Componente criado por mim, esta na pasta components */}
         {/* No onPress, eu estou passando a função como propriedade para ser executada dentro do componente*/}
         <Button onPress={handleAddNewSkill}/>
         
         
         {/* Adicionando mais estilos/classes de estilos para o componente */}
         <Text style={[styles.title, { marginVertical: 50 }]}>
            Minhas Skills
         </Text>

         
         <FlatList 
            // Essa e onde esta a "lista" de elementos.
            data={mySkills}
            // para colocar a key do elemento e o react native não reclamar
            keyExtractor={item => item}
            // Aqui e onde coloca o componente que sera renderizado.
            renderItem={({ item }) =>(
               <SkillCard skill={item}/>
            )}
            />
         
         
         
         {/* as chaves {} são usada assim quando combinamos codigo jsx(Text, TouchOpacity e etc) com javascript
         {
            // o map percorre cada elemento dentro do vetor.
            mySkills.map(skill => (
               <SkillCard key={skill} skill={skill}/>
            ))
         } */}

         
      </View>

   )
 }

 const styles = StyleSheet.create({
    container: {
       flex: 1,
       backgroundColor: '#121015',
       paddingHorizontal: 30,
       paddingVertical: 70,
    },
    title: {
       color: '#fff',
       fontSize: 24,
       fontWeight:  'bold'
    },
    input: {
       backgroundColor: '#1f1e25',
       color: '#fff',
       fontSize: 18,
      //  A plataforma e igual a ios ? se sim o padding e 15 se não e 10
       padding: Platform.OS === 'ios' ? 15 : 10,
       marginTop: 30,
       borderRadius: 7
    },
    greetings: {
       color: '#fff'
    }

 })