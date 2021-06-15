import { createContext, useState } from "react";

export const CharityContext = createContext();

const CharityContextProvider = props => {
  // modal state for add charity
  const [addCharityModal, setAddCharityModal] = useState(false);

  // state for modal animation
  const [addCharityModalAnimation, setAddCharityModalAnimation] =
    useState(false);

  return (
    <CharityContext.Provider
      value={{
        addCharityModal,
        setAddCharityModal,
        addCharityModalAnimation,
        setAddCharityModalAnimation
      }}
    >
      {props.children}
    </CharityContext.Provider>
  );
};

export default CharityContextProvider;
