import axios from 'axios';
import { useEffect, useState } from 'react';
import './footer.scss'
import '../../index.scss'
import '../Icon/style.css'



const Footer = () => {
    return (
        <div className='Footer'>
            <footer class="containerFooter animate__animated animate__bounceInUp">
                <p class="copyright">Copyright &copy 2022
                    Hecho por <b>Alexis González Villanueva</b>
                    <a href="https://github.com/Gonvi007" target="_blank">
                        <i class="icon icon-github"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/gonvi007/" target="_blank">
                        <i class="icon icon-linkedin"></i>
                    </a>
                </p>
            </footer>
        </div>
    )
}



export {Footer}