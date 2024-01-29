export default function TabButton({ children, onSelect }) {
  console.log('TAB BUTTON EXECUTING');
  return <button onClick={onSelect}>{children}</button>;
}
