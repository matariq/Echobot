# Use the official public FastAPI image with Python 3.9
FROM tiangolo/uvicorn-gunicorn-fastapi:python3.9

# Copy requirements and install dependencies
COPY ./requirements.txt /app/requirements.txt
RUN pip install --no-cache-dir --upgrade -r /app/requirements.txt

# Copy your FastAPI app code
COPY main.py /app
