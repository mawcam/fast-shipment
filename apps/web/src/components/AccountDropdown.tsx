import { useState, useEffect, useRef } from "react";
import useLogin from "../hooks/useLogin";
import useMe from "../hooks/useMe";
import useUsers from "../hooks/useUsers";
import VerticalArrow from "./Icons/VerticalArrow";

const AccountDropdown = () => {
  const { data: me, loading } = useMe();
  const { data: users } = useUsers();
  const { login } = useLogin();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleUserSelect = async (selectedUserId: string) => {
    const selectedUser = users?.find((user) => user.id === selectedUserId);
    setIsOpen(false);
    if (selectedUser) {
      login({ email: selectedUser.email, password: "password123" });
    }
  };

  return (
    <div ref={dropdownRef} className="account-dropdown">
      {loading ? (
        <div className="account-dropdown-button">
          <span>Loading User...</span>
        </div>
      ) : (
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="account-dropdown-button"
        >
          <span>Hi, {me?.name || "User"}</span>
          <VerticalArrow
            className={`account-dropdown-arrow ${isOpen ? "open" : ""}`}
          />
        </button>
      )}

      {isOpen && (
        <div className="account-dropdown-menu">
          {users?.map((user) => (
            <button
              key={user.id}
              onClick={() => handleUserSelect(user.id)}
              className="account-dropdown-item"
            >
              <div className="account-dropdown-item-content">
                <span className="account-dropdown-name">{user.name}</span>
                <span className="account-dropdown-email">{user.email}</span>
              </div>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default AccountDropdown;
