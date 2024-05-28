import "./styles.css";

function Button() {
  // const buttonName = "Get data";
  const sendButton = "Send";
  const getButton = "Get";
  const isGetButton = false;
  const buttonClass = "button-component";

  // 1 вариант
  // return <button className={buttonClass}>{buttonName}</button>;
  //
  // 2 вариант
  // return (
  //   <div>
  //     <h2>Button</h2>
  //     <button className={buttonClass}>
  //       {isGetButton ? getButton : sendButton}
  //     </button>
  //   </div>
  // );
  //
  // 3 вариант
  return (
    <button className={buttonClass}>
      {isGetButton ? getButton : sendButton}
    </button>
  );
}

export default Button;
