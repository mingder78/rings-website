"use client";

export default function Note({ note, toggleImportance }) {
  const label = note.important ? "make not important" : "make important";

  return (
    <li style={{ marginBottom: 8 }}>
      {note.content}{" "}
      <button onClick={() => toggleImportance(note.id)}>{label}</button>
    </li>
  );
}
