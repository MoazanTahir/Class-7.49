import type { clickType } from "../Common/click";
export type Action =
    | { type: "a"; }
    | { type: "b"; }
    | { type: "c"; }
    | { type: "d"; }
    | { type: "e"; }
    | { type: "f"; }
    | { type: "g"; }
    | { type: "h"; }

function Reducer(state: clickType, action: Action): clickType {
    switch (action.type) {
        case "a":
            return { a: "border-black", b: "border-transparent", c: "border-transparent", d: "border-transparent",e: "border-transparent", f: "border-transparent", g: "border-transparent", h: "border-transparent" };
        case "b":
            return { a: "border-transparent", b: "border-black", c: "border-transparent", d: "border-transparent",e: "border-transparent", f: "border-transparent", g: "border-transparent", h: "border-transparent" };
        case "c":
            return { a: "border-transparent", b: "border-transparent", c: "border-black", d: "border-transparent",e: "border-transparent", f: "border-transparent", g: "border-transparent", h: "border-transparent" };
        case "d":
            return { a: "border-transparent", b: "border-transparent", c: "border-transparent", d: "border-black",e: "border-transparent", f: "border-transparent", g: "border-transparent", h: "border-transparent" };
        case "e":
            return { a: "border-transparent", b: "border-transparent", c: "border-transparent", d: "border-transparent",e: "border-black", f: "border-transparent", g: "border-transparent", h: "border-transparent" };
        case "f":
            return { a: "border-transparent", b: "border-transparent", c: "border-transparent", d: "border-transparent",e: "border-transparent", f: "border-black", g: "border-transparent", h: "border-transparent" };
        case "g":
            return { a: "border-transparent", b: "border-transparent", c: "border-transparent", d: "border-transparent",e: "border-transparent", f: "border-transparent", g: "border-black", h: "border-transparent" };
        case "h":
            return { a: "border-transparent", b: "border-transparent", c: "border-transparent", d: "border-transparent",e: "border-transparent", f: "border-transparent", g: "border-transparent", h: "border-black" };
        default:
            return state;
    }
}
export default Reducer;