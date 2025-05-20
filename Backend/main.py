from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI()

# Define the expected payload structure
class MessagePayload(BaseModel):
    message: str

# Define the POST endpoint
@app.post("/chat")
async def receive_message(payload: MessagePayload):
    return {"reply": f"You said: {payload.message}"}