import React from 'react'

function Education() {
    return ( 
        <div className='container'>
            <div className='row p-5'>
                <div className='col-6'>
                    <img src='/media/images/education.svg' style={{width:"70%"}}/>
                </div>
                <div className='col-6'>
                    <h1 className='mb-4 fs-2'>Free and open market education</h1>
                    <p>Versity, the largest online stock market education book in the world covering everything from the basics to advanced trading</p>
                    <a href='' style={{textDecoration:"none"}}>Versity <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                    <br/>
                    <p className='mt-5'>Trading Q&A, the most active trading and investment community in India for all your market related quearies.</p>
                    <a href='' style={{textDecoration:"none"}}>Trading Q&A <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                </div>
            </div>
        </div>
    );
}

export default Education;