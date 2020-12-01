import React from 'react'
import { useSelector } from 'react-redux'
import { Aside } from './Aside';
import { Header } from './Header';

export const Layout = ({ children }) => {
    
    const { uiSection } = useSelector(state => state.ui)   

    return (
        
        <section id="container" >
            <Header />
            <Aside />    
           <section 
               id="main-content"                 
               className={ uiSection } 
               >
               <section className="wrapper">

                { children }

               </section>
           </section>
       </section>
    )
}
