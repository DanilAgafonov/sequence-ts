import { Sequence } from "../src/Sequence";

describe("Sequence", () => {
  let sequence: Sequence;

  beforeEach(() => {
    sequence = new Sequence("1");
  });

  describe("#toString", () => {
    it("returns initial value", () => {
      expect(String(sequence)).toBe("1");
    });
  });

  describe("#next", () => {
    it("returns instance of Sequence", () => {
      expect(sequence.next()).toBeInstanceOf(Sequence);
    });

    it("generates next state", () => {
      expect(String(sequence.next())).toBe("11");
    });

    it("generates next state 2 times", () => {
      expect(String(sequence.next().next())).toBe("21");
    });

    it("generates next state 3 times", () => {
      expect(String(sequence.next().next().next())).toBe("1211");
    });
  });
});
