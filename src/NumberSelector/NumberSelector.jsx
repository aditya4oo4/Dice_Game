
import styles from "./NumberSelector.module.css"

function NumberSelector({isSelected,setisSelected}) {
    const arrayNumber = [1, 2, 3, 4, 5, 6]
    
    

  return (
    <div className={styles.selector}>
        {arrayNumber.map((value, i) => (
            <div 
                onClick={() => setisSelected(value)} 
                key={i}
                className={styles.box}
                style={{
                    backgroundColor: value === isSelected ? "black" : "white",
                    color: value === isSelected ? "white" : "black"
                }}
            >
                {value}
                
            </div> 
        ))}
    </div>
  )
}

export default NumberSelector