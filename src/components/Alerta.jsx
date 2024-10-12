const Alerta = ({alerta}) => {
  return (
    <div className={`${alerta.error ? 'w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold py-3 px-4 rounded-lg hover:opacity-90 focus:ring-4 focus:ring-purple-300 transition duration-300 transform' : 'from-green-400 to-green-500'} bg-gradient-to-br text-center p-3 rounded-lg uppercase text-white font-bold text-sm my-5`}>
        {alerta.msg}
    </div>
  )
}

export default Alerta
