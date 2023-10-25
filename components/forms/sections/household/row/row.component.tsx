import { FormEvent } from 'react';
import { Member } from 'types/member';

type HouseholdRowProps = {
  member: Member;
  handleFormChange: (e: FormEvent<Element>, member: Member) => void;
};

const avatarColorClasses = ['', 'bg-neem-purple', 'bg-neem-blue', 'bg-neem-orange'];

export default function HouseholdRow({ member, handleFormChange }: HouseholdRowProps) {
  return (
    <>
      <div className="col-span-1">
        <input
          className="w-5 h-5 accent-neem-green"
          onChange={(e) => handleFormChange(e, member)}
          type="checkbox"
          checked={member.covered}
          name="covered"
        />
      </div>
      <div className="col-span-2">
        <div className="flex items-center text-sm">
          <div
            className={`${avatarColorClasses[member.id]} w-6 h-6 rounded-full mr-2`}
          ></div>
          <div>
            {member.fullName}{' '}
            <span className="text-neem-font-faded">{`(${member.nickName})`}</span>
          </div>
        </div>
      </div>
      <div className="col-span-1 text-center">
        <input
          className="w-5 h-5 accent-neem-green"
          onChange={(e) => handleFormChange(e, member)}
          type="radio"
          name="subscriber"
          checked={member.subscriber}
        />
      </div>
      <div className="col-span-1">
        <select
          className="border rounded p-3 w-full text-sm"
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
          className="border rounded p-3 w-full text-sm"
          onChange={(e) => handleFormChange(e, member)}
          type="text"
          name="idSsn"
          value={member.idSsn}
        />
      </div>
    </>
  );
}
