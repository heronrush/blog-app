import search_icon from "../../public/search_icon.svg";
import notification from "../../public/notification.png";
import write from "../../public/write.png";
import user_account from "../../public/user_account.png";

export default function Topbar() {
  return (
    <div className="flex justify-between px-5 py-2 border-b">
      {/* this div is for logo and search bar */}
      <div className="flex">
        <h3 className="text-3xl font-semibold">Medium</h3>
        <SearchBar />
      </div>

      {/* this div is for account and other things  */}
      <div className="flex items-center justify-between w-40">
        <img
          src={write}
          alt="write_img"
          className="w-5 h-5 hover:cursor-pointer"
        />
        <span className="-ml-5 hover:cursor-pointer">Write</span>
        <img
          src={notification}
          alt="notification_img"
          className="w-5 h-5 hover:cursor-pointer"
        />
        <img
          src={user_account}
          alt="user_img"
          className="w-5 h-5 hover:cursor-pointer"
        />
      </div>
    </div>
  );
}

function SearchBar() {
  return (
    <div className="flex ml-5">
      <img src={search_icon} alt="search-icon" className="w-5" />
      <input
        type="text"
        placeholder="Search"
        className="outline-none bg-gray-200 rounded-full pl-3"
      />
    </div>
  );
}
