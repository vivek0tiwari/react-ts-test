import { renderHook, act } from '@testing-library/react';
import { useAPI } from './useApi';
import fetchMock from "fetch-mock";
import {backendData} from '../data'
const requestObj = {
    url:'https://jsonplaceholder.typicode.com/todos/1'
}
describe("useDataApi", () => {
    beforeAll(() => {
      global.fetch = fetch;
    });
    afterAll(() => {
      fetchMock.restore();
    });
  
    it("should return data with a successful request", async () => {
      const { result } = renderHook(() => useAPI(requestObj));
      fetchMock.mock("jsonplaceholder.typicode.com", {
        returnedData: {
            "userId": 1,
            "id": 1,
            "title": "delectus aut autem",
            "completed": false
            }
      });
      await act(async () => {
        result.current.callApi("test.com");
      });
  
      expect(result.current.data).toBe({
        returnedData: "foo"
      });
    });
  });