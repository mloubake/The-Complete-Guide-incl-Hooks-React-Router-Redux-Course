import styled from "styled-components";

export const FormControl = styled.div`
  margin: 0.5rem 0;

  label {
    margin-bottom: 0.5rem;

    display: block;

    font-weight: bold;
    color: ${({ invalid }) => (invalid ? "red" : "black")};
  }

  input {
    width: 100%;
    padding: 0 0.25rem;

    display: block;

    border: 1px solid ${({ invalid }) => (invalid ? "red" : "#ccc")};
    background: ${({ invalid }) => (invalid ? "#ffd7d7d" : "transparent")};
    font: inherit;
    line-height: 1.5rem;
  }

  input:focus {
    outline: none;
    background: #fad0ec;
    border-color: #8b005d;
  }
`;
