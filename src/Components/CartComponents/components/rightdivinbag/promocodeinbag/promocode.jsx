import LocalOfferOutlinedIcon from '@mui/icons-material/LocalOfferOutlined';
import "./promocode.css"

export const Promocode=()=>{


    return (
        <div id="promocodes" style={{border:"1px solid lightgrey"}}>
            
            <div>COUPONS</div>
            <div style={{display:"flex",justifyContent:"space-around"}}>
            <p><LocalOfferOutlinedIcon/></p>
            <p>Apply Coupons</p>
            <p><button id="myBtn">Apply</button></p>
            </div>

        </div>
        
    
    )
}