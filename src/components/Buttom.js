const ButtonItem = ({ descricao, handdletaskdelete }) => {
  return (
    <>
      <button onClick={handdletaskdelete}>botão {descricao}</button>
    </>
  );
};

export default ButtonItem;
