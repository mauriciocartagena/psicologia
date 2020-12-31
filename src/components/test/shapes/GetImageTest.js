import React from 'react';
import { TestBodyProfile } from './ProfileShape/TestBodyProfile';

export const GetImageTest = ({ options = [] } ) => {    

    return (
        <div>
           <TestBodyProfile options={ options } />
        </div>
    )
}
