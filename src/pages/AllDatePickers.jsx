import { DatePicker } from "zaman";



const AllDatePickers = ({props}) => {

    return ( 
    <>
    <div style={{
        display: "flex",
        flexDirection: "row-reverse",
    }}>     
    
    <div style={{
        marginRight: "150px",
        marginTop: "50px",
        
    }}>
    <DatePicker 
    style={{
        padding: 150,
        dir: 'rtl',
        
    }}
    onChange={(e) => console.log(e.value)} />
    </div>
    </div>
    </>
    )
}

export default AllDatePickers;