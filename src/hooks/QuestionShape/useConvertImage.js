import { useMemo } from "react";

export const useConvertImage = (state = []) => {
  const images = useMemo(() => convertImage(state), [state]);

  function convertImage(data) {
    const question = convertToBase64(data.pregunta);
    const optionOne = convertToBase64(data.op1);
    const optionTwo = convertToBase64(data.op2);
    const optionThree = convertToBase64(data.op3);
    const optionFour = convertToBase64(data.op4);
    const optionFive = convertToBase64(data.op5);
    const optionSix = convertToBase64(data.op6);

    return {
      question: question,
      options: [
        optionOne,
        optionTwo,
        optionThree,
        optionFour,
        optionFive,
        optionSix,
      ],
    };
  }

  function convertToBase64(blob) {
    if (blob !== undefined) {
      const data = new Buffer.from(blob).toString("ascii");

      return data;
    }
  }

  return images;
};
