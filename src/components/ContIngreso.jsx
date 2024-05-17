import "../styles/ContIngreso.css"

export const ContIngreso = ({ nuevo, setNuevo }) => {

    const onChange = (event) =>{
        const value = event.target.value
        setNuevo(value === '' ? '' : parseInt(value))
        event.preventDefault()
    }

  return (
    <div className="input">
        <label htmlFor="ingreso">Ingresa un numero</label>
        <input
        name="ingreso"
        type="number"
        value={nuevo}
        onChange={onChange}/>
    </div>
  )
}
