import { resource } from "../schemas/locales";

const CTAs = () => {
  return (
    <div className="flex">
      <button
        className="border-gray-400 border-[1px] rounded text-gray-600 inline-block p-2 min-w-20 hover:bg-gray-100"
        type="reset"
      >
        {resource.text.reset}
      </button>
      <button
        className="border-[#7F56D9] border-[1px] rounded text-white bg-[#7F56D9] inline-block p-2 min-w-20 ml-2 md:ml-5 hover:bg-purple-600"
        type="submit"
      >
        {resource.text.save}
      </button>
    </div>
  );
};

export default CTAs;
