import React, { Component } from "react";
import { connect, styled } from "frontity";

class Add extends Component {
  state = {
    comment: "",
    author: "",
    email: "",
    formIsSubmitting: false,
    formSubmittedSuccessfully: false,
    formSubmittedFailed: false
  };

  onChange = async ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  onSubmit = async event => {
    const { libraries, postId, replyTo } = this.props;
    const { comment, author, email } = this.state;

    event.preventDefault();
    this.setState({
      formIsSubmitting: true
    });

    const data = JSON.stringify({
      post: postId,
      author_name: author,
      author_email: email,
      content: comment,
      parent: replyTo
    });

    try {
      const response = await fetch(
        `${libraries.source.api.api}/wp/v2/comments`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: data
        }
      );
      if (response.ok === true) {
        this.setState({
          formIsSubmitting: false,
          formSubmittedSuccessfully: true,
          comment: ""
        });
      } else {
        this.setState({
          formIsSubmitting: false,
          formSubmittedFailed: true
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    const {
      comment,
      author,
      email,
      formIsSubmitting,
      formSubmittedSuccessfully,
      formSubmittedFailed
    } = this.state;

    const { replyTo, formRef, setReplyTo } = this.props;

    const submitButtonText = (
      <button type="button" onClick={this.onSubmit}>
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
      formSubmittedFailed && formSubmittedSuccessfully === false ? (
        <p>Błąd podczas dodawania komentarza. Spróbuj później.</p>
      ) : null;

    return (
      <div>
        {replyTo ? <h4>Odpowiedz na komentarz</h4> : <h4>Dodaj komentarz</h4>}
        <StyledForm ref={formRef}>
          <div>
            <input
              id="author"
              name="author"
              type="text"
              placeholder="Pseudonim"
              required
              disabled={formIsSubmitting}
              value={author}
              onChange={this.onChange}
            />
            <input
              id="email"
              type="email"
              name="email"
              placeholder="Email"
              required
              disabled={formIsSubmitting}
              value={email}
              onChange={this.onChange}
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
              onChange={this.onChange}
            />
          </div>
          <Buttons>
            {cancelReplyButton}
            {submitButtonText}
          </Buttons>
        </StyledForm>
        {successMessageMarkup}
        {errorMessageMarkup}
      </div>
    );
  }
}

export default connect(Add);

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
    background: white;
    outline: none;
    border: none;
    transition: box-shadow 0.3s ease;
    margin-top: 1rem;
    padding: 0.75rem 1rem;
    &:focus {
      box-shadow: rgba(0, 0, 0, 0.416) 0px 0px 10px 0px;
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
