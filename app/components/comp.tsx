
"use client"

import test from "node:test"
import { useState } from "react"
import Confetti from "react-confetti"
import { motion } from "framer-motion"






export function AppCheckNiver(){

  const [valorName,setName] = useState("")
  const [valorData, setData] = useState("")
  const [valorRes , setRes] = useState("")

  const time =new Date()
  let mes = time.getMonth()+1
  let dia = time.getDate()
  let ano = time.getFullYear()
  
  
// pegando as datas do setData do useState()
  const stateData = valorData.split("-")
  let statedia = Number(stateData[2])
  let statemes = Number(stateData[1])
  let stateano = Number(stateData[0])

//confete
const [aniversario, setAniversario] = useState(false)

//painel 
const [mostrarResultado, setMostrarResultado] = useState(false)

  function verificar(){

  if(statedia == dia && statemes == mes){
    setRes("parabens "+valorName+" voce está completando aniversario")
    console.log("teste")
    setAniversario(true)

  }else{
    setRes("ainda falta"+valorData+"para seu aniverdsario ")
  }
   
 setMostrarResultado(true)
}

//função voltar para dados
function voltar(){
  setMostrarResultado(false)
  setData("")
  setName("")
}

return (

  <div>


    { !mostrarResultado ?(

   <div >

       <motion.div 
  initial={{ opacity: 0, y: 40 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1.6 }}
  
>
  <div className=" max-w-md mx-auto mt-20 bg-white border p-9 rounded-xl shadow-lg border-b-blue-500      flex items-center justify-center"> 

    <div className="flex-col text-center">

    
     <h1>Qual o seu nome?</h1>
<input value={valorName} onChange={e=>setName(e.target.value)} className="border border-purple-300  p-5 rounded-xl w-90" type="text" name="" id="" />
<h1>Quando você nasceu?</h1>
<input value={valorData} onChange={e=>setData(e.target.value)} className="p-5 rounded-xl w-90 border-purple-300 border" type="date" name="" id="" />

<button className="bg-blue-900 p-5 block w-80 rounded-xl mx-auto m-9" onClick={verificar}>Verificar</button>

</div>
</div>
</motion.div>
</div>
    ):( 

<motion.div
  initial={{ opacity: 0, y: 40 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1.6 }}
  
>

<div className=" max-w-md mx-auto mt-20 bg-white border p-9 rounded-xl shadow-lg  border-b-blue-500">

   {aniversario && <Confetti />}

 
 <h1>{valorRes}</h1>

  <button onClick={voltar} className="bg-amber-800">voltar</button>



</div>

</motion.div>
    )}
  </div>

)
}


