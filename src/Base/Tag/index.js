import "./style.css"

function Tag ({text, showhat}){
    return(
        <div className="tag-wrapper" >
            
             <div className= "tag">
            
                {showhat && <svg class="haticon" focusable="false" viewBox="0 0 24 24" aria-hidden="true" ><path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z"></path></svg>}
       
                 {text}

            </div>
        </div>

    )
    
}

export default Tag 