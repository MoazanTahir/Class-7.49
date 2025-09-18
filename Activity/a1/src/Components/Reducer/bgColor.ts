import type { bgColorType } from "../Common/bgColortype";
export type Action =
    | { type: "All"; }
    | { type: "Read"; }
    | { type: "Unread"; }
    | { type: "Threads"; }

function Reducer(state: bgColorType, action: Action):bgColorType {
    switch (action.type) {
        case "All":
            return { all: "bg-[#fdbac5] scale-120  ease-linear  border-[#fdbac5]", read: "bg-white", unread: "bg-white", threads: "bg-white" };
        case "Read":
            return { all: "bg-white", read: "bg-[#fdbac5]  scale-120  border-[#fdbac5]", unread: "bg-white", threads: "bg-white" };
        case "Unread":
            return { all: "bg-white", read: "bg-white", unread: "bg-[#fdbac5] scale-120   border-[#fdbac5]", threads: "bg-white" };
        case "Threads":
            return {...state, all: "bg-white", read: "bg-white", unread: "bg-white", threads: "bg-[#fdbac5] scale-120   border-[#fdbac5]" };
        default:
            return state;
    }
}
export default Reducer;