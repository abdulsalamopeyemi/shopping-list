import "./shopping-list.scss";
import Header from "./Header";
import Aside from "./Aside";
import Main from "./Main";
export default function App() {
  return (
    <div className="app-shell">
      <Header />
      <div className="dashboard-layout">
        <Main />
        <Aside />
      </div>
    </div>
  );
}

// const btnStyle = { background: "transparent", border: "none" };

// function Bio() {
//   const [bio, setBio] = useState("I love coding and crusing ");
//   const [draft, setDraft] = useState(bio);
//   const [showEdit, setShowEdit] = useState(null);
//   const [showBtn, setshowBtn] = useState(true);

//   const handleOnEdit = function () {
//     setDraft(bio);
//     setShowEdit(true);
//     setshowBtn(false);
//   };

//   return (
//     <div
//       style={{
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "center",
//         gap: "1rem",
//       }}
//     >
//       {showEdit ? (
//         <div style={{ display: "flex", flexDirection: "column" }}>
//           <textarea value={draft} onChange={(e) => setDraft(e.target.value)}>
//             {draft}
//           </textarea>
//           <div style={{ alignSelf: "flex-end" }}>
//             <Button
//               el="Cancel"
//               onClick={() => {
//                 setBio(bio);
//                 setShowEdit(false);
//               }}
//             />
//             <Button
//               el="Update"
//               onClick={() => {
//                 setBio(draft);
//                 setShowEdit(false);
//               }}
//             />
//           </div>
//         </div>
//       ) : (
//         <p>{bio}</p>
//       )}

//       {showBtn && <Button el={<Pencil />} onClick={handleOnEdit} />}
//     </div>
//   );
// }

// function Button({ el, onClick }) {
//   return (
//     <button style={btnStyle} onClick={onClick}>
//       {el}
//     </button>
//   );
// }
