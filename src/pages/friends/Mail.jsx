import "@styles/pages/friends/Mail.scss";
import AddFriends from "./AddFriends";

function Mail() {
  return (
    <div className="container">
      <h1>친구 요청</h1>
      <p>n개의 새로운 메세지가 있습니다.</p>
      <div className="wrapper">
        <AddFriends btnCount={1} />

        <p>n개의 친구 요청이 있습니다.</p>
        <AddFriends btnCount={2} />
      </div>
    </div>
  );
}

export default Mail;
