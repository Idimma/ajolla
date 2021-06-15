import { createContext, useState } from "react";

export const DonationsContext = createContext();

const DonationsContextProvider = props => {
  // modal state for add doantions
  const [addDonationsModal, setAddDonationsModal] = useState(false);

  const [addDonationModalAnimation, setAddDonationModalAnimation] =
    useState(false);

  return (
    <DonationsContext.Provider
      value={{
        addDonationsModal,
        setAddDonationsModal,
        addDonationModalAnimation,
        setAddDonationModalAnimation
      }}
    >
      {props.children}
    </DonationsContext.Provider>
  );
};

export default DonationsContextProvider;
