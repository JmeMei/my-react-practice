export const UserDetails = ({
  name,
  isOnline,
  hideOffline,
  isPremium,
  isNewUser,
  role,
}) => {
  if (hideOffline && !isOnline) {
    return null;
  }

  let roleBadge = null;
  if (role === "admin") {
    roleBadge = <span> 🔑 admin</span>;
  } else if (role === "moderator") {
    roleBadge = <span>👮 Moderator</span>;
  } else if (role === "vip") {
    roleBadge = <span> 💎 VIP</span>;
  }

  return (
    <div>
      <h3>
        {name}
        {isPremium && <span>⭐️</span>}
        {isNewUser && <span>🎉</span>}
        {roleBadge}
      </h3>

      <span>{isOnline ? "Online" : "Offline"}</span>
      <p>{isOnline ? "Available for chat" : "Not available"}</p>
      {isOnline ? (
        <button>Send message</button>
      ) : (
        <small>Check back later</small>
      )}
    </div>
  );

  //   if (isOnline) {
  //     return (
  //       <div>
  //         <h3>{name}</h3>
  //         <span> Online </span>
  //         <p>Available for chat</p>
  //         <button> Send message </button>
  //       </div>
  //     );
  //   }

  //   return (
  //     <div>
  //       <h3>{name}</h3>
  //       <span>Offline</span>
  //       <p>Not available</p>
  //       <small>Check back later</small>
  //     </div>
  //   );
};
