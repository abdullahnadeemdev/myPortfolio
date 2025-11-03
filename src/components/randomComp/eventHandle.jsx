function Button({ onClick, children }) {
  return <button onClick={onClick}>{children}</button>;
}

export function PlayB({ movieName }) {
  function handleX() {
    alert(`Playing ${movieName}!`);
  }
  return (
    <>
      <Button onClick={handleX}>Play {movieName}</Button>
    </>
  );
}

export function UploadButton() {
  return <Button onClick={() => alert("Uploading!")}>Upload Image</Button>;
}

export default function Toolbar() {
  return (
    <div>
      <PlayB movieName="Iron Man" />
      <UploadButton />
    </div>
  );
}
