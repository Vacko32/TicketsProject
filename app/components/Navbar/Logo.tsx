"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlane } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/navigation";

const Logo = () => {
  return (
    <div className="text-2xl font-semibold">
      <FontAwesomeIcon icon={faPlane} />
      FlightTicketsCompany
    </div>
  );
};

export default Logo;
