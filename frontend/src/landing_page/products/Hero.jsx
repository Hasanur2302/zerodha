import React from 'react'

function Hero() {
    return (
        <div className='container border-bottom mb-5'>
            <div className='row mt-5 p-5 text-center'>
                <h1>Technology</h1>
                <h3 className='text-muted mt-3 fs-3'>Sleek, modern and intuitive trading platforms</h3>
                <p className='mt-2 mb-4'>
                    Check out our{" "}
                    <a href="" style={{ textDecoration: "none" }}>
                    investment offerings{" "}
                    <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
                    </a>
                </p>
            </div>
        </div>
    );
}

export default Hero;