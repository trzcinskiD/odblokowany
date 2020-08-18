import React, { Component } from "react";
import { connect } from "frontity";
import Form from "./Form";

class Add extends Component {
  state = {
    comment: "",
    author: "",
    email: "",
    formIsSubmitting: false,
    formSubmittedSuccessfully: false,
    formSubmittedFailed: false,
    formErrors: { email: "", comment: "" },
    commentValid: false,
    emailValid: false,
    formValid: false
  };

  onChange = async ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value }, () => {
      this.validateField(name, value);
    });
  };

  validateField = (fieldName, value) => {
    let { formErrors, emailValid, commentValid } = this.state;

    switch (fieldName) {
      case "email":
        emailValid = value.match(
          /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
        formErrors.email = emailValid
          ? ""
          : "Czy wpisałeś email w prawidłowym formacie?";
        break;
      case "comment":
        commentValid = value.length < 65525;
        formErrors.comment = commentValid ? "" : "Komentarz jest za długi.";
        break;
      default:
        break;
    }
    this.setState(
      {
        formErrors: formErrors,
        emailValid: emailValid,
        commentValid: commentValid
      },
      this.validateForm
    );
  };

  validateForm = () => {
    this.setState({
      formValid: this.state.emailValid && this.state.commentValid
    });
  };

  onSubmit = async event => {
    const { libraries, postId, replyTo, setReplyTo } = this.props;
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
          comment: "",
          author: "",
          email: ""
        });
        setReplyTo(0);
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
    return (
      <Form
        onChange={this.onChange}
        onSubmit={this.onSubmit}
        formErrors={this.formErrors}
        replyTo={this.props.replyTo}
        formRef={this.props.formRef}
        setReplyTo={this.props.setReplyTo}
        {...this.state}
      />
    );
  }
}

export default connect(Add);
