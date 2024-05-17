import "../styles/ContMenos.css"

export const ContMenos = ({ restar }) => {

  return (
    <button
    className="btn-menos"
    onClick={restar}>
        -
    </button>
  )
}
