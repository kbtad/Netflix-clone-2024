import React from 'react'
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import "./footer.css";

const footer = () => {
  return (
    <div className="footer_outer_container">
        <div className="footer_inner_container">
            <div className="footer_icons">
                <FacebookOutlinedIcon />  
                <InstagramIcon /> 
                <YouTubeIcon />
            </div>
            <div className="footer_data">
             <div>
                <ul>
                    <li>Audio description</li>
                    <li> Invester Relation</li>
                    <li> Legal Notice</li>
                </ul>
                <div className='service_code'>
                    <p>
                    Service Code  
                    </p>

                 </div>
                <div className='copy-write'>
                    &copy;1997-2024 Netflix, Inc
                </div> 
             </div>
             
            <div>
                <ul>
                        <li>Help Center</li>
                        <li> Job</li>
                        <li> Legal Notice</li>
                    </ul>
           </div>
           <div>
                <ul>
                        <li> Gift Card</li>
                        <li> Terms of Use</li>
                        <li> Cookies Performance</li>
                    </ul>
           </div>
           <div>
                <ul>
                        <li> Media Center </li>
                        <li> Privacy</li>
                        <li> Contanct Us</li>
                    </ul>
           </div>
        {/* <div className='service_code'>
            <p>
              Service Code  
            </p>

        </div>
        <div className='copy-write'>
            &copy;1997-2024 Netflix, Inc
        </div> */}
        </div>
        </div>
        </div>
  
  )
  
}

export default footer