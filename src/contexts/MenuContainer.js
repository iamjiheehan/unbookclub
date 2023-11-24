import React, { useState } from "react";

export const MenuContext = React.createContext();

function MenuContainer({ children }) {
    const [selectedMenu, setSelectedMenu] = useState("home");

    const handleMenuClick = (menu) => {
        setSelectedMenu(menu);
    };

    return (
        <MenuContext.Provider value={{ selectedMenu, handleMenuClick }}>
            {children}
        </MenuContext.Provider>
    );
}

export default MenuContainer;
