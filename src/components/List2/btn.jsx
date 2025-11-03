function Button(props) {
  let purpose = props.purpose;
  let func = props.func;
  let clr = props.clr;

  const upclr = `bg-[${clr}]`?.toString();
  console.log("upclr", upclr);

  //   const { func, purp, bg } = props;
  return (
    <>
      <button
        className={`border-1 rounded-sm px-2 cursor-pointer`}
        onClick={func}
        style={{ backgroundColor: clr }}
      >
        {purpose}
      </button>
    </>
  );
}

export default Button;
