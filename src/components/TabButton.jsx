export default function TabButton(props) {
  function handleClick() {
    console.log('Hello there!!!');
  }

  return <button onClick={handleClick}>{props.children}</button>;
}
