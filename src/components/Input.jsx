export default function Input({ Label, textarea }) {
  return (
    <p>
      <Label>{Label}</Label>
      {textarea ? <textarea /> : <input />}
    </p>
  );
}
