from fastapi import FastAPI
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware

app.add_middleware(
    CORSMiddleware,
    allow_origins=["https://echobot-45w9.vercel.app"],  
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


app = FastAPI()

# Define the expected payload structure
class MessagePayload(BaseModel):
    message: str

@app.get("/")
def read_root():
    return {"message": "Server is running 🚀"}

# Define the POST endpoint
@app.post("/chat")
async def receive_message(payload: MessagePayload):
    return {"reply": f"You said: {payload.message}"}

if __name__ == "__main__":
    port = int(os.environ.get("PORT", 8000))  
    uvicorn.run("main:app", host="0.0.0.0", port=port)