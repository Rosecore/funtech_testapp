import React from "react";
import "./AdditionalInfo.scss";

interface AdditionalInfoProps {
  numbers: string;
  small: string;
}

const AdditionalInfo = ({ numbers, small }: AdditionalInfoProps) => {
  return (
    <div className="additional-info">
      <p className="additional-info__numbers">{numbers}</p>
      <p className="additional-info__small">{small}</p>
    </div>
  );
};

export default AdditionalInfo;
