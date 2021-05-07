import React, { useRef, useState, useEffect } from "react";
import {
  DropBtn,
  DropContainer,
  DropMenu,
  DropMenuItems,
  DropMenuLinks,
  FlagImage,
} from "./DropdownElements";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const Dropdown = () => {
  const dropdownRef = useRef(null);
  const [isActive, setIsActive] = useState(false);
  const onClick = () => setIsActive(!isActive);
  useEffect(() => {
    const pageClickEvent = (e) => {
      if (
        dropdownRef.current !== null &&
        !dropdownRef.current.contains(e.target)
      ) {
        setIsActive(!isActive);
      }
    };

    // If the item is active (ie open) then listen for clicks
    if (isActive) {
      window.addEventListener("click", pageClickEvent);
    }

    return () => {
      window.removeEventListener("click", pageClickEvent);
    };
  }, [isActive]);

  return (
    <>
      <DropContainer>
        <DropBtn onClick={onClick}>
          <FlagImage
            src="/images/indonesia-logo.png"
            alt="Indonesia Language"
            width={20}
            height={20}
          />
          <span>ID</span>
          {isActive ? <IoIosArrowUp /> : <IoIosArrowDown />}
        </DropBtn>
        <DropMenu active={isActive} ref={dropdownRef}>
          <DropMenuItems>
            <FlagImage
              src="/images/indonesia-logo.png"
              alt="Indonesia Language"
              width={20}
              height={20}
            />
            <DropMenuLinks href="/">ID</DropMenuLinks>
          </DropMenuItems>
          <DropMenuItems>
            <FlagImage
              src="/images/england-logo.png"
              alt="English Language"
              width={20}
              height={20}
            />
            <DropMenuLinks href="/en">EN</DropMenuLinks>
          </DropMenuItems>
        </DropMenu>
      </DropContainer>
    </>
  );
};

export default Dropdown;
