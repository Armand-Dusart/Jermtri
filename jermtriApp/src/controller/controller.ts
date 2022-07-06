import axios from "axios";

export default class Controller {
  _url: string = "http://localhost:2000";

  catchError(error: Error) {
    console.log(error);
  }
  async get(url: string): Promise<any> {
    let result = null;

    await axios({
      method: "get",
      url: this._url + url,
    })
      .then(function (response) {
        result = response.data;
      })
      .catch(this.catchError);

    return result;
  }

  async post(url: string, data: FormData): Promise<any> {
    let result = null;

    await axios({
      method: "post",
      url: this._url + url,
      data: data,
    })
      .then(function (response) {
        result = response.data;
      })
      .catch(this.catchError);

    return result;
  }
}
