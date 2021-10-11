const Callback = (props) => {
  const onBtnClick = () => {
    console.log("Button clicked in CallBack Component");
    props.onNotify();
  };

  return <button onClick={onBtnClick}>Send Notification</button>;
};

export default Callback;
