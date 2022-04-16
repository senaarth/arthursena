/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from "react";
import { TextField } from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import { styled } from "@mui/material/styles";
import axios from "axios";
import { CopyToClipboard } from "react-copy-to-clipboard";

import { Page } from "../../styles/global";
import { Wrapper } from "./styles";

/**
 * Contato Page
 * @return {JSX.Element}
 */

const Input = styled(TextField)({
  "&": {
    color: "#f6f6f6 !important",
    borderRadius: "8px 8px 0 0",
    width: "90%",
    maxWidth: 600,
    background: "#2e2e2e !important",
  },
  "& p": {
    backgroundColor: "#111 !important",
    margin: 0,
    paddingTop: 3,
    paddingTight: 14,
    paddingBottom: 0,
    paddingLeft: 14,
    height: 22,
  },
  "& label": {
    color: "#b1b1b1 !important",
  },
  "& label.Mui-focused": {
    color: "#b1b1b1 !important",
  },
  "& *": {
    color: "#f6f6f6 !important",
    fontFamily: `${['"Exo"', "sans-serif"].join(",")} !important`,
    letterSpacing: 1,
    borderColor: "#b1b1b1 !important",
    borderBottomColor: "#b1b1b1 !important",
  },
  "& *::after": {
    borderColor: "#b1b1b1 !important",
    borderBottomColor: "#b1b1b1 !important",
  },
  "&.Mui-error, & *.Mui-error, & *.Mui-error::before, & *.Mui-error::after": {
    color: "red !important",
    borderColor: "red !important",
    borderBottomColor: "red !important",
  },
});

const Button = styled(LoadingButton)({
  padding: 0,
  height: 45,
  maxWidth: "90%",
  borderRadius: 6,
  cursor: "pointer",
  fontWeight: 500,
  backgroundColor: "transparent",
  transition: "all 0.4s",
  color: "#b1b1b1 !important",
  fontSize: "1rem",
  fontFamily: `${['"Exo"', "sans-serif"].join(",")} !important`,
  marginTop: "1.25rem",
  "& *": {
    color: "#b1b1b1 !important",
    maxWidth: "90%",
    transition: "all 0.4s",
  },
  "&:hover": {
    color: "white",
    backgroundColor: "#2e2e2e !important",
    padding: "0 2.25rem",
  },
});

export default function Contato(): JSX.Element {
  const [loading, setLoading] = React.useState(false);
  const [finished, setFinished] = React.useState(false);
  const [msg, setMsg] = React.useState("Mensagem enviada com sucesso");
  const [mailCall, setCall] = React.useState<string | null>(null);
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [validation, setValidation] = React.useState({
    name: false,
    email: false,
    message: false,
  });

  function validateEmail(toValidate: string) {
    return Boolean(
      String(toValidate)
        .toLowerCase()
        .match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        )
    );
  }

  async function validateForm() {
    await setValidation({
      name: name === "" || name.replace(/[ ]/g, "").length === 0,
      email: email === "" || !validateEmail(email),
      message: message === "" || message.replace(/[ ]/g, "").length === 0,
    });

    if (
      name === "" ||
      name.replace(/[ ]/g, "").length === 0 ||
      email === "" ||
      !validateEmail(email) ||
      message === "" ||
      message.replace(/[ ]/g, "").length === 0
    ) {
      setFinished(true);
      setMsg("Favor preencher todos os campos de maneira válida");
      setTimeout(() => {
        setFinished(false);
      }, 3000);
      return;
    }

    handleSubmit();
  }

  async function handleSubmit() {
    setLoading(true);

    try {
      await axios
        .post(
          "/api/contato",
          { name, email, message },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
        .then(() => {
          setTimeout(() => {
            setLoading(false);
            setFinished(true);
          }, 1000);
        })
        .catch(() => {
          throw new Error();
        });

      setMsg("Mensagem enviada com sucesso");
      setName("");
      setEmail("");
      setMessage("");
      setValidation({
        name: false,
        email: false,
        message: false,
      });

      setTimeout(() => {
        setFinished(false);
      }, 5000);
    } catch {
      setLoading(false);
      setFinished(true);

      setMsg("Erro ao enviar mensagem, favor tentar novamente");

      setTimeout(() => {
        setFinished(false);
      }, 5000);
    }
  }

  React.useEffect(() => {
    if (!mailCall) return;

    setTimeout(() => {
      setCall(null);
    }, 5000);
  }, [mailCall]);

  return (
    <Page style={{ marginTop: 0 }}>
      <h1>Entre em Contato</h1>
      <p className="mail-call">
        {mailCall || (
          <>
            Ou você pode{" "}
            <CopyToClipboard
              text="contato@arthursena.com.br"
              onCopy={() => {
                setCall("E-mail copiado para área de transferência.");
              }}
            >
              <span role="button">copiar meu endereço de e-mail</span>
            </CopyToClipboard>
          </>
        )}
      </p>
      <Wrapper>
        <Input
          id="filled-basic"
          label="Nome"
          variant="filled"
          value={name}
          className={validation?.name ? "Mui-error" : "Mui-valid"}
          error={validation?.name}
          helperText={validation?.name ? "Campo obrigatório" : ""}
          onChange={({ target }) => {
            setName(target.value);
            setValidation({
              ...validation,
              name:
                target.value === "" ||
                target.value.replace(/[ ]/g, "").length === 0,
            });
          }}
          onBlur={() =>
            setValidation({
              ...validation,
              name: name === "" || name.replace(/[ ]/g, "").length === 0,
            })
          }
        />
        <Input
          id="filled-basic"
          label="E-mail"
          variant="filled"
          value={email}
          className={validation?.email ? "Mui-error" : "Mui-valid"}
          error={validation?.email}
          helperText={validation?.email ? "Campo obrigatório" : ""}
          onChange={({ target }) => {
            setEmail(target.value);
          }}
          onBlur={() =>
            setValidation({
              ...validation,
              email: email === "" || !validateEmail(email),
            })
          }
        />
      </Wrapper>
      <Input
        id="filled-multiline-static"
        label="Mensagem"
        multiline
        rows={10}
        variant="filled"
        value={message}
        className={validation?.message ? "Mui-error" : "Mui-valid"}
        error={validation?.message}
        helperText={validation?.message ? "Campo obrigatório" : ""}
        onChange={({ target }) => {
          setMessage(target.value);
          setValidation({
            ...validation,
            message:
              target.value === "" ||
              target.value.replace(/[ ]/g, "").length === 0,
          });
        }}
        onBlur={() =>
          setValidation({
            ...validation,
            message: message === "" || message.replace(/[ ]/g, "").length === 0,
          })
        }
      />
      {finished ? (
        <p
          style={{
            paddingTop: 14.5,
            fontWeight: 500,
            fontSize: "1rem",
            marginTop: "1.75rem",
            color: "#b1b1b1",
            maxWidth: "90%",
            textAlign: "center",
            textTransform: "uppercase",
          }}
        >
          {msg}
        </p>
      ) : (
        <Button
          loading={loading}
          variant="text"
          onClick={() => validateForm()}
          disabled={finished}
          style={finished ? { backgroundColor: "transparent !important" } : {}}
        >
          {!loading ? "ENVIAR" : ""}
        </Button>
      )}
    </Page>
  );
}
