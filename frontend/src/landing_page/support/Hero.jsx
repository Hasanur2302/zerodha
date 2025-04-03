import React from 'react'

function Hero() {
    return (
        <section className='container-fluid' id='supportHero'>
            <div className='p-5 mb-3' id="supportWrapper">
                <h4 className='fs-3'>Support Portal</h4>
                <a href="" className='fs-5'>Track Tickets</a>
            </div>
            <div className='row p-5 m-5'>
                <div className='col-6'>
                    <h1 className='fs-3'>
                        Search for an answer or browse help topics to create a ticket
                    </h1>
                    <input placeholder="Eg. how do I activate F&O" />
                    <br/>
                    <br/>
                    <a href='' className='fs-5'>Track account opening</a>
                    <a href='' className='fs-5' style={{marginLeft:"20px"}}>Track segment activation</a>
                    <a href='' className='fs-5' style={{marginLeft:"20px"}}>Intraday margins</a>
                    <a href='' className='fs-5' style={{marginLeft:"20px"}}>Kite user manual</a>
                </div>
                <div className='col-6 mb-5'cd desktop>
                    <h1 className='fs-2'>Featured</h1>
                    <ol>
                        <li>
                            <a href="" className='fs-5'>Current Takeovers and Delisting - January 2024</a>
                        </li>
                        <li>
                            <a href="" className='fs-5'>Latest Intraday leverages - MIS & CO</a>
                        </li>

                    </ol>
                </div>
            </div>
        </section>
    );
}

export default Hero;