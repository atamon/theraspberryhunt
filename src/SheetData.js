export default class SheetData {
  
  /**
   * 
   * @param {Object} options
   * @param {string} options.url
   * @param {Array<import("./data").DoorItem>} options.baseData
   */
  constructor({ url, baseData }) {

    this.url = url;
    this.baseData = baseData;
  }

  /**
   * @returns {Promise<Array<import("./data").DoorItem>>}
   */
  async getData() {
    const res = await fetch(this.url);
    const csv = await res.text();

    const map = new Map();
    csv.split('\n').forEach(line => {
      const [label, red, black] = line.split(',');
      map.set(label, {
        nRed: Number.parseInt(red),
        nBlack: Number.parseInt(black)
      });
    });

    return this.baseData.map(door => {
      const values = map.get(door.label);
      if (!values) return door;

      return Object.assign({}, door, {
        expectedValues: {
          nRed: values.nRed,
          nBlack: values.nBlack,
        }
      });
    });
  }
}