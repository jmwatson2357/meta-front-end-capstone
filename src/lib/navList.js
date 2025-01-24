const useNavList = () => {
  const navList = [
    { key: 1, label: "Home", url: "/" },
    { key: 2, label: "About", url: "/" },
    { key: 3, label: "Services", url: "/" },
    { key: 4, label: "Menu", url: "/" },
    { key: 5, label: "Reservations", url: "/" },
    { key: 6, label: "Order online", url: "/booking" },
    { key: 7, label: "Login", url: "/" },
  ];

  const contactList = [
    { key: "address", label: "Address:", value: "123 Town Street, Chicago" },
    { key: "phone", label: "Phone:", value: "1+ (123) 456-7890" },
    { key: "email", label: "E-mail:", value: "lemon@littleLemon.com" },
  ];
  const socialList = [
    { key: "facebook", label: "Facebook", url: "/" },
    { key: "instagram", label: "Instagram", url: "/" },
    { key: "x", label: "X", url: "/" },
  ];
  return { contactList, navList, socialList };
};

export { useNavList };
