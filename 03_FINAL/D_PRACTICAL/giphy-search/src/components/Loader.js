import React from 'react';

//a component that gives the user the spinning circle to look at while the page renders from a font awesome icon called spinner
const Loader = () => {
    return (
        <div className="loader">
            <i className="fas fa-spinner fa-4x fa-spin"/>
        </div>
      
    )
    
}

export default Loader