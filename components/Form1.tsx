import Household from './forms/sections/household/household.component';

export default function Form1() {
  return (
    <div className=" text-semibold sans text-gray-500">
      <form className=" max-w-32 border border-gray-300 p-4 m-4 rounded-md">
        <div className=" mb-7">
          <h1>Form 1</h1>
        </div>
        <div>
          <Household />
        </div>
      </form>
    </div>
  );
}
