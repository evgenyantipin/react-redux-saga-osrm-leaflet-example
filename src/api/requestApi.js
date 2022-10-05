import { sleep } from "../utils";

const fakeRequests = [
  {
    key: "0",
    original: [56.8547032, 35.8892314],
    destination: [56.8673242, 35.9374052],
    name: "Tверь",
  },
  {
    key: "1",
    original: [55.753526, 37.599858],
    destination: [55.733681, 37.493871],
    name: "Москва",
  },
  {
    key: "2",
    original: [56.844677060092046, 35.88546752929688],
    destination: [56.865196696367526, 35.91166734695435],
    name: "Тверь",
  },
  {
    key: "3",
    original: [56.8547032, 35.8892314],
    destination: [56.8673242, 35.9374052],
    name: "Tверь",
  },
  {
    key: "4",
    original: [55.753526, 37.599858],
    destination: [55.733681, 37.493871],
    name: "Москва",
  },
  {
    key: "5",
    original: [55.753526, 37.599858],
    destination: [56.865196696367526, 35.91166734695435],
    name: "Тверь Москва",
  },
];

const requestApi = {
  async getAll() {
    await sleep(1000);
    return fakeRequests;
  },
};

export default requestApi;
