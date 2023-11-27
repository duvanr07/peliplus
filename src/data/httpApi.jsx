import {API} from "../utils/constApp.jsx";

export function httpApi(path) {
    return fetch(API + path, {
        headers: {
            Authorization:
                "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjYTQzMGM0MmNkMzdjY2Q4YzIzNGMyMTI2NTBmYTEzNSIsInN1YiI6IjY1NjIyY2EwMDI4ZjE0MDBlMTMwMjM4ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.6ors4nY5DeZXYyu_zYoQEveakDc9QRG9fRz8OeC6Ltk",
                "Content-Type": "application/json;charset=utf-8"
        },
    }).then((result) => result.json());
}
