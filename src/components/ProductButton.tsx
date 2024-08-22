import styled from "styled-components";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ProductButton = ({ text }: any) => {
  const StyledButton = styled.button`
    font-size: 10px;
    background: none;
    border: 2px solid gray;
    border-radius: 0.125rem;
    width: 100%;
    padding: 0;
    margin: 0;
    transition: background 0.3s ease;
    &:hover {
      border: 2px solid
        linear-gradient(
          104deg,
          rgba(93, 167, 235, 1) 2%,
          rgba(212, 227, 241, 1) 50%,
          rgba(93, 167, 235, 1) 100%
        );
      background: linear-gradient(
        104deg,
        rgba(93, 167, 235, 1) 2%,
        rgba(212, 227, 241, 1) 50%,
        rgba(93, 167, 235, 1) 100%
      );
    }
  `;

  return (
    <>
      <div className="m-0 p-0 ">
        <StyledButton>{text}</StyledButton>
      </div>
    </>
  );
};

export default ProductButton;
