import React, { useState } from "react";
import { styled } from "frontity";
import { useForm } from "react-hook-form";
import Button from "../../styles/Button";
import jsonp from "jsonp";
import toQueryString from "to-querystring";

const NewsletterForm = () => {
  const [status, setStatus] = useState(null);
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data) => {
    const params = toQueryString({ EMAIL: data.email, NAME: data.name });
    const url = process.env.MAILCHIMP_SUBSCRIBE_URL.replace("/post?", "/post-json?") + "&" + params;
    setStatus("sending");
    jsonp(url, { param: "c" }, (err, data) => {
      if (err || data.result !== "success") {
        setStatus("error");
      } else if (data.msg.includes("already subscribed")) {
        setStatus("duplicate");
      } else {
        setStatus("success");
      }
    });
  };

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <input name="name" placeholder="Jak się do Ciebie zwracać?" ref={register({ required: true })} />
      <input
        name="email"
        placeholder="E-mail"
        ref={register({
          required: true,
          pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        })}
      />
      <Button type="submit">Zapisuję się</Button>
      {errors.name || errors.email ? <p>Proszę, uzupełnij poprawnie wymagane pola.</p> : null}
      {status === "sending" && <p>Zapisuję...</p>}
      {status === "error" && <p>Coś poszło nie tak, spróbuj ponownie.</p>}
      {status === "success" && <p>Twój email jest już na liście.</p>}
      {status === "success" && <p>Dzięki za subskrypcję!</p>}
    </StyledForm>
  );
};

export default NewsletterForm;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  & button {
    align-self: center;
  }
  & input {
    margin-bottom: 1.5em;
    width: 100%;
  }
  & p {
    margin-top: 1.5em;
    margin-bottom: 0;
  }
`;
