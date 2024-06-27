import { useState, useEffect } from "react";

import CyclicRecoilSlider from "@/frontend/components/ui/cyclic-recoil-sldier";
import ToggleControls from "@/frontend/components/ui/toggler-controls";
import { fetchUserAddressesIds } from "@/backend/server-actions/users/fetch-user-addresses-ids";
import { useUserDetailsContext } from "@/frontend/contexts/use-user-details";

type AddressPickerProps = {
  setAddressId: (quantity: number) => void;
};

const AddressPicker = ({ setAddressId }: AddressPickerProps) => {
  const ADDRESS_TYPES = ["Main", "Secondary"];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userAddressesIds, setUserAddressesIds] = useState<(number | null)[]>(
    [],
  );

  const { userId } = useUserDetailsContext();

  const handleOnToggle = () => {
    let newIndex;
    if (currentIndex) {
      newIndex = 0;
    } else newIndex = 1;
    setCurrentIndex(newIndex);
    setAddressId(userAddressesIds[newIndex]!);
  };

  useEffect(() => {
    const fetchCurrentUSerAddressesIds = async () => {
      try {
        const currentUSerAddressesIds = await fetchUserAddressesIds(userId!);
        setUserAddressesIds(currentUSerAddressesIds);
      } catch (error) {
        console.error("Error fetching user addresses Ids:", error);
      }
    };
    if (userId) {
      fetchCurrentUSerAddressesIds();
    }
  }, [userId]);

  useEffect(() => {
    if (userAddressesIds) {
      setAddressId(userAddressesIds[0]!);
    }
  }, [userAddressesIds]);

  return (
    <div className="flex w-full flex-col space-y-0.5">
      <div className="flex w-full justify-between">
        <div className="w-full">
          <CyclicRecoilSlider
            label={"address"}
            items={ADDRESS_TYPES}
            currentIndex={currentIndex}
            size="lg"
          />
        </div>
        <div className="">
          <ToggleControls
            currentIndex={currentIndex}
            handleOnToggle={handleOnToggle}
          />
        </div>
      </div>
    </div>
  );
};

export default AddressPicker;
