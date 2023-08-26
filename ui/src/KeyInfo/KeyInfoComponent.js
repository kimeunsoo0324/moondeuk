import React from "react";
import './KeyInfoComponent.css'

const KeyInfoComponent=({title,contents})=>{
    return<>
    <div className="Compo">
    <div className="CompoA">
    <p className="title">{title}</p>
    </div>
    <div className="CompoB">
          <p className="contents">{contents}</p>
    </div>
    </div>
   </>
}
export default KeyInfoComponent;