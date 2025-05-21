# 🤖 Echobot

**Echobot** is a simple full-stack chatbot that echoes back your messages. Built using **React + TailwindCSS** on the frontend and **FastAPI** on the backend, it demonstrates frontend-backend integration with modern tools.

---

## 🛠 Tech Stack

- **Frontend:** React, TailwindCSS
- **Backend:** FastAPI (Python)

---

## 📦 Getting Started

### Clone the Repo

```bash
git clone https://github.com/your-username/echobot.git
cd echobot

**FRONTEND**
cd Frontend
npm install
npm run dev

**For Backned**
cd Backend

# (Optional but recommended)
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate

# Install dependencies
pip install -r requirements.txt

# Or install manually
pip install fastapi uvicorn

# Start the server
uvicorn main:app --reload


