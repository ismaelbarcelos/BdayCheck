export function Teste(){
  return (
    <h1>ola</h1>



    <a href="https://www.flaticon.com/free-icons/network" title="network icons">Network icons created by graphicmall - Flaticon</a>
  )
}











<motion.div
  initial={{ opacity: 0, y: 40 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1.6 }}
  
>

<div className="text-center max-w-md mx-auto  bg-white border p-9 rounded-xl shadow-lg  border-b-blue-500">

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
