import { FormEvent } from 'react';
import { Member } from 'types/member';

type HouseholdRowProps = {
  member: Member;
  handleFormChange: (e: FormEvent<Element>, member: Member) => void;
};

export default function HouseholdRow({ member, handleFormChange }: HouseholdRowProps) {
  return (
    <>
      <div className="col-span-1">
        <input
          onChange={(e) => handleFormChange(e, member)}
          type="checkbox"
          checked={member.covered}
          name="covered"
        />
      </div>
      <div className="col-span-2">{member.fullName}</div>
      <div className="col-span-1">
        <input
          onChange={(e) => handleFormChange(e, member)}
          type="radio"
          name="subscriber"
          checked={member.subscriber}
        />
      </div>
      <div className="col-span-1">
        <select
          onChange={(e) => handleFormChange(e, member)}
          name="insurance"
          value={member.insurance}
        >
          <option value="primary">Primary</option>
          <option value="secondary">Secondary</option>
        </select>
      </div>
      <div className="col-span-1">
        <input
          onChange={(e) => handleFormChange(e, member)}
          type="text"
          name="idSsn"
          value={member.idSsn}
        />
      </div>
    </>
  );
}
