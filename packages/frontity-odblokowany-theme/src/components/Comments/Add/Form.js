import React from "react";
import { styled } from "frontity";
import Button from "../../../styles/Button";

const Form = ({
  comment,
  author,
  email,
  formIsSubmitting,
  formSubmittedSuccessfully,
  formSubmittedFailed,
  replyTo,
  formRef,
  setReplyTo,
  onSubmit,
  onChange,
  formErrors,
  formValid,
}) => {
  const submitButtonText = (
    <Button type="button" disabled={!formValid} onClick={onSubmit}>
      {formIsSubmitting ? "Dodaję komentarz..." : "Dodaj komentarz"}
    </Button>
  );

  const cancelReplyButton = replyTo ? (
    <Button type="button" onClick={() => setReplyTo(0)}>
      Anuluj
    </Button>
  ) : null;

  const successMessageMarkup = formSubmittedSuccessfully ? <p>Dzięki! Komentarz pojawi się na stronie po zatwierdzeniu.</p> : null;

  const errorMessageMarkup = formSubmittedFailed && !formSubmittedSuccessfully ? "Coś poszło nie tak... przykro mi spróbuj później." : null;

  const validateFieldErrors = Object.keys(formErrors).map((fieldName, i) => {
    if (formErrors[fieldName].length > 0) {
      return <ErrorMessage key={i}>{formErrors[fieldName]}</ErrorMessage>;
    } else {
      return "";
    }
  });

  return (
    <div>
      {replyTo ? <h2>Odpowiedz na komentarz</h2> : <h2>Dodaj komentarz</h2>}
      <StyledForm ref={formRef}>
        <input id="author" name="author" type="text" placeholder="Autor" required disabled={formIsSubmitting} value={author} onChange={onChange} />
        <input id="email" type="email" name="email" placeholder="Email" required disabled={formIsSubmitting} value={email} onChange={onChange} />
        <textarea
          id="comment"
          name="comment"
          placeholder="Wpisz swój komentarz"
          cols="45"
          rows="8"
          maxLength="65525"
          required
          disabled={formIsSubmitting}
          value={comment}
          onChange={onChange}
        />
        <Buttons>
          {cancelReplyButton}
          {submitButtonText}
        </Buttons>
      </StyledForm>
      <FormInfo>
        {successMessageMarkup}
        {validateFieldErrors}
        {errorMessageMarkup && <ErrorMessage>{errorMessageMarkup}</ErrorMessage>}
      </FormInfo>
    </div>
  );
};

export default Form;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  & input,
  textarea {
    margin-bottom: 1em;
  }
`;

const Buttons = styled.div`
  align-self: flex-end;
  justify-content: space-between;
  & button {
    margin: 0.5em;
  }
`;

const FormInfo = styled.div`
  text-align: center !important;
`;

const ErrorMessage = styled.p`
  color: var(--error);
  margin: 0;
`;
