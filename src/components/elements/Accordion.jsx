import React, { useState } from "react";

//icons
import { BsChevronDown } from "react-icons/bs";
import { BsChevronUp } from "react-icons/bs";

export const Accordion = ({ label, children}) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => setIsOpen(prevIsOpen => !prevIsOpen);

    return (
        <>
            <div className="flex flex-1 justify-between my-2">
                <div><p>{label}</p></div>
                <button className="px-3" onClick={toggleAccordion}>
                    {
                        isOpen ? <BsChevronUp hßeight="10" width="10" /> : <BsChevronDown height="10" width="10" />
                    }
                </button>
            </div>
            {
                isOpen && <div className="accordion-content">{children}</div>
            }
        </>
    )
}