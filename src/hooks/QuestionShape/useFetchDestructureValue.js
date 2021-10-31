import { useEffect, useState } from "react";


export const useFetchDestructureValue = (pregunta = '') => {

    const [data, setData] = useState({ image: '' });

    const question = new Buffer.from(pregunta).toString("ascii");

    useEffect(() => {

        setData({
            image: question
        })

    }, [pregunta])

    return data;

}
