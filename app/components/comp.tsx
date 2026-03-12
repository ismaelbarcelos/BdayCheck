
"use client"

import test from "node:test"
import { useState } from "react"
import Confetti from "react-confetti"
import { motion } from "framer-motion"
import { div, h1 } from "framer-motion/client"






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
  let mesDvida = Math.abs(statemes - mes)

  

 

//confete
const [aniversario, setAniversario] = useState(false)

//painel 
const [mostrarResultado, setMostrarResultado] = useState(false)

  function verificar(){

  if(statedia == dia && statemes == mes){
    setRes(valorName)
    
    setAniversario(true)

  }else{
    setAniversario(false)
    setRes("Ainda não é seu aniverdsario. Mas não se preocupe, cada dia é especial! Volte no dia certo para receber seus parabéns")
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

  <div className="ml-5 mr-5">


    { !mostrarResultado ?(

   <div className="flex-col text-center p-10">

  <img className="w-40 mx-auto" src="/cake2.png" alt="" />

      <h1 className="text-5xl text-purple-400 m-6 ">Verificador de Aniversário</h1>
 
  <div className=" max-w-md mx-auto bg-white  p-9 rounded-xl shadow-lg flex items-center justify-center  w-full"> 

      <motion.div 
  initial={{ opacity: 0, y: 40 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1.6 }}
  
>


    <div className="flex-col text-center ">
    
     <h1 className="flex  text-3xl text-gray-500 m-3"><img className="w-10 mb-3 ml-4 mr-4" src="/social.png" alt="" />  Qual o seu nome?</h1>

<input placeholder="Digite seu nome..." value={valorName} onChange={e=>setName(e.target.value)} className="border border-purple-300  p-5 rounded-xl w-90" type="text" name="" id="" />

<h1 className=" flex text-3xl text-gray-500 m-3 "> <img className="w-10 mr-2 " src="/calendar.png" alt="" />      Quando você nasceu?</h1>

<input value={valorData} onChange={e=>setData(e.target.value)} className="p-5 rounded-xl w-90 border-purple-300 border" type="date" name="" id="" />

<button className="bg-gradient-to-l  from-purple-300 to-purple-500   p-5 block w-80 rounded-xl mx-auto m-9 text-blue-50" onClick={verificar}>Verificar</button>

</div>
</motion.div>
</div>

</div>
    ) : aniversario === true ? ( 

    

<motion.div className=""
  initial={{ opacity: 0, y: 40 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1.6 }}
  
>

<div className="text-center max-w-md mx-auto  bg-white rounded-xl shadow-lg p-9">

   {aniversario && <Confetti />}



 <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9 }}
                className="text-lg text-gray-500 mb-8"
              >
                <img className="w-30 mx-auto m-5 " src="/cake.png" alt="bolo e aniversario" />
 
                    <h1 className="text-5xl text-purple-400 mt-6"> Feliz Aniversário <span className="text-5xl">{valorRes}!</span></h1>
                <h1>Hoje você completa {anosDvida} anos de vida!</h1>
               <h1>Que este novo ano de vida seja repleto de alegrias, conquistas e muita felicidade! 🥳🎂🙏</h1> 
              </motion.p>




  <button className="bg-gradient-to-l  from-purple-300 to-purple-500   p-5 block w-80 rounded-xl mx-auto m-9 text-blue-50" onClick={voltar}>Voltar</button>



</div>

</motion.div>
      
     ):(

      <motion.div className=""
  initial={{ opacity: 0, y: 40 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1.6 }}
  
>

<div className="text-center max-w-md mx-auto  bg-white  p-9 rounded-xl shadow-lg ">

   {aniversario && <Confetti />}

 <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9 }}
                className="text-lg text-gray-500 mb-8"
              >
             <img className="w-30 mx-auto m-5 " src="/heart.png" alt="bolo e aniversario" />

               

              <h1 className="text-4xl text-purple-400 mt-6"  >Olá {valorName }!</h1>

               <h1 className="text-2xl">{valorRes}</h1>

                <img className="w-30 mx-auto m-5 " src="/party-hat.png" alt="chapel de aniversario" />

              </motion.p>
  <button className="bg-gradient-to-l  from-purple-300 to-purple-500   p-5 block w-80 rounded-xl mx-auto m-9 text-blue-50" onClick={voltar}>Voltar</button>

</div>

</motion.div>
    
     )} 

  </div>

)
}


