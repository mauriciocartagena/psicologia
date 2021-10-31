import React, { useEffect, useState } from 'react'
import { TestShapeCard } from './TestShapeCard';

export const TestBodyProfile = ({ options }) => {

    const [data, setData] = useState([]);

    useEffect(() => {

        setData(options);

    }, [options]);

    return (
        <React.Fragment>
            {
                (data !== [])
                &&
                data.map((question, key) => (
                    <TestShapeCard
                        key={key}
                        questionData={question}
                        option={data}
                    />
                ))
            }
        </React.Fragment>
    )
}
