
"use client"

import test from "node:test"
import { useState } from "react"
import Confetti from "react-confetti"
import { motion } from "framer-motion"
import { div, h1 } from "framer-motion/client"
import { intervalToDuration } from 'date-fns';


import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"




export function AppCheckNiver(){

 

 

  const [valorRes , setRes] = useState("")

  const time =new Date()
  let mes = time.getMonth()+1
  let dia = time.getDate()
 // let ano = time.getFullYear()
  
  


const [valorData, setData] = useState<Date | null>(null)
 const [valorName,setName] = useState("")
  

//confete
const [aniversario, setAniversario] = useState(false)

//painel 
const [mostrarResultado, setMostrarResultado] = useState(false)

 const [mesesParaAniversario, setMesesParaAniversario] = useState(0)
  const [diasParaAniversario, setDiasParaAniversario] = useState(0)
  const[anoDevida,setanoDEvida] = useState(0)

  let Diasfaltando;
  let Mesesfaltando;
 if(diasParaAniversario >1 ){
   Diasfaltando = diasParaAniversario +" dias "
  }else {
    Diasfaltando = diasParaAniversario + "dia"
  }

  if(mesesParaAniversario >1){
    Mesesfaltando = mesesParaAniversario + " meses"
  }else{
    Mesesfaltando = mesesParaAniversario + " mês"
  }


  function verificar(e:any){
    e.preventDefault()

// recebe os valores recebido dos dados do input pelo useState() 
    if (!valorData || !valorName)return

   const statedia = valorData.getDate()
const statemes = valorData.getMonth()+1
const stateano = valorData.getFullYear()


  const time =new Date()
 
  let ano = time.getFullYear()


// calcular o tempo que falta para o aniversario 
   
  let SeuAniversario = new Date(time.getFullYear(), statemes-1, statedia);


  if (SeuAniversario < time) {
     SeuAniversario.setFullYear(time.getFullYear() + 1);
    }

  const duration = intervalToDuration({ start: time, end: SeuAniversario });


   setMesesParaAniversario(duration.months ?? 0)
    setDiasParaAniversario(duration.days ?? 0)
   setanoDEvida(Math.abs(stateano - ano ))

  // fim de calcular o tempo de aniversario 


  if(statedia == dia && statemes == mes){
    setRes(valorName)
    
    setAniversario(true)

  }else{
    setAniversario(false)
    setRes("Ainda não é seu aniversário. Mas não se preocupe, cada dia é especial! Volte no dia certo para receber seus parabéns.🙂")
  }
   
 setMostrarResultado(true)
}

//função voltar para dar os dados
function voltar(){
  setMostrarResultado(false)
  setData(null)
  setName("")
}

return (

  <div >

    { !mostrarResultado ?(

   <div className="flex-col text-center p-4">

      <motion.div 
  initial={{ opacity: 0, y: 40 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1.6 }}
  
>

  <img className="w-40 mx-auto" src="/cake2.png" alt="" />

      <h1 className="text-5xl text-purple-400 m-6 ">Verificador de Aniversário</h1>

  <div className=" max-w-md mx-auto bg-white  p-9 rounded-xl shadow-lg flex items-center justify-center  "> 

    <div className="flex-col ">
    
     <h1 className="flex  text-3xl text-gray-500 m-"><img className="w-10 mb-3 ml-4 mr-4" src="/social.png" alt="" />  Qual o seu nome?</h1>
    
<form  onSubmit={verificar}>

<input required  placeholder="Digite seu nome..." value={valorName} onChange={e=>setName(e.target.value)} className="border border-purple-300  p-5 rounded-xl w-80  text-black" type="text" name="" id="" />

<h1 className=" flex text-3xl text-gray-500 mt-4 "> <img className="w-10 mr-1 mb-3 ml-4 " src="/calendar.png" alt="" />Seu nascimento?</h1>

 
<DatePicker 
  selected={valorData}
  onChange={(date:Date|null) => setData(date)}
  dateFormat ="dd/MM/yyyy"
  placeholderText="dd/mm/aaaa"
  showYearDropdown
  scrollableYearDropdown
  yearDropdownItemNumber={100}
  className="border p-4 rounded-xl w-80  border-purple-300 text-black"
  
/>

<button type="submit" className="bg-gradient-to-l  from-purple-300 to-purple-500   p-5 block w-80 rounded-xl mx-auto m-9 text-blue-50" >✨ Verificar </button>
</form>
</div>

</div>
</motion.div>
</div>

    ) : aniversario === true ? ( 

<motion.div className="mr-5 ml-5"
  initial={{ opacity: 0, y: 40 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1.6 }}
  
>
<img className="w-50 mx-auto mb-10 pt-25" src="/cake.png" alt="bolo e aniversario" />

<div className="text-center max-w-md mx-auto  bg-white rounded-xl shadow-lg p-9">

   {aniversario && <Confetti />}

 <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9 }}
                className="text-lg text-gray-500 mb-8"
              >
                
 
                    <h1 className="text-5xl text-purple-400 mt-6"> Feliz Aniversário <span className="text-5xl">{valorRes}!</span></h1>
                <h1 className="text-2xl">Hoje você completa {anoDevida}  anos de vida!</h1>
               <h1>Que este novo ano de vida seja repleto de alegrias, conquistas e muita felicidade! 🥳🎂🙏</h1> 
              </motion.p>

  <button className="bg-gradient-to-l  from-purple-300 to-purple-500   p-5 block w-80 rounded-xl mx-auto m-9 text-blue-50" onClick={voltar}>Voltar</button>

</div>

</motion.div>
      
     ):(

      <motion.div className="p-6"
  initial={{ opacity: 0, y: 40 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1.6 }}
  
>
   <img className="w-30 mx-auto mb-15 " src="/heart.png" alt="coracao" />

<div className="text-center max-w-md mx-auto  bg-white  p-9 rounded-xl shadow-lg ">
  
   {aniversario && <Confetti />}

 <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9 }}
                className="text-lg text-gray-500 mb-8"
              >
            
              <h1 className="text-5xl text-purple-400 mt-6 mb-5"  >Olá {valorName }!</h1>

               <h1 className="text-2xl">{valorRes}</h1>
               <h2 className="text-red-400">Faltam {Mesesfaltando} e  {Diasfaltando} ⏰ </h2>

                <img className="w-30 mx-auto m-5 " src="/party-hat.png" alt="chapel de aniversario" />

              </motion.p>
  <button className="bg-gradient-to-l  from-purple-300 to-purple-500   p-5 block w-80 rounded-xl mx-auto m-9 text-blue-50" onClick={voltar}>Voltar</button>

</div>

</motion.div>
    
     )} 

  </div>

)
}


