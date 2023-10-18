import {Fragment, useState} from "react";

export const MyCounter=()=>{
    const[count,setCount]=useState(0);
    return(
        <Fragment>
            <div  className="text-primary bg-info p-5  w-50 container" style={{'marginLeft':'300pt','marginTop':'100px'}}>
              <h2>Counter Program</h2>
            <div>
                <div>
                <button onClick={()=>setCount(count+1)} className="btn btn-primary mt-2">Increment  : {count}   </button>
                </div>
                
                <div>
                    <button onClick={()=>setCount(count-1)} className="btn btn-primary mt-2">Decrement  : {count}   </button>
                </div>
                
                <div>
                    <button onClick={()=>setCount(a=>a+1)} className="btn btn-primary mt-2">Increment  : {count}   </button>
                </div>
                
                <div>
                    <button onClick={()=>setCount(a=>a-1)} className="btn btn-primary mt-2">Decrement  : {count}   </button>
                </div>
                
                    <div>
                        <button onClick={()=>setCount(0)} className="btn btn-primary mt-2" >Reset  : {count}   </button>
                    </div>
            </div>
                </div>
        </Fragment>
    )
}