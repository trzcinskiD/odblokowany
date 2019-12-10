import React, { Component } from "react";
import { connect } from "frontity";

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

    const submitButtonText = formIsSubmitting ? (
      <input type="submit" value="Dodaję komentarz..." disabled />
    ) : (
      <input type="submit" value="Dodaj komentarz" />
    );

    const cancelReplyButton = replyTo ? (
      <button onClick={() => setReplyTo(0)}>Anuluj</button>
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
        <form ref={formRef} onSubmit={this.onSubmit}>
          <div>
            <label htmlFor="author">Nick</label>
            <input
              id="author"
              name="author"
              type="text"
              required
              disabled={formIsSubmitting}
              value={author}
              onChange={this.onChange}
            />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              name="email"
              required
              disabled={formIsSubmitting}
              value={email}
              onChange={this.onChange}
            />
          </div>
          <div>
            <label htmlFor="comment">Komentarz</label>
            <textarea
              id="comment"
              name="comment"
              cols="45"
              rows="8"
              maxLength="65525"
              required
              disabled={formIsSubmitting}
              value={comment}
              onChange={this.onChange}
            />
          </div>
          {cancelReplyButton}
          {submitButtonText}
        </form>
        {successMessageMarkup}
        {errorMessageMarkup}
      </div>
    );
  }
}

export default connect(Add);
