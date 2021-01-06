import React from 'react'
import { PanelBody } from './PanelBody'

export const QuestionSimpleCard = ( { options } ) => {

    return (
        <div className="animated fadeIn" >
            <div className="panel-body profile-information">
               <PanelBody
                options={ options }
               />
            </div>
            <hr/>
        </div >
    )
}
