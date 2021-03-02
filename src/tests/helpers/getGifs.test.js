import { getGifs } from "../../helpers/getGifs";


describe('Tests in fetch getGifs helper', () => {
   
    test("should render 10 elements", async () => {

        const gifs = await getGifs("Homer");

        expect(gifs.length).toBe(10);
    });

    test("should render 0 elements when no pass arguments", async () => {

      const gifs = await getGifs("");

      expect(gifs.length).toBe(0);
    });
});
