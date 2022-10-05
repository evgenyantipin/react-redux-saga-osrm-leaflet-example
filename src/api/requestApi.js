import { sleep } from "../utils";

const fakeRequests = [
  {
    key: "0",
    original: [56.132062, 36.967308],
    destination: [59.860288, 30.186976],
    name: "Москва Санк-Петербург",
  },
  {
    key: "1",
    original: [55.753526, 37.599858],
    destination: [56.865196696367526, 35.91166734695435],
    name: "Москва Тверь",
  },
  {
    key: "2",
    original: [55.718703, 37.737055],
    destination: [55.790346, 37.39415],
    name: "по Москве",
  },
];

const requestApi = {
  async getAll() {
    await sleep(1000);
    return fakeRequests;
  },
};

export default requestApi;
