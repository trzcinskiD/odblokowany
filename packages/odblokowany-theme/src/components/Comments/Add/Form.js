import React from "react";
import { styled } from "frontity";

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
  formValid
}) => {
  const submitButtonText = (
    <button type="button" disabled={!formValid} onClick={onSubmit}>
      {formIsSubmitting ? "Dodaję komentarz..." : "Dodaj komentarz"}
    </button>
  );

  const cancelReplyButton = replyTo ? (
    <button type="button" onClick={() => setReplyTo(0)}>
      Anuluj
    </button>
  ) : null;

  const successMessageMarkup = formSubmittedSuccessfully ? (
    <p>Dzięki! Komentarz pojawi się na stronie po zatwierdzeniu.</p>
  ) : null;

  const errorMessageMarkup =
    formSubmittedFailed && !formSubmittedSuccessfully
      ? "Coś poszło nie tak... przykro mi spróbuj później."
      : null;

  const validateFieldErrors = Object.keys(formErrors).map((fieldName, i) => {
    if (formErrors[fieldName].length > 0) {
      return <ErrorMessage key={i}>{formErrors[fieldName]}</ErrorMessage>;
    } else {
      return "";
    }
  });

  return (
    <div>
      {replyTo ? <h4>Odpowiedz na komentarz</h4> : <h4>Dodaj komentarz</h4>}
      <StyledForm ref={formRef}>
        <div>
          <input
            id="author"
            name="author"
            type="text"
            placeholder="Autor"
            required
            disabled={formIsSubmitting}
            value={author}
            onChange={onChange}
          />
          <input
            id="email"
            type="email"
            name="email"
            placeholder="Email"
            required
            disabled={formIsSubmitting}
            value={email}
            onChange={onChange}
          />
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
        </div>
        <Buttons>
          {cancelReplyButton}
          {submitButtonText}
        </Buttons>
      </StyledForm>
      <FormInfo>
        {successMessageMarkup}
        {validateFieldErrors}
        {errorMessageMarkup && (
          <ErrorMessage>{errorMessageMarkup}</ErrorMessage>
        )}
      </FormInfo>
    </div>
  );
};

export default Form;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  input,
  textarea {
    font-family: inherit;
    font-size: 0.9em;
    line-height: inherit;
    width: 100%;
    background: var(--bg);
    outline: none;
    border: none;
    transition: box-shadow 0.3s ease;
    margin-top: 1rem;
    padding: 0.75rem 1rem;
    &:focus {
      box-shadow: var(--shadow) 0px 0px 10px 0px;
    }
  }
`;

const Buttons = styled.div`
  align-self: flex-end;
  justify-content: space-between;
  & button {
    margin: 0.5rem;
  }
`;

const ErrorMessage = styled.p`
  color: var(--error);
  margin: 0;
`;

const FormInfo = styled.div`
  text-align: center !important;
`;
