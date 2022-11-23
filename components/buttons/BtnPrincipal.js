import { SERVER_PROPS_ID } from "next/dist/shared/lib/constants";

export default function BtnPrimary(props) {
  return (
    <button
      type="button"
      className="inline-flex items-center px-6 py-3 text-base font-medium bg-white border rounded-full shadow-sm text-neutral-600 border-neutral-600 focus:outline-none focus:ring-2 focus:ring-offset-2 hover:shadow-xl"
    >
      {props.children}
    </button>
  );
}
