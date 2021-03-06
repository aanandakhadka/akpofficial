import React from 'react';
import { NavLink } from 'react-router-dom';
import './common.css';


const Common = (props) =>{


    return(

        <>

            <section id="header" className="d-flex align-items-center">

                <div className="container-fluid">

                    <div className='row'>

                        <div className="col-10 mx-auto">

                            <div className="row">

                                <div className="colm1 col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">

                                    <h1>

                                        {props.name} <strong className="brand-name">AKP OFFICIAL</strong>

                                    </h1>

                                    <h2 className="my-3">

                                        {props.content}

                                    </h2>

                                    <div>

                                        <NavLink to={props.visit} className="btn-get-started">

                                            {props.btname}

                                        </NavLink>

                                    </div>


                                </div>


                                <div className="colm2 col-lg-6 order-1 order-lg-2 header-img ">


                                    <img src={props.imggsrc} className="img-fluid animated" alt="CommonImg" />


                                </div>

                            </div>
                            

                        </div>


                    </div>

                </div>


            </section>


        </>



    );


}

export default Common;