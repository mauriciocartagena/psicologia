import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { testShapeLoading } from '../../../actions/shape';
import { GetImageTest } from './GetImageTest';
import './styles.css';

export const ShapeScreen = () => {

    const dispatch = useDispatch();

    const { testShape } = useSelector(state => state.shape);

    useEffect(() => {
        dispatch( testShapeLoading() );
    }, [ dispatch ])
    
    return (
        <div className=" animated fadeIn">
           <div className="profile-nav alt">
                    <section className="panel">
                        <GetImageTest options={ testShape } />
                    </section>
                </div>
        </div>
    )
}
