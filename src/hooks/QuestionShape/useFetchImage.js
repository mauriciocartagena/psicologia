import { useMemo } from "react";
import { useConvertImage } from "./useConvertImage";

export default function useFetchImage(questions) {
  const data = useMemo(() => destructuringQuestion(questions), [questions]);

  const value = useConvertImage(data);

  function destructuringQuestion(imagesToConvert) {
    const { data } = imagesToConvert;

    let dataToQuestions;

    data.map((e) => {
      return (dataToQuestions = e);
    });

    return dataToQuestions;
  }

  return value;
}
