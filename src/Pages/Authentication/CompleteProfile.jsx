import CompleteProfileForm from "../Features/Authentication/CompleteProfileForm";

function CompleteProfile() {
  return (
    <div className="container xl:max-w-screen-xl">
      <div className="absolute left-1/2 top-1/2 w-full -translate-x-1/2 -translate-y-1/2 transform sm:max-w-md">
        <CompleteProfileForm />
      </div>
    </div>
  );
}
export default CompleteProfile;
