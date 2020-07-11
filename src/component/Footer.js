import React from 'react'


export const Footer =  (props) =>  {
    const {company, email} = props;
    return (
        <div>
            <small>
            <span className='text-success col-md-6 offset-md-3'>Powered By {company} </span>| <span className="text-primary">{email}</span>
            </small>
        </div>
    )
    
}










