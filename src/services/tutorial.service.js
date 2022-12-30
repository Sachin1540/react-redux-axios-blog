import http from "../http-common";

class TutorialDataService {
  getAll() {
    return http.get("/getusers");
  }

  get(id) {
    return http.get(`/induser/${id}`);
  }

  create(data) {
    return http.post("/create", data);
  }

  patch(id, data) {
    return http.put(`/updateuser/${id}`, data);
  }

  delete(id) {
    return http.delete(`/deleteuser/${id}`);
  }

  deleteAll() {
    return http.delete(`/tutorials`);
  }

  findByTitle(title) {
    return http.get(`/tutorials?title=${title}`);
  }
}

export default new TutorialDataService();
