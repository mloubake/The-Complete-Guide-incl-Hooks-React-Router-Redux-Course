import styled from "styled-components";

export const GoalItem = styled.div`
  margin: 1rem 0;
  padding: 1rem 2rem;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  background: #8b005d;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  color: white;

  .span-icon {
    margin-right: 14px;

    cursor: pointer;
  }

  #bars {
    font-size: 1.8em;
  }

  #close-x {
    font-size: 1.6em;
    align-self: flex-end;
  }
`;
