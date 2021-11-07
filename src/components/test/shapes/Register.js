import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { questionClearShape } from "../../../actions/questionShape";
import { FormQuestionShape } from "./FormQuestionShape";

export const Register = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(questionClearShape());
  }, [dispatch]);

  return (
    <div className="row">
      <div className="col-sm-12  animated fadeIn">
        <section className="panel">
          <header className="panel-heading">REGISTRO DE PRUEBAS FORMAS</header>
          <FormQuestionShape />
        </section>
      </div>
    </div>
  );
};
