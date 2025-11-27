# backend/Dockerfile
FROM python:3.12-slim

# No generar .pyc y buffer de salida
ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1

# Crear directorio
WORKDIR /app

# Instalar dependencias del sistema (opcional pero útil)
RUN apt-get update && apt-get install -y --no-install-recommends \
    build-essential \
  && rm -rf /var/lib/apt/lists/*

# Copiar requisitos e instalarlos
COPY requirements.txt /app/
RUN pip install --no-cache-dir -r requirements.txt

# Copiar todo el proyecto
COPY . /app

# Exponer puerto
EXPOSE 8000

# Ejecutar migraciones y levantar servidor
CMD ["sh", "-c", "python manage.py migrate && python manage.py runserver 0.0.0.0:8000"]
