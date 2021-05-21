import React, { useState }from 'react';

import {
   View, 
   Text,
   StyleSheet,
   TextInput,
   Platform, 
} from 'react-native'

import { Button } from '../components/Button';
import { SkillCard } from '../components/SkillCard'

export function Home() {

   const [newSkill, setNewSkill] = useState('');
   const [mySkills, setMySkills] = useState([]);

   function handleAddNewSkill(){
      // No estado tem como recuperar oque esta dentro dele com essa função. Para poder adicionar varias coisas dentro do array
      setMySkills(oldState => [...oldState, newSkill]);
   }


   return (

      <View style={styles.container}>
         
         <Text style={styles.title}>
            Bem vindo
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

         {/* as chaves {} são usada assim quando combinamos codigo jsx(Text, TouchOpacity e etc) com javascript */}
         {
            // o map percorre cada elemento dentro do vetor.
            mySkills.map(skill => (
               <SkillCard skill={skill}/>
            ))
         }
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

 })