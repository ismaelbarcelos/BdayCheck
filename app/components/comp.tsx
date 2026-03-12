
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

  //pegar o anos de vida 
  let anosDvida = Math.abs(stateano - ano)

 

//confete
const [aniversario, setAniversario] = useState(false)

//painel 
const [mostrarResultado, setMostrarResultado] = useState(false)

  function verificar(){

  if(statedia == dia && statemes == mes){
    setRes("Feliz Aniversario "+valorName+" !")
    
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

  <div >


    { !mostrarResultado ?(

   <div className="p-50">

       <motion.div 
  initial={{ opacity: 0, y: 40 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1.6 }}
  
>
  <div className=" max-w-md mx-auto bg-white  p-9 rounded-xl shadow-lg flex items-center justify-center"> 

    <div className="flex-col text-center ">

    
     <h1>Qual o seu nome?</h1>
<input value={valorName} onChange={e=>setName(e.target.value)} className="border border-purple-300  p-5 rounded-xl w-90" type="text" name="" id="" />
<h1>Quando você nasceu?</h1>
<input value={valorData} onChange={e=>setData(e.target.value)} className="p-5 rounded-xl w-90 border-purple-300 border" type="date" name="" id="" />

<button className="bg-gradient-to-l  from-purple-300 to-purple-500   p-5 block w-80 rounded-xl mx-auto m-9" onClick={verificar}>Verificar</button>

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

<div className="text-center max-w-md mx-auto mt-20 bg-white border p-9 rounded-xl shadow-lg  border-b-blue-500">

   {aniversario && <Confetti />}

<img className="w-30 mx-auto m-5 " src="/cake.png" alt="bolo e aniversario" />
 
 <h1 className="text-xl">{valorRes}</h1>

 <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9 }}
                className="text-lg text-gray-500 mb-8"
              >
                <h1>Hoje você completa {anosDvida} anos de vida!</h1>
               <h1>Que este novo ano de vida seja repleto de alegrias, conquistas e muita felicidade! 🥳🎂🙏</h1> 
              </motion.p>




  <button onClick={voltar} className="bg-amber-800">voltar</button>



</div>

</motion.div>
    )}
  </div>

)
}


