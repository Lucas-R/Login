import request from "supertest";
import { server } from "@src/server";

describe("Teste de integridade da rota /auth/**", () => {
    it("Deve retornar 201 no status code a rota /auth/register", async () => {
        const response = await request(server).post("/auth/register");
        expect(response.status).toEqual(201);
    });
    
    it("Deve retornar 200 no status code a rota /auth/logon", async () => {
        const response = await request(server).post("/auth/login");
        expect(response.status).toEqual(200);
    });
    
    it("Deve retornar 200 no status code a rota /auth/logout", async () => {
        const response = await request(server).get("/auth/logout");
        expect(response.status).toEqual(200);
    });
});