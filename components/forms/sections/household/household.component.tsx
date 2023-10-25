import { FormEvent, useState } from 'react';
import HouseholdRow from './row/row.component';
import { Member } from 'types/member';

const membersInitialState = [
  {
    id: 1,
    covered: true,
    fullName: 'Tom Netzband',
    nickName: 'Tom',
    subscriber: false,
    insurance: 'primary',
    idSsn: '000-00-0000',
  },
  {
    id: 2,
    covered: true,
    fullName: 'Christine Netzband',
    nickName: 'Chris',
    subscriber: true,
    insurance: 'primary',
    idSsn: '000-00-0000',
  },
  {
    id: 3,
    covered: false,
    fullName: 'Stephen Netzband',
    nickName: 'Steve',
    subscriber: false,
    insurance: 'primary',
    idSsn: '000-00-0000',
  },
];

export default function Household() {
  const [members, setMembers] = useState<Member[]>(membersInitialState);

  const handleFormChange = (e: FormEvent, member: Member) => {
    const target = e.target as HTMLInputElement;

    let val = target.value;

    const updatedMember = {
      ...member,
      [target.name]: val,
    };

    if (target.name === 'covered') {
      updatedMember.covered = target.checked;
    }

    if (target.name === 'subscriber') {
      updatedMember.subscriber = target.checked;
    }

    const updatedMembers = members.map((member) => {
      // Update radio buttons since there can only be one subscriber
      if (updatedMember.subscriber && updatedMember.id !== member.id) {
        member.subscriber = false;
      }

      if (updatedMember.id === member.id) return updatedMember;

      return member;
    });
    setMembers(updatedMembers);

    console.log(updatedMembers);
  };

  return (
    <div className="text-neem-font-default">
      <h2 className="mb-3 text-base">Household</h2>
      <div className="grid gap-4 grid-cols-6 text-xs">
        <div className="col-span-1">Covered</div>
        <div className="col-span-2">Name</div>
        <div className="col-span-1 text-center">Subscriber</div>
        <div className="col-span-1">Insurance</div>
        <div className="col-span-1">ID</div>

        {members.map((member) => {
          return (
            <HouseholdRow
              handleFormChange={handleFormChange}
              key={member.id}
              member={member}
            />
          );
        })}
      </div>
    </div>
  );
}
