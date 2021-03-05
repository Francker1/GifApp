import { renderHook } from "@testing-library/react-hooks";
import { useFetchGifs } from "../../hooks/useFetchGifs";

//librería para testear hooks

describe("Test in hook useFetchGifs", () => {

    test("should return initial State", async () => {

        // const { data, loading } = useFetchGifs("Homer");
        const { result, waitForNextUpdate } =  renderHook( () => useFetchGifs("Homer") );
        const { data, loading } = result.current;
        
        await waitForNextUpdate();

        expect( data ).toEqual([]);
        expect( loading ).toBe(true);
    });

    test("should returns array of imgs and loading = false", async () => {

        const { result, waitForNextUpdate } = renderHook(() => useFetchGifs("Homer"));
        await waitForNextUpdate();

        const { data, loading } = result.current;

        expect(data.length).toBe(10);
        expect(loading).toBe(false);
    });
});
